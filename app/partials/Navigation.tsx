import { chevronDown, chevronUp } from "solid-heroicons/solid";
import { createEffect, createSignal, For } from "solid-js";
import { usePageContext } from "vike-solid/usePageContext";
import { navigation } from "@/libs/navigation";
import { Link } from "@/components/Link";
import { Icon } from "solid-heroicons";
import clsx from "clsx";

type NavigationItemProps = {
	section: (typeof navigation)[number];
	onLinkClick?: (event: MouseEvent) => void;
};

function NavigationItem(props: NavigationItemProps) {
	const pageContext = usePageContext();

	const [isOpened, setIsOpened] = createSignal(
		props.section.links.some(
			(link) =>
				link.href === pageContext.urlPathname ||
				link.subitems?.some(
					(subitem) => subitem.href === pageContext.urlPathname,
				),
		),
	);

	return (
		<>
			<h2
				class={clsx(
					"font-display font-medium cursor-pointer",
					isOpened() ? "text-violet-600" : "text-slate-900",
				)}
			>
				<button
					onClick={() => setIsOpened((prev) => !prev)}
					type="button"
					aria-label={`${isOpened() ? "Masquer" : "Afficher"} les sous-sections de ${props.section.title}`}
					class="contents cursor-pointer"
				>
					{isOpened() ? (
						<Icon
							path={chevronUp}
							class="inline-block mr-2 h-5 w-5 text-slate-400 shrink-0"
						/>
					) : (
						<Icon
							path={chevronDown}
							class="inline-block mr-2 h-5 w-5 text-slate-400 shrink-0"
						/>
					)}

					<span class="sr-only">{isOpened() ? "Masquer" : "Afficher"}</span>

					{props.section.title}

					<span class="text-slate-400"> ({props.section.links.length})</span>
				</button>
			</h2>
			{isOpened() && (
				<ul class="!mt-0 ml-2 space-y-1 border-l-2 border-slate-100 lg:mt-4 lg:space-y-2 lg:border-slate-200">
					<For each={props.section.links}>
						{(link) => (
							<li class="relative">
								<NavigationSubItem
									link={link}
									onLinkClick={props.onLinkClick}
									isOpened={
										link.href === pageContext.urlPathname ||
										link.subitems?.some(
											(subitem) => subitem.href === pageContext.urlPathname,
										)
									}
								/>
							</li>
						)}
					</For>
				</ul>
			)}
		</>
	);
}

type NavigationSubItemProps = {
	link: (typeof navigation)[number]["links"][number];
	onLinkClick?: (event: MouseEvent) => void;
	isOpened?: boolean;
};

function NavigationSubItem(props: NavigationSubItemProps) {
	const [isOpened, setIsOpened] = createSignal(props.isOpened);
	const pageContext = usePageContext();

	createEffect(() => {
		setIsOpened(
			props.link.href === pageContext.urlPathname ||
				props.link.subitems?.some(
					(subitem) => subitem.href === pageContext.urlPathname,
				),
		);
	}, [pageContext.urlPathname, props.link]);

	return (
		<>
			<span class="pl-2 flex cursor-pointer">
				{props.link.subitems.length > 0 && (
					<button
						onClick={() => setIsOpened((prev) => !prev)}
						type="button"
						aria-label={`${isOpened() ? "Masquer" : "Afficher"} les sous-sections de ${props.link.title}`}
					>
						<span class="sr-only">{isOpened() ? "Masquer" : "Afficher"}</span>

						{isOpened() ? (
							<Icon
								path={chevronUp}
								class="inline-block h-5 w-5 text-slate-400"
							/>
						) : (
							<Icon
								path={chevronDown}
								class="inline-block h-5 w-5 text-slate-400"
							/>
						)}
					</button>
				)}

				<Link
					href={props.link.href}
					onClick={props.onLinkClick ?? undefined}
					class={clsx(
						"block pl-2 w-full before:pointer-events-none before:absolute before:-left-1 before:h-1.5 before:w-1.5 before:rounded-full",
						{ "before:top-1/2 before:-translate-y-1/2": !props.link.subitems },
						{
							"before:top-3 before:-translate-y-1/2 font-semibold":
								props.link.subitems,
						},
						props.link.href !== pageContext.urlPathname && "before:hidden",
						isOpened()
							? "text-violet-500 before:bg-violet-500"
							: "text-slate-500 before:bg-slate-300 hover:text-slate-600 hover:before:block",
					)}
				>
					{props.link.title}
					{props.link.subitems.length > 0 && (
						<span class="text-slate-400"> ({props.link.subitems.length})</span>
					)}
				</Link>
			</span>
			{props.link.subitems.length > 0 && isOpened() && (
				<ul class="ml-4 border-l-2 border-slate-100 space-y-1 lg:space-y-2 lg:border-slate-200 mb-4">
					<For each={props.link.subitems}>
						{(subitem) => (
							<li class="relative">
								<Link
									href={subitem.href}
									onClick={props.onLinkClick}
									class={clsx(
										"block w-full pl-3.5 before:pointer-events-none before:absolute before:top-1/2 before:-left-1 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
										subitem.href === pageContext.urlPathname
											? "font-semibold text-violet-500 before:bg-violet-500"
											: "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block",
									)}
								>
									{subitem.title}
								</Link>
							</li>
						)}
					</For>
				</ul>
			)}
		</>
	);
}

export function Navigation(props: {
	class?: string;
	onLinkClick?: (event: MouseEvent) => void;
}) {
	const firstSections = navigation.filter(
		(section) => section.position === "start",
	);
	const lastSections = navigation.filter(
		(section) => section.position === "end",
	);

	const filteredSections = navigation
		.filter(
			(section) =>
				section.position === "auto" || section.position === undefined,
		)
		.reduce(
			(acc, section) => {
				if (!acc[section.type]) {
					acc[section.type] = [];
				}
				acc[section.type].push(section);
				return acc;
			},
			{} as Record<string, typeof navigation>,
		);

	return (
		<nav class={clsx("text-base lg:text-sm", props.class)}>
			<ul class="space-y-4">
				<li>
					<h2 class="font-display font-bold text-base text-slate-900">
						{firstSections[0]?.type}
					</h2>
					<For each={firstSections}>
						{(section) => (
							<NavigationItem
								section={section}
								onLinkClick={props.onLinkClick}
							/>
						)}
					</For>
				</li>

				<For each={Object.entries(filteredSections)}>
					{([type, sections]) => (
						<li>
							<h2 class="font-display font-bold text-base text-slate-900">
								{type}
							</h2>

							<For each={sections}>
								{(section) => (
									<NavigationItem
										section={section}
										onLinkClick={props.onLinkClick}
									/>
								)}
							</For>
						</li>
					)}
				</For>

				<li>
					<h2 class="font-display font-bold text-base text-slate-900">
						{lastSections[0]?.type}
					</h2>
					<For each={lastSections}>
						{(section) => (
							<NavigationItem
								section={section}
								onLinkClick={props.onLinkClick}
							/>
						)}
					</For>
				</li>
			</ul>
		</nav>
	);
}
