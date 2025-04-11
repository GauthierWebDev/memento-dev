import type { FlexSearchData } from "./DocsService";

import FlexSearch from "flexsearch";

interface NativeSearchResult {
  id: string;
  doc: {
    title: string;
    pageTitle?: string;
  };
}

export type SearchResult = {
  url: string;
  title: string;
  pageTitle?: string;
};

export function buildFlexSearch(data: FlexSearchData) {
  const sectionIndex = new FlexSearch.Document({
    tokenize: "full",
    document: {
      id: "url",
      index: "content",
      store: ["title", "pageTitle"],
    },
    context: {
      resolution: 9,
      depth: 2,
      bidirectional: true,
    },
  });

  for (const { key, sections } of data) {
    for (const [title, hash, content] of sections) {
      sectionIndex.add({
        url: key + (hash ? `#${hash}` : ""),
        title,
        content: [title, ...content].join("\n"),
        pageTitle: hash ? sections[0][0] : undefined,
      });
    }
  }

  return function search(query: string): SearchResult[] {
    const result = sectionIndex.search<true>(query, 5, {
      enrich: true,
    });

    if (result.length === 0) return [];

    return result[0].result.map((rawItem) => {
      const item = rawItem as unknown as NativeSearchResult;

      return {
        url: item.id,
        title: item.doc.title,
        pageTitle: item.doc.pageTitle,
      };
    });
  };
}
