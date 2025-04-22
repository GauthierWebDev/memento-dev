import type { JSXElement } from "solid-js";
import type { IconProps } from "./Icon";

import { Icon } from "./Icon";
import { Link } from "./Link";
import clsx from "clsx";

type QuickLinksProps = {
	children: JSXElement;
	class?: string;
};

export default function QuickLinks(props: QuickLinksProps) {
	return (
		<div
			class={clsx(
				"not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2",
				props.class,
			)}
		>
			{props.children}
		</div>
	);
}

type QuickLinkProps = {
	title: string;
	description: string;
	href: string;
	lastEdited?: Date;
	icon: IconProps["icon"];
};

QuickLinks.QuickLink = (props: QuickLinkProps) => (
	<div class="group relative rounded-xl border border-slate-200">
		<div class="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,var(--color-violet-50)),var(--quick-links-hover-bg,var(--color-violet-50)))_padding-box,linear-gradient(to_top,var(--color-indigo-400),var(--color-cyan-400),var(--color-violet-500))_border-box] group-hover:opacity-100" />
		<div class="relative overflow-hidden rounded-xl p-6">
			<Icon icon={props.icon} color="blue" class="h-8 w-8" />

			<h2 class="mt-4 font-display text-base text-slate-900 leading-5">
				<Link href={props.href}>
					<span class="absolute -inset-px rounded-xl" />
					{props.title}
				</Link>
			</h2>

			{props.lastEdited && (
				<p class="mt-2 mb-4 italic text-xs text-slate-500">
					<span class="font-semibold">Dernière modification :</span>{" "}
					<time datetime={props.lastEdited.toISOString()}>
						{props.lastEdited.toLocaleDateString("fr-FR", {
							year: "numeric",
							month: "2-digit",
							day: "2-digit",
						})}
					</time>
				</p>
			)}

			<p class="mt-1 text-sm text-slate-700">{props.description}</p>
		</div>
	</div>
);
