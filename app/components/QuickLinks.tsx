import type { JSXElement } from "solid-js";
import type { IconProps } from "./Icon";

import { Icon } from "./Icon";
import { Link } from "./Link";

type QuickLinksProps = {
	children: JSXElement;
};

export function QuickLinks(props: QuickLinksProps) {
	return (
		<div class="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
			{props.children}
		</div>
	);
}

type QuickLinkProps = {
	title: string;
	description: string;
	href: string;
	icon: IconProps["icon"];
};

export function QuickLink(props: QuickLinkProps) {
	return (
		<div class="group relative rounded-xl border border-slate-200 dark:border-slate-800">
			<div class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,var(--color-violet-50)),var(--quick-links-hover-bg,var(--color-violet-50)))_padding-box,linear-gradient(to_top,var(--color-indigo-400),var(--color-cyan-400),var(--color-violet-500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:var(--color-slate-800)]" />
			<div class="relative overflow-hidden rounded-xl p-6">
				<Icon icon={props.icon} class="h-8 w-8" />

				<h2 class="mt-4 font-display text-base text-slate-900 dark:text-white">
					<Link href={props.href}>
						<span class="absolute -inset-px rounded-xl" />
						{props.title}
					</Link>
				</h2>

				<p class="mt-1 text-sm text-slate-700 dark:text-slate-400">
					{props.description}
				</p>
			</div>
		</div>
	);
}
