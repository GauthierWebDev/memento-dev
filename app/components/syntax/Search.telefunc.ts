import type { SearchResult } from "@/lib/search";

import { buildSearchIndex, search } from "@/lib/search";

export const onSearch = async (query: string): Promise<SearchResult[]> => {
  const searchIndex = buildSearchIndex("./app/docs");
  return search(searchIndex, query);
};
