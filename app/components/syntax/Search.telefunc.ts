import { buildFlexSearch, type SearchResult } from "@/services/FlexSearchService";
import { docsService } from "@/services/DocsService";

export const onSearch = async (query: string): Promise<SearchResult[]> => {
  const search = buildFlexSearch(await docsService.fetchDocs());
  const results = search(query);

  return results;
};
