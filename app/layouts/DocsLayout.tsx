import type { JSXElement } from "solid-js";

import { PrevNextLinks } from "@/components/PrevNextLinks";
import { usePageContext } from "vike-solid/usePageContext";
import { clientOnly } from "vike-solid/clientOnly";
import { clock } from "solid-heroicons/outline";
import { navigation } from "@/libs/navigation";
import { Prose } from "@/components/Prose";
import { MDXProvider } from "solid-jsx";
import { Icon } from "solid-heroicons";

type DocsLayoutProps = {
	children: JSXElement;
};

const TableOfContents = clientOnly(() =>
	import("@/partials/TableOfContents").then((m) => m.TableOfContents),
);

export function DocsLayout(props: DocsLayoutProps) {
	const {
		exports: { frontmatter, readingTime },
	} = usePageContext();

	return (
		<MDXProvider components={{}}>
			<div class="max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16 grow">
				<article>
					<DocsHeader
						title={frontmatter?.title}
						estimatedReadingTime={readingTime?.text}
					/>
					<Prose>{props.children}</Prose>
				</article>
				<PrevNextLinks />
			</div>

			<TableOfContents fallback={null} />
		</MDXProvider>
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
			{props.estimatedReadingTime && (
				<p class="text-sm text-slate-500 inline-flex items-center gap-1">
					<Icon path={clock} class="w-4" /> {props.estimatedReadingTime}
				</p>
			)}
		</header>
	);
}
