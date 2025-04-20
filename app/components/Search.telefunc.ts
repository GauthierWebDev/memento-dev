import { buildFlexSearch } from "@/services/FlexSearchService";
import { docCache } from "@/services/DocCache";

export const onSearch = async (query: string) => {
	const docs = docCache.fetchDocs();
	const search = buildFlexSearch(docs);

	return search(query, 5);
};
