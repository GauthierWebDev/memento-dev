import type { SectionCache } from "@/services/DocCache";
import type { PageContext } from "vike/types";

import { useConfig } from "vike-solid/useConfig";
import { docCache } from "@/services/DocCache";
import buildTitle from "./buildTitle";

export type Data = Awaited<ReturnType<typeof data>>;

export async function data(pageContext: PageContext) {
	const config = useConfig();

	const {
		exports: { frontmatter },
		urlParsed,
	} = pageContext;
	const isRoot = urlParsed.pathname === "/";

	config({
		title: buildTitle(isRoot ? undefined : frontmatter?.title),
		description: frontmatter?.description,
	});

	let cachePathname = urlParsed.pathname.replace(/\/$/, "").replace(/^\//, "");
	if (cachePathname === "") {
		cachePathname = "index";
	}

	const doc = docCache.get(cachePathname);

	return {
		sections: doc?.sections || [],
		frontmatter,
	};
}
