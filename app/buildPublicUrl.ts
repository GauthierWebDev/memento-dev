import type { PageContext } from "vike/types";

export function buildPublicUrl(pageContext: PageContext, resource: string) {
	const { baseUrl } = pageContext;
	const url = new URL(
		resource,
		process.env.NODE_ENV === "production"
			? "https://memento-dev.fr"
			: baseUrl || "http://localhost:5500",
	).toString();

	return url;
}
