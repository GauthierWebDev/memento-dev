import type { JSX, Accessor, Setter } from "solid-js";

import {
	createContext,
	useContext,
	createSignal,
	onMount,
	For,
} from "solid-js";
import { Button } from "@/components/Button";
import clsx from "clsx";

type TabType = {
	label: string;
	value: string;
};

type TabsContextType = {
	selectedTab: Accessor<string>;
	setSelectedTab: Setter<string>;
	tabs: Accessor<TabType[]>;
	addTab: (tab: TabType) => void;
};

const TabsContext = createContext<TabsContextType>({
	selectedTab: () => "",
	setSelectedTab: () => {},
	tabs: () => [],
	addTab: () => {},
});

export default function Tabs(props: {
	defaultSelectedTab?: string;
	children: JSX.Element;
}) {
	const [selectedTab, setSelectedTab] = createSignal(
		props.defaultSelectedTab || "",
	);
	const [tabs, setTabs] = createSignal<TabType[]>([]);

	const addTab = (tab: TabType) => {
		setTabs((prevTabs) => {
			// Append to the end of the array and make sure it's unique
			if (prevTabs.some((t) => t.value === tab.value)) {
				return prevTabs;
			}

			return [...prevTabs, tab];
		});
	};

	return (
		<TabsContext.Provider
			value={{
				selectedTab,
				setSelectedTab,
				tabs,
				addTab,
			}}
		>
			<div class="relative">
				<div class="max-w-full overflow-x-auto overflow-y-hidden">
					<ul
						class="!p-0 w-max flex items-stretch gap-1 !m-0"
						aria-orientation="horizontal"
						role="tablist"
					>
						<For each={tabs()}>
							{(tab) => (
								<li class="overflow-hidden">
									<TabItem
										tab={tab}
										isSelected={selectedTab() === tab.value}
										select={() => setSelectedTab(tab.value)}
									/>
								</li>
							)}
						</For>
					</ul>
				</div>
				<div class="-mt-1 p-2">{props.children}</div>
			</div>
		</TabsContext.Provider>
	);
}

function TabItem(props: {
	tab: TabType;
	isSelected: boolean;
	select: () => void;
}) {
	return (
		<Button
			variant={props.isSelected ? "primary" : "secondary"}
			class={clsx("!rounded-md", props.isSelected && "cursor-default")}
			onClick={props.select}
		>
			{props.tab.label}
		</Button>
	);
}

Tabs.Item = (props: {
	label: string;
	value: string;
	children: JSX.Element;
}) => {
	const tabsContext = useContext(TabsContext);
	if (!tabsContext) {
		throw new Error("Tabs.Item must be used within Tabs");
	}

	onMount(() => {
		tabsContext.addTab({ label: props.label, value: props.value });
	});

	return (
		<div
			class={clsx(
				"first:!mt-0",
				"last:!mb-0",
				tabsContext.selectedTab() !== props.value && "hidden",
			)}
		>
			{props.children}
		</div>
	);
};
