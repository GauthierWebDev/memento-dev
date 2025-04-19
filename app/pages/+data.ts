import type { PageContext } from "vike/types";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(pageContext: PageContext) {
	return {
		tableOfContents: pageContext.exports.tableOfContents,
	};
}
