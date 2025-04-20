import type { FlexSearchData } from "./FlexSearchService";
import type { Node } from "@markdoc/markdoc";

import { slugifyWithCounter } from "@sindresorhus/slugify";
import Markdoc from "@markdoc/markdoc";
import { hrtime } from "node:process";
import fs from "node:fs/promises";
import path from "node:path";
import yaml from "js-yaml";
import { copyFile } from "node:fs";

const __dirname = path.resolve();

export type SectionCache = {
	content: string;
	frontmatter?: SectionFrontmatter;
	markdocNode: Node;
};

export type DocSection = {
	content: string;
	hash?: string;
	subsections: string[];
};

type SectionFrontmatter = {
	title: string;
	description: string;
	tags: string[];
};

class DocCache {
	private static readonly pagesDir = path.join(__dirname, "pages");
	private static instance: DocCache | null = null;

	private cache: Map<string, SectionCache> = new Map();
	private slugify = slugifyWithCounter();
	private cacheReady = false;

	private constructor() {
		this.populateCache();
	}

	private async getFiles(): Promise<string[]> {
		const files = await fs.readdir(DocCache.pagesDir, { recursive: true });
		return files.filter(
			(file) => file.endsWith(".md") || file.endsWith(".mdx"),
		);
	}

	private removeFrontmatter(content: string): string {
		const frontmatterRegex = /^---\n[\s\S]*?\n---/;
		return content.replace(frontmatterRegex, "").trim();
	}

	private async getFileContent(
		file: string,
	): Promise<[string, SectionFrontmatter | undefined, Node]> {
		const filePath = path.join(DocCache.pagesDir, file);

		try {
			const content = await fs.readFile(filePath, "utf-8");
			const frontmatter = yaml.load(
				content.split("---")[1] || "",
			) as SectionFrontmatter;
			return [
				this.removeFrontmatter(content),
				frontmatter,
				Markdoc.parse(content),
			];
		} catch (error) {
			console.error(`Error reading file ${filePath}:`, error);
			throw error;
		}
	}

	private nodeToString(node: Node): string {
		let string = "";

		if (node.type === "text" && typeof node.attributes?.content === "string") {
			string = node.attributes.content;
		}

		if (node.children) {
			for (const child of node.children) {
				string += this.nodeToString(child);
			}
		}

		return string;
	}

	private extractSections(node: Node, sections: DocSection[], isRoot = true) {
		if (isRoot) this.slugify.reset();

		if (["heading", "paragraph"].includes(node.type)) {
			const content = this.nodeToString(node).trim();

			if (node.type === "heading" && node.attributes?.level <= 2) {
				const hash = (node.attributes?.id as string) ?? this.slugify(content);
				const subsections: string[] = [];
				sections.push({ content, hash, subsections });
			} else {
				sections.at(-1)?.subsections.push(content);
			}

			return;
		}

		if (node.children) {
			for (const child of node.children) {
				this.extractSections(child, sections, false);
			}
		}
	}

	public fetchDocs() {
		const data = Array.from(this.cache.entries()).map(([key, section]) => {
			const sections: DocSection[] = [];
			this.extractSections(section.markdocNode, sections);
			return { key, sections };
		});

		return data;
	}

	private async cacheFile(file: string): Promise<void> {
		const [content, frontmatter, markdocNode] = await this.getFileContent(file);
		this.cache.set(file, { content, frontmatter, markdocNode });
	}

	private async populateCache(): Promise<void> {
		try {
			const files = await this.getFiles();

			console.log(`Found ${files.length} files to cache`);

			const cachePromises = files.map(async (file) => {
				return await this.cacheFile(file);
			});

			await Promise.all(cachePromises);
			this.cacheReady = true;
		} catch (error) {
			console.error("Error populating cache:", error);
		}
	}

	public static getInstance(): DocCache {
		if (!DocCache.instance) {
			DocCache.instance = new DocCache();
		}
		return DocCache.instance;
	}

	public static getCache(): Map<string, SectionCache> {
		return DocCache.getInstance().cache;
	}

	public get(file: string): SectionCache | undefined {
		return this.cache.get(file);
	}

	public waitingForCache(timeout: 20000): Promise<void> {
		const timer = hrtime();

		return new Promise((resolve, reject) => {
			const interval = setInterval(() => {
				if (this.cacheReady) {
					const elapsed = hrtime(timer);
					console.log(`Cache ready in ${elapsed[0]}s ${elapsed[1] / 1e6}ms`);
					clearInterval(interval);
					resolve();
				}
			}, 100);

			setTimeout(() => {
				clearInterval(interval);
				reject(new Error("Cache not ready within timeout"));
			}, timeout);
		});
	}
}

export const docCache = DocCache.getInstance();
