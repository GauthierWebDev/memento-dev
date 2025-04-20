import type { PageContext } from "vike/types";

import { useConfig } from "vike-solid/useConfig";
import buildTitle from "./buildTitle";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(pageContext: PageContext) {
	const config = useConfig();

	const {
		exports: { tableOfContents, frontmatter },
		urlParsed,
	} = pageContext;
	const isRoot = urlParsed.pathname === "/";

	config({
		title: buildTitle(isRoot ? undefined : frontmatter?.title),
		description: frontmatter?.description,
	});

	return {
		tableOfContents,
	};
}
