import type { JSXElement } from "solid-js";

// import { TableOfContents } from "@/partials/TableOfContents";
import { PrevNextLinks } from "@/components/PrevNextLinks";
import { usePageContext } from "vike-solid/usePageContext";
import { clientOnly } from "vike-solid/clientOnly";
import { clock } from "solid-heroicons/outline";
import { navigation } from "@/libs/navigation";
import { Prose } from "@/components/Prose";
import { Icon } from "solid-heroicons";

type DocsLayoutProps = {
	children: JSXElement;
};

const TableOfContents = clientOnly(
	async () => (await import("@/partials/TableOfContents")).TableOfContents,
);

export function DocsLayout(props: DocsLayoutProps) {
	const pageContext = usePageContext();

	return (
		<>
			<div class="max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16 grow">
				<article>
					<DocsHeader
						title={pageContext.exports.frontmatter?.title}
						estimatedReadingTime={pageContext.exports.readingTime?.text}
					/>
					<Prose>{props.children}</Prose>
				</article>
				<PrevNextLinks />
			</div>

			<TableOfContents />
		</>
	);
}

type DocsHeaderProps = {
	title?: string;
	estimatedReadingTime?: string;
};

export function DocsHeader(props: DocsHeaderProps) {
	const pageContext = usePageContext();

	const getSection = () => {
		return navigation.find((section) =>
			section.links.find((link) => link.href === pageContext.urlPathname),
		);
	};

	if (!props.title && !getSection()) {
		return null;
	}

	return (
		<header class="mb-9 space-y-1">
			{getSection() && (
				<p class="font-display text-sm font-medium text-violet-500">
					{getSection()?.title}
				</p>
			)}
			{props.title && (
				<h1 class="font-display text-3xl tracking-tight text-slate-900">
					{props.title}
				</h1>
			)}
			{props.estimatedReadingTime && (
				<p class="text-sm text-slate-500 inline-flex items-center gap-1">
					<Icon path={clock} class="w-4" /> {props.estimatedReadingTime}
				</p>
			)}
		</header>
	);
}
