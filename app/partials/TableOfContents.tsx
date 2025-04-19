import type { Section, Subsection } from "@/libs/sections";

import { createSignal, createEffect, For } from "solid-js";
import { Link } from "@/components/Link";
import clsx from "clsx";

type TableOfContentsProps = {
	tableOfContents: Array<Section>;
};

export function TableOfContents(props: TableOfContentsProps) {
	const [currentSection, setCurrentSection] = createSignal(
		props.tableOfContents[0]?.id,
	);

	const getHeadings = (tableOfContents: Array<Section>) => {
		return tableOfContents
			.flatMap((node) => [node.id, ...node.children.map((child) => child.id)])
			.map((id) => {
				const el = document.getElementById(id);
				if (!el) return null;

				const style = window.getComputedStyle(el);
				const scrollMt = Number.parseFloat(style.scrollMarginTop);

				const top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
				return { id, top };
			})
			.filter((x): x is { id: string; top: number } => x !== null);
	};

	createEffect(() => {
		if (props.tableOfContents.length === 0) return;
		const headings = getHeadings(props.tableOfContents);

		function onScroll() {
			const top = window.scrollY;

			let current = headings[0]?.id;

			for (const heading of headings) {
				if (top < heading.top - 10) break;
				current = heading.id;
			}
			setCurrentSection(current);
		}
		window.addEventListener("scroll", onScroll, { passive: true });
		onScroll();
		return () => {
			window.removeEventListener("scroll", onScroll);
		};
	}, [getHeadings, props.tableOfContents]);

	function isActive(section: Section | Subsection) {
		if (section.id === currentSection()) return true;
		if (!section.children) return false;

		return section.children.findIndex(isActive) > -1;
	}

	return (
		<div class="hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
			<nav aria-labelledby="on-this-page-title" class="w-56">
				{props.tableOfContents.length > 0 && (
					<>
						<h2
							id="on-this-page-title"
							class="font-display text-sm font-medium text-slate-900"
						>
							Table des matières
						</h2>

						<ol class="mt-4 space-y-3 text-sm">
							<For each={props.tableOfContents}>
								{(section) => (
									<li>
										<h3>
											<Link
												href={`#${section.id}`}
												class={clsx(
													isActive(section)
														? "text-violet-500"
														: "font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300",
												)}
											>
												{section.title}
											</Link>
										</h3>
										{section.children.length > 0 && (
											<ol class="mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400">
												<For each={section.children}>
													{(subSection) => (
														<li>
															<Link
																href={`#${subSection.id}`}
																class={
																	isActive(subSection)
																		? "text-violet-500"
																		: "hover:text-slate-600 dark:hover:text-slate-300"
																}
															>
																{subSection.title}
															</Link>
														</li>
													)}
												</For>
											</ol>
										)}
									</li>
								)}
							</For>
						</ol>
					</>
				)}
			</nav>
		</div>
	);
}
