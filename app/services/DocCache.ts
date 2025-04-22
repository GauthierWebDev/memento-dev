import type { Node } from "@markdoc/markdoc";

import { slugifyWithCounter } from "@sindresorhus/slugify";
import Markdoc from "@markdoc/markdoc";
import { hrtime } from "node:process";
import fs from "node:fs/promises";
import path from "node:path";
import yaml from "js-yaml";

const __dirname = path.resolve();

export type SectionCache = {
	content: string;
	frontmatter?: SectionFrontmatter;
	markdocNode: Node;
	sections: DocSection[];
	lastEdit: Date;
	filePath: string;
};

export type DocSection = {
	content: string;
	hash?: string;
	subsections: string[];
	children: DocSection[];
	level?: number;
};

type SectionFrontmatter = {
	title: string;
	description: string;
	tags: string[];
};

type OrderConfig = {
	limit: number;
	includedBasePaths: string[];
	excludedBasePaths: string[];
	includedFileNames: string[];
	excludedFileNames: string[];
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

			if (node.type === "heading" && node.attributes?.level <= 3) {
				const hash = (node.attributes?.id as string) ?? this.slugify(content);
				const subsections: string[] = [];

				if (node.attributes?.level === 2) {
					sections.push({
						content,
						hash,
						subsections,
						children: [],
						level: node.attributes?.level,
					});
				} else if (node.attributes?.level === 3) {
					const lastSection = sections.at(-1);

					if (lastSection) {
						lastSection.subsections.push(hash);
						lastSection.children.push({
							content,
							hash,
							subsections,
							children: [],
							level: node.attributes?.level,
						});
					}
				}
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

	private getTableOfContents(markdocNode: Node) {
		const sections: DocSection[] = [];
		this.extractSections(markdocNode, sections);

		return sections;
	}

	private async cacheFile(file: string): Promise<void> {
		const [content, frontmatter, markdocNode] = await this.getFileContent(file);
		const filePath = file
			.replace(/\+Page\.md(x)?$/, "")
			.replace(/\/+/, "/")
			.replace(/\/$/, "");
		const lastEdit = new Date(
			(await fs.stat(path.join(DocCache.pagesDir, file))).mtime,
		);

		this.cache.set(filePath, {
			content,
			frontmatter,
			markdocNode,
			sections: this.getTableOfContents(markdocNode),
			lastEdit,
			filePath,
		});
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

	public getCache(): Map<string, SectionCache> {
		return this.cache;
	}

	public get(file: string): SectionCache | undefined {
		return this.cache.get(file);
	}

	public orderByLastEdit(customConfig?: Partial<OrderConfig>): SectionCache[] {
		const config: OrderConfig = {
			excludedBasePaths: [],
			includedBasePaths: [],
			excludedFileNames: [],
			includedFileNames: [],
			limit: 0,
			...customConfig,
		};

		const checkIfIncludedBasePath = (doc: SectionCache) => {
			if (config.includedBasePaths.length > 0) {
				return config.includedBasePaths.some((basePath) => {
					return doc.filePath.startsWith(basePath);
				});
			}

			return true;
		};

		const checkIfExcludedBasePaths = (doc: SectionCache) => {
			if (config.excludedBasePaths.length > 0) {
				return !config.excludedBasePaths.some((basePath) => {
					return doc.filePath.startsWith(basePath);
				});
			}

			return true;
		};

		const checkIfIncludedFileNames = (doc: SectionCache) => {
			if (config.includedFileNames.length > 0) {
				return config.includedFileNames.some((fileName) => {
					return doc.filePath.includes(fileName);
				});
			}

			return true;
		};

		const checkIfExcludedFileNames = (doc: SectionCache) => {
			if (config.excludedFileNames.length > 0) {
				return !config.excludedFileNames.some((fileName) => {
					return doc.filePath === fileName;
				});
			}

			return true;
		};

		const sortedDocs = Array.from(this.cache.values())
			.sort((a, b) => b.lastEdit.getTime() - a.lastEdit.getTime())
			.filter((doc) => {
				const isIncluded = [
					checkIfIncludedBasePath(doc),
					checkIfExcludedBasePaths(doc),
					checkIfIncludedFileNames(doc),
					checkIfExcludedFileNames(doc),
				].every((check) => check === true);

				// DEBUG
				// if (!isIncluded) {
				// 	console.group(doc.filePath);
				// 	console.log("includedBasePaths", checkIfIncludedBasePath(doc));
				// 	console.log("excludedBasePaths", checkIfExcludedBasePaths(doc));
				// 	console.log("includedFileNames", checkIfIncludedFileNames(doc));
				// 	console.log("excludedFileNames", checkIfExcludedFileNames(doc));
				// 	console.groupEnd();
				// }

				return isIncluded;
			});

		if (config.limit > 0) return sortedDocs.slice(0, config.limit);

		return sortedDocs;
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
