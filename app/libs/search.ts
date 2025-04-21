import { buildFlexSearch } from "@/services/FlexSearchService";
import { docCache } from "@/services/DocCache";

export function search(query: string) {
	const docs = docCache.fetchDocs();
	const search = buildFlexSearch(docs);

	return search(query, 5);
}
