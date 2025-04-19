import type { JSX } from "solid-js";

import { Dynamic } from "solid-js/web";
import clsx from "clsx";

type ProseProps = JSX.IntrinsicElements["div"] & {
	class?: string;
	as?: keyof JSX.IntrinsicElements;
};

export function Prose(props: ProseProps) {
	const Component = props.as ?? "div";

	return (
		<Dynamic
			component={Component}
			class={clsx(
				props.class,
				"prose max-w-none prose-slate",
				// headings
				"prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]",
				// lead
				"prose-lead:text-slate-500",
				// links
				"prose-a:font-semibold",
				// link underline
				"prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,var(--color-violet-300))] prose-a:hover:[--tw-prose-underline-size:6px]",
				// pre
				"prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg",
			)}
			{...props}
		/>
	);
}
