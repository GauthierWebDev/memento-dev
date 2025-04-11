// import type { SearchResult } from "@/lib/search";
import type { SearchResult } from "@/services/FlexSearchService";

// import { buildSearchIndex, search } from "@/lib/search";
import { buildFlexSearch } from "@/services/FlexSearchService";
import { docsService } from "@/services/DocsService";

export const onSearch = async (query: string): Promise<SearchResult[]> => {
  // const searchIndex = buildSearchIndex("./data/docs");
  // return search(searchIndex, query);

  const search = buildFlexSearch(await docsService.fetchDocs());
  const results = search(query);

  return results;
};
