import type { JSX } from "solid-js";

import { Icon } from "./Icon";
import clsx from "clsx";

const styles = {
	note: {
		container: "bg-violet-50",
		title: "text-violet-900",
		body: "text-slate-800 [--tw-prose-background:var(--color-slate-50)] prose-a:text-slate-900 prose-code:text-slate-900",
	},
	warning: {
		container: "bg-amber-50",
		title: "text-amber-900",
		body: "text-slate-800 [--tw-prose-underline:var(--color-slate-400)] [--tw-prose-background:var(--color-slate-50)] prose-a:text-slate-900 prose-code:text-slate-900",
	},
	question: {
		container: "bg-amber-50",
		title: "text-amber-900",
		body: "text-slate-800 [--tw-prose-underline:var(--color-slate-400)] [--tw-prose-background:var(--color-slate-50)] prose-a:text-slate-900 prose-code:text-slate-900",
	},
};

const icons = {
	note: (props: { class?: string }) => <Icon icon="lightbulb" {...props} />,
	warning: (props: { class?: string }) => (
		<Icon icon="warning" color="amber" {...props} />
	),
	question: (props: { class?: string }) => (
		<Icon icon="question" color="blue" {...props} />
	),
};

export default function Callout(props: {
	title: string;
	children: JSX.Element;
	type?: keyof typeof styles;
	collapsible?: boolean;
}) {
	const IconComponent = icons[props.type || "note"];

	return (
		<div
			class={clsx(
				"my-8 flex flex-col w-full rounded-3xl p-6",
				styles[props.type || "note"].container,
				{ "cursor-pointer": props.collapsible },
			)}
		>
			<div class="flex items-center gap-6">
				<IconComponent class="h-8 w-8 flex-none" />
				<p
					class={clsx(
						"!m-0 font-display text-xl text-balance",
						styles[props.type || "note"].title,
					)}
				>
					{props.title}
				</p>
			</div>
			<div class="mt-4 flex-auto">
				<div class={clsx("prose mt-2.5", styles[props.type || "note"].body)}>
					{props.children}
				</div>
			</div>
		</div>
	);
}
