import type { PageContext } from "vike/types";

export function buildPublicUrl(pageContext: PageContext, resource: string) {
	const { baseUrl } = pageContext;
	const url = new URL(resource, baseUrl).toString();

	return url;
}
