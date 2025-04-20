import type { JSX, Accessor, Setter } from "solid-js";

import { For, createSignal } from "solid-js";
import { Highlight } from "./Highlight";
import clsx from "clsx";

function TrafficLightsIcon(props: JSX.IntrinsicElements["svg"]) {
	return (
		<svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
			<circle cx="5" cy="5" r="4.5" class="fill-red-400" />
			<circle cx="21" cy="5" r="4.5" class="fill-amber-300" />
			<circle cx="37" cy="5" r="4.5" class="fill-green-500" />
		</svg>
	);
}

type SnippetTab = {
	name: string;
	codeLanguage: string;
	code: string;
};

type SnippetProps = {
	children?: JSX.Element;
	class?: string;
	snippets: SnippetTab[];
};

export function Snippet(props: SnippetProps) {
	const [selectedTab, setSelectedTab] = createSignal<SnippetTab>(
		props.snippets[0],
	);

	const isActive = (tab: SnippetTab) => selectedTab()?.name === tab.name;
	const selectTab = (name: string) => {
		const tab = props.snippets.find((tab) => tab.name === name);
		if (tab) setSelectedTab(tab);
	};

	return (
		<div
			class={clsx(
				"relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur-sm",
				props.class,
			)}
		>
			<div class="absolute -top-px right-11 left-20 h-px bg-linear-to-r from-violet-300/0 via-violet-300/70 to-violet-300/0" />
			<div class="absolute right-20 -bottom-px left-11 h-px bg-linear-to-r from-purple-400/0 via-purple-400 to-purple-400/0" />
			<div class="pt-4 pl-4">
				<TrafficLightsIcon class="h-2.5 w-auto stroke-slate-500/30" />
				<div class="mt-4 flex space-x-2 text-xs">
					<For each={props.snippets}>
						{(tab) => (
							<div
								class={clsx(
									"flex h-6 rounded-full",
									{ "cursor-pointer": tab.codeLanguage && !isActive(tab) },
									isActive(tab)
										? "bg-linear-to-r from-violet-400/30 via-violet-400 to-violet-400/30 p-px font-medium text-violet-300"
										: "text-slate-500",
								)}
							>
								<button
									type="button"
									class={clsx(
										"flex items-center rounded-full px-2.5",
										isActive(tab) && "bg-slate-800",
									)}
									disabled={!tab.codeLanguage}
									onClick={() => selectTab(tab.name)}
								>
									{tab.name}
								</button>
							</div>
						)}
					</For>
				</div>

				{selectedTab() && (
					<div class="mt-6">
						<Highlight
							class="dark !pt-0 !px-1"
							language={selectedTab().codeLanguage}
							withLineNumbers
						>
							{selectedTab().code}
						</Highlight>
					</div>
				)}
			</div>
		</div>
	);
}
