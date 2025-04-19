import { buildFlexSearch, type SearchResult } from "@/services/FlexSearchService";
import { docsService } from "@/services/DocsService";

export const onSearch = async (query: string, maxResults?: number): Promise<SearchResult[]> => {
  const search = buildFlexSearch(await docsService.fetchDocs());
  const results = search(query);

  if (maxResults) {
    return results.slice(0, maxResults);
  }

  return results;
};
