import type { ComponentProps, ParentComponent } from "solid-js";

import {
	createEffect,
	createMemo,
	For,
	mergeProps,
	on,
	splitProps,
} from "solid-js";
import { clipboard } from "solid-heroicons/solid";
import { Icon } from "solid-heroicons";
import * as Prismjs from "prismjs";
import toast from "solid-toast";
import clsx from "clsx";

type Props = {
	language: string;
	class?: string;
	dark?: boolean;
	withLineNumbers?: boolean;
} & ComponentProps<"code">;

export const Highlight: ParentComponent<Props> = (_props) => {
	const props = mergeProps({ language: "javascript" }, _props);
	const [, rest] = splitProps(props, [
		"language",
		"children",
		"class",
		"innerHTML",
	]);

	const languageClass = createMemo(() => `language-${props.language}`);

	const highlightedCode = createMemo<string | undefined>(() => {
		const childrenString = props.children?.toString();
		if (!childrenString) return;

		const grammar = Prismjs.languages[props.language];
		if (!grammar) return;

		const result = Prismjs.highlight(childrenString, grammar, props.language);

		return result;
	});

	createEffect(
		on([languageClass, highlightedCode], () => {
			Prismjs.highlightAll();
		}),
	);

	const handleCopyToClipboard = () => {
		if (props.innerHTML) {
			navigator.clipboard.writeText(props.innerHTML);
		} else if (props.children) {
			navigator.clipboard.writeText(props.children.toString());
		}

		toast.success("Copié dans le presse-papier", {
			duration: 2000,
			position: "top-right",
		});
	};

	return (
		<div class={clsx("group flex items-start px-4 py-2 w-full", props.class)}>
			<button
				class="absolute cursor-pointer z-10 top-2 right-2 text-slate-500 bg-slate-200/10 rounded-md hover:bg-linear-to-r hover:from-violet-400/30 hover:via-violet-400 hover:to-violet-400/30 p-px hover:text-violet-300"
				type="button"
				onClick={handleCopyToClipboard}
			>
				<span
					class={clsx(
						props.dark ? "hover:bg-slate-800" : "hover:bg-white",
						"p-2 block rounded-md",
					)}
				>
					<span class="sr-only">Copier l'extrait de code</span>
					<Icon path={clipboard} class="w-5 h-5" />
				</span>
			</button>

			{props.withLineNumbers && props.children?.toString() && (
				<div
					aria-hidden="true"
					class="border-r leading-6 border-slate-300/5 pr-4 font-mono text-slate-600 select-none"
				>
					<For
						each={Array.from({
							length: props.children.toString().split("\n").length,
						})}
					>
						{(_, index) => (
							<>
								{(index() + 1).toString().padStart(2, "0")}
								<br />
							</>
						)}
					</For>
				</div>
			)}

			<pre
				class={clsx(
					"not-prose w-full prism-code flex overflow-x-auto",
					languageClass(),
				)}
			>
				<code
					class={clsx("leading-6", props.withLineNumbers ? "px-4" : "pr-4")}
					innerHTML={highlightedCode()}
					{...rest}
				>
					{props.children}
				</code>
			</pre>
		</div>
	);
};
