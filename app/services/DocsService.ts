import type { Node } from "@markdoc/markdoc";

import { slugifyWithCounter } from "@sindresorhus/slugify";
import { buildFlexSearch } from "./FlexSearchService";
import Markdoc from "@markdoc/markdoc";
import nodes from "@/markdoc/nodes";
import tags from "@/markdoc/tags";
import glob from "fast-glob";
import path from "path";
import fs from "fs";

export type FlexSearchData = { key: string; sections: DocSection[] }[];

type DocsCache = Map<string, DocData>;
type DocSection = [string, string | null, string[]];
type DocData = { title: string; description: string; content: string; sections: DocSection[] };
type DocExtension = "mdx" | "md";

class DocsService {
  private static readonly DOCS_PATH = path.resolve("../../app/data");
  private static readonly DOCS_EXTS: DocExtension[] = ["mdx", "md"]; // Order matters
  private static instance: DocsService;

  public search: ReturnType<typeof buildFlexSearch> = buildFlexSearch([]);
  private slugify = slugifyWithCounter();
  private cache: DocsCache = new Map();

  public static getInstance(): DocsService {
    if (!DocsService.instance) {
      DocsService.instance = new DocsService();
    }

    return DocsService.instance;
  }

  private getFromCache(key: string): DocData | undefined {
    return this.cache.get(key);
  }

  private setToCache(key: string, value: DocData): void {
    this.cache.set(key, value);
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
    if (isRoot) {
      this.slugify.reset();
    }

    if (["heading", "paragraph"].includes(node.type)) {
      const content = this.nodeToString(node).trim();

      if (node.type === "heading" && node.attributes.level <= 2) {
        const hash = node.attributes?.id ?? this.slugify(content);
        sections.push([content, hash, []]);
      } else {
        sections.at(-1)?.[2].push(content);
      }
    } else if (node.children) {
      for (const child of node.children) {
        this.extractSections(child, sections, false);
      }
    }
  }

  public async fetchDocs() {
    const docs = glob.sync(DocsService.DOCS_PATH + `/**/*.{${DocsService.DOCS_EXTS.join(",")}}`);
    const data = docs.map((doc) => {
      const content = fs.readFileSync(doc, "utf-8");
      const extension = path.extname(doc).slice(1) as DocExtension;
      const key = doc
        .replace(DocsService.DOCS_PATH, "")
        .replace(`page.${extension}`, "")
        .replace(`.${extension}`, "")
        .replace(/\/$/g, "");

      const ast = Markdoc.parse(content);
      const title = ast.attributes?.frontmatter?.match(/^title:\s*(.*?)\s*$/m)?.[1];
      const description = ast.attributes?.frontmatter?.match(/^description:\s*(.*?)\s*$/m)?.[1];
      const sections: DocSection[] = [[title, null, []]];

      this.extractSections(ast, sections);
      this.setToCache(key, { title, description, content, sections });

      return { key, sections };
    });

    return data;
  }

  public async buildSearch() {
    const data = await this.fetchDocs();
    this.search = buildFlexSearch(data);
  }

  public transform(doc: DocData) {
    const ast = Markdoc.parse(doc.content);
    const transformed = Markdoc.transform(ast, { nodes, tags, variables: {} });

    return {
      ...doc,
      tags: transformed,
    };
  }

  public async getDoc(namespace: "docs" | "certifications", key: string) {
    try {
      await this.fetchDocs();
      const doc = this.getFromCache(`/${namespace}/${key}`);

      if (!doc) {
        throw new Error("Doc not found");
      }

      return doc;
    } catch (error) {
      return null;
    }
  }
}

export const docsService = DocsService.getInstance();
