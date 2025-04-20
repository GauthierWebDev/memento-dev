import type { JSXElement } from "solid-js";

type QuickLinksProps = {
	children: JSXElement;
};

export default function QuickLinks(props: QuickLinksProps) {
	return (
		<div class="not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
			{props.children}
		</div>
	);
}
