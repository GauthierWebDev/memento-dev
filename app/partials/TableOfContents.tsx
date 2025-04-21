import type { DocSection } from "@/services/DocCache";
import type { Data } from "@/pages/+data";

import { createSignal, createEffect, For } from "solid-js";
import { useData } from "vike-solid/useData";
import { Link } from "@/components/Link";
import clsx from "clsx";

export function TableOfContents() {
	const data = useData<Data>();
	if (!data.sections) return null;

	const [currentSection, setCurrentSection] = createSignal(
		data.sections[0]?.hash,
	);

	const getHeadings = () => {
		return data.sections
			.flatMap((section) => [section, ...section.children])
			.map((section) => {
				if (!section.hash) return null;

				const el = document.getElementById(section.hash);
				console.log(section.hash, el);
				if (!el) return null;

				const style = window.getComputedStyle(el);
				const scrollMt = Number.parseFloat(style.scrollMarginTop);

				const top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
				return { id: section.hash, top, level: section.level };
			})
			.filter(
				(x): x is { id: string; top: number; level: number } => x !== null,
			);
	};

	createEffect(() => {
		if (data.sections.length === 0) return;
		const headings = getHeadings();

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
	}, [getHeadings, data.sections]);

	function isActive(section: DocSection) {
		if (section.hash === currentSection()) return true;
		if (!section.children) return false;

		return (
			section.children.findIndex((child) => {
				console.log(child.hash, currentSection());
				return child.hash === currentSection();
			}) !== -1
		);
	}

	return (
		<div class="hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6">
			<nav aria-labelledby="on-this-page-title" class="w-56">
				<h2
					id="on-this-page-title"
					class="font-display text-sm font-medium text-slate-900"
				>
					Table des matières
				</h2>

				<ol class="mt-4 space-y-3 text-sm">
					<For each={data.sections}>
						{(section) => (
							<li>
								<h3>
									<Link
										href={`#${section.hash}`}
										class={clsx(
											isActive(section)
												? "text-violet-500"
												: "font-normal text-slate-500 hover:text-slate-700",
										)}
									>
										{section.content}
									</Link>
								</h3>
								{section.children.length > 0 && (
									<ol class="mt-2 space-y-2 pl-4">
										<For each={section.children}>
											{(subsection) => (
												<li>
													<Link
														href={`#${subsection.hash}`}
														class={clsx(
															isActive(subsection)
																? "text-violet-500"
																: "font-normal text-slate-500 hover:text-slate-700",
														)}
													>
														{subsection.content}
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
			</nav>
		</div>
	);
}
