import type { DocSection } from "./DocCache";

export type FlexSearchData = { key: string; sections: DocSection[] }[];

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
		for (const section of sections) {
			const { content, hash, subsections } = section;

			const url = key.replace("index", "").replace(/(\+Page)?.md(x)?$/, "");

			sectionIndex.add({
				url: url + (hash ? `#${hash}` : ""),
				title: content,
				content: [content, ...subsections].join("\n"),
				// @ts-ignore
				pageTitle: hash ? sections[0]?.content : undefined,
			});
		}
	}

	return function search(
		query: string,
		limit?: number,
	): Promise<SearchResult[]> {
		const result = sectionIndex.search(query, 5, {
			enrich: true,
			limit,
		});

		// @ts-ignore
		if (result.length === 0) return [];

		// @ts-ignore
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
