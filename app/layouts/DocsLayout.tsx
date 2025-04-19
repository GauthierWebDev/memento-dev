import type { JSXElement } from "solid-js";

import { TableOfContents } from "@/partials/TableOfContents";
import { PrevNextLinks } from "@/components/PrevNextLinks";
import { usePageContext } from "vike-solid/usePageContext";
import { collectSections } from "@/libs/sections";
import { navigation } from "@/libs/navigation";
import { Prose } from "@/components/Prose";

type DocsLayoutProps = {
	children: JSXElement;
	title?: string;
	// frontmatter: { title?: string };
	estimatedReadingTime?: string;
	// nodes: Array<Node>;
};

export function DocsLayout(props: DocsLayoutProps) {
	// const tableOfContents = collectSections(nodes);

	return (
		<>
			<div class="max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16 grow">
				<article>
					<DocsHeader
						title={props.title}
						estimatedReadingTime={props.estimatedReadingTime}
					/>
					<Prose>{props.children}</Prose>
				</article>
				<PrevNextLinks />
			</div>

			{/* <TableOfContents tableOfContents={tableOfContents} /> */}
		</>
	);
}

type DocsHeaderProps = {
	title?: string;
	estimatedReadingTime?: string;
};

export function DocsHeader(props: DocsHeaderProps) {
	const { urlPathname } = usePageContext();

	const section = navigation.find((section) =>
		section.links.find((link) => link.href === urlPathname),
	);

	if (!props.title && !section) {
		return null;
	}

	return (
		<header class="mb-9 space-y-1">
			{section && (
				<p class="font-display text-sm font-medium text-violet-500">
					{section.title}
				</p>
			)}
			{props.title && (
				<h1 class="font-display text-3xl tracking-tight text-slate-900">
					{props.title}
				</h1>
			)}
			{/* {props.estimatedReadingTime && (
        <p class="text-sm text-slate-500 inline-flex items-center gap-1">
          <ClockIcon class="w-4" /> {props.estimatedReadingTime}
        </p>
      )} */}
		</header>
	);
}
