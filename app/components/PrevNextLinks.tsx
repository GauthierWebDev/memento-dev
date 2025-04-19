import type { JSX } from "solid-js";

import { usePageContext } from "vike-solid/usePageContext";
import { cleanProps } from "@/utils/cleanProps";
import { navigation } from "@/libs/navigation";
import { Link } from "@/components/Link";
import clsx from "clsx";

function ArrowIcon(props: JSX.IntrinsicElements["svg"]) {
	return (
		<svg viewBox="0 0 16 16" aria-hidden="true" {...props}>
			<path d="m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z" />
		</svg>
	);
}

type PageLinkProps = Omit<JSX.IntrinsicElements["div"], "dir" | "title"> & {
	title: string;
	href: string;
	dir?: "previous" | "next";
};

function PageLink(props: PageLinkProps) {
	const pageCategory = navigation.find((section) => {
		return section.links.some(
			(link) =>
				link.href === props.href ||
				link.subitems.some((subitem) => subitem.href === props.href),
		);
	});

	return (
		<div {...cleanProps(props, "dir", "title")}>
			<dt class="font-display text-sm font-medium text-slate-900 dark:text-white">
				{props.dir === "next" ? "Suivant" : "Précédent"}
			</dt>
			<dd class="mt-1">
				<Link
					href={props.href}
					class={clsx(
						"flex items-center gap-x-2 text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300",
						props.dir === "previous" && "flex-row-reverse",
					)}
				>
					<p class="flex flex-col gap-0">
						{pageCategory && (
							<span class="text-violet-600 dark:text-violet-400 text-sm mb-1 leading-3">
								{pageCategory.title}
							</span>
						)}
						<span class="leading-4">{props.title}</span>
					</p>
					<ArrowIcon
						class={clsx(
							"h-6 w-6 flex-none fill-current",
							props.dir === "previous" && "-scale-x-100",
						)}
					/>
				</Link>
			</dd>
		</div>
	);
}

export function PrevNextLinks() {
	const { urlPathname } = usePageContext();

	const allLinks = navigation
		.flatMap((section) => section.links)
		.flatMap((link) => {
			return link.subitems ? [link, ...link.subitems] : link;
		});

	const getNeighboringLinks = () => {
		const linkIndex = allLinks.findIndex((link) => link.href === urlPathname);
		if (linkIndex === -1) return [null, null];

		const previousPage = allLinks[linkIndex - 1] || null;
		let nextPage = allLinks[linkIndex + 1] || null;

		if (nextPage?.href === urlPathname) {
			nextPage = allLinks[linkIndex + 2] || null;
		}

		return [previousPage, nextPage];
	};

	const [previousPage, nextPage] = getNeighboringLinks();
	if (!nextPage && !previousPage) return null;

	return (
		<dl class="mt-12 flex gap-4 border-t border-slate-200 pt-6 dark:border-slate-800">
			{previousPage && <PageLink dir="previous" {...previousPage} />}
			{nextPage && <PageLink class="ml-auto text-right" {...nextPage} />}
		</dl>
	);
}
