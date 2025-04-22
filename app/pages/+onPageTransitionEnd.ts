import type { OnPageTransitionEndAsync, PageContext } from "vike/types";

import { buildPublicUrl } from "@/buildPublicUrl";
import NProgress from "nprogress";

export const onPageTransitionEnd: OnPageTransitionEndAsync = async (
	pageContext,
) => {
	NProgress.done();
	NProgress.remove();

	updateCanonicalsTag(pageContext);
};

const updateCanonicalsTag = (pageContext: PageContext) => {
	const canonicalNativeTag = findOrCreateTag<HTMLLinkElement>("link", {
		rel: "canonical",
	});
	const canonicalOGTag = findOrCreateTag<HTMLMetaElement>("meta", {
		property: "og:url",
	});
	const typeOGTag = findOrCreateTag<HTMLMetaElement>("meta", {
		property: "og:type",
	});
	const localOGTag = findOrCreateTag<HTMLMetaElement>("meta", {
		property: "og:locale",
	});
	const siteNameOGTag = findOrCreateTag<HTMLMetaElement>("meta", {
		property: "og:site_name",
	});

	const canonicalUrl = buildPublicUrl(
		pageContext,
		pageContext.urlParsed.pathname,
	);

	canonicalNativeTag.setAttribute("href", canonicalUrl);
	canonicalOGTag.setAttribute("content", canonicalUrl);
	typeOGTag.setAttribute("content", "website");
	localOGTag.setAttribute("content", "fr-FR");
	siteNameOGTag.setAttribute("content", document.title);
};

const findOrCreateTag = <T>(
	tagName: string,
	attributes: Record<string, string>,
): T => {
	const head = document.head;
	const attributesString = Object.entries(attributes)
		.map(([key, value]) => `${key}="${value}"`)
		.join(",");
	let tag: HTMLElement | null = head.querySelector(
		`${tagName}[${attributesString}]`,
	);
	if (tag) return tag as T;

	tag = document.createElement(tagName);
	for (const [key, value] of Object.entries(attributes)) {
		tag.setAttribute(key, value);
	}

	document.head.appendChild(tag);

	return tag as T;
};
