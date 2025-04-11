import { slugifyWithCounter } from "@sindresorhus/slugify";
import Markdoc from "@markdoc/markdoc";
import FlexSearch from "flexsearch";
import glob from "fast-glob";
import * as path from "path";
import * as fs from "fs";

const slugify = slugifyWithCounter();

interface Node {
  type: string;
  attributes?: {
    content?: string;
    level?: number;
    id?: string;
  };
  children?: Node[];
}

interface Section {
  content: string;
  hash?: string;
  subsections: string[];
}

export interface SearchResult {
  url: string;
  title: string;
  pageTitle?: string;
  content?: string;
}

function toString(node: Node): string {
  let str = node.type === "text" && typeof node.attributes?.content === "string" ? node.attributes.content : "";
  if ("children" in node) {
    for (let child of node.children) {
      str += toString(child);
    }
  }
  return str;
}

function extractSections(node: Node, sections: Section[], isRoot: boolean = true): void {
  if (isRoot) {
    slugify.reset();
  }
  if (node.type === "heading" || node.type === "paragraph") {
    let content = toString(node).trim();
    if (node.type === "heading" && node.attributes?.level <= 2) {
      let hash = node.attributes?.id ?? slugify(content);
      sections.push({ content, hash, subsections: [] });
    } else {
      sections[sections.length - 1].subsections.push(content);
    }
  } else if ("children" in node) {
    for (let child of node.children) {
      extractSections(child, sections, false);
    }
  }
}

export function buildSearchIndex(pagesDir: string): FlexSearch.Document<SearchResult> {
  const cache = new Map<string, [string, Section[]]>();
  const sectionIndex = new FlexSearch.Document<SearchResult>({
    tokenize: "full",
    document: {
      id: "url",
      index: ["title", "content"],
    },
    context: {
      resolution: 9,
      depth: 2,
      bidirectional: true,
    },
  });

  const files = glob.sync("**/page.md", { cwd: pagesDir });
  const data = files.map((file) => {
    const url = file === "page.md" ? "/" : `/${file.replace(/\/page\.md$/, "")}`;
    const md = fs.readFileSync(path.join(pagesDir, file), "utf8");

    let sections: Section[];

    if (cache.get(file)?.[0] === md) {
      sections = cache.get(file)![1];
    } else {
      const ast = Markdoc.parse(md);
      const title = ast.attributes?.frontmatter?.match(/^title:\s*(.*?)\s*$/m)?.[1];
      sections = [{ content: title ?? "", subsections: [] }];
      extractSections(ast, sections);
      cache.set(file, [md, sections]);
    }

    return { url, sections };
  });

  for (const { url, sections } of data) {
    for (const { content, hash, subsections } of sections) {
      sectionIndex.add({
        url: url + (hash ? `#${hash}` : ""),
        title: content,
        content: [content, ...subsections].join("\n"),
        pageTitle: hash ? sections[0].content : undefined,
      });
    }
  }

  return sectionIndex;
}

export function search(
  sectionIndex: FlexSearch.Document<SearchResult>,
  query: string,
  options: Record<string, any> = {},
): SearchResult[] {
  const result = sectionIndex.search(query, {
    ...options,
    enrich: true,
  });
  if (result.length === 0) {
    return [];
  }
  return result[0].result.map((item: any) => ({
    url: item.id,
    title: item.doc.title,
    pageTitle: item.doc.pageTitle,
  }));
}
