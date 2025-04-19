import type { JSXElement } from "solid-js";

import { TableOfContents } from "@/partials/TableOfContents";
import { PrevNextLinks } from "@/components/PrevNextLinks";
import { usePageContext } from "vike-solid/usePageContext";
import { collectSections } from "@/libs/sections";
import { navigation } from "@/libs/navigation";
import { Prose } from "@/components/Prose";

export function DocsLayout({
	children,
	frontmatter: { title },
	estimatedReadingTime,
	nodes,
}: {
	children: JSXElement;
	frontmatter: { title?: string };
	estimatedReadingTime?: string;
	nodes: Array<Node>;
}) {
	const tableOfContents = collectSections(nodes);

	return (
		<>
			<div class="max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16 grow">
				<article>
					<DocsHeader
						title={title}
						estimatedReadingTime={estimatedReadingTime}
					/>
					<Prose>{children}</Prose>
				</article>
				<PrevNextLinks />
			</div>

			<TableOfContents tableOfContents={tableOfContents} />
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
				<h1 class="font-display text-3xl tracking-tight text-slate-900 dark:text-white">
					{props.title}
				</h1>
			)}
			{/* {props.estimatedReadingTime && (
        <p class="text-sm text-slate-500 dark:text-slate-400 inline-flex items-center gap-1">
          <ClockIcon class="w-4" /> {props.estimatedReadingTime}
        </p>
      )} */}
		</header>
	);
}
