import type { SearchResult } from "@/services/FlexSearchService";
import type { JSX, Accessor, Setter } from "solid-js";

import {
	createContext,
	useContext,
	For,
	createEffect,
	createSignal,
} from "solid-js";
import { Dialog, DialogPanel } from "terracotta";
import { useDebounce } from "@/hooks/useDebounce";
import { Highlighter } from "solid-highlight-words";
import { navigate } from "vike/client/router";
import { useId } from "@/hooks/useId";
import clsx from "clsx";

const SearchContext = createContext<{
	query: Accessor<string>;
	close: () => void;
	results: Accessor<SearchResult[]>;
	isLoading: Accessor<boolean>;
	isOpened: Accessor<boolean>;
	setQuery: Setter<string>;
	setIsOpened: Setter<boolean>;
	setIsLoading: Setter<boolean>;
	setResults: Setter<SearchResult[]>;
}>({
	query: () => "",
	close: () => {},
	results: () => [],
	isLoading: () => false,
	isOpened: () => false,
	setQuery: () => {},
	setIsOpened: () => {},
	setIsLoading: () => {},
	setResults: () => {},
});

function SearchIcon(props: JSX.IntrinsicElements["svg"]) {
	return (
		<svg aria-hidden="true" viewBox="0 0 20 20" {...props}>
			<path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
		</svg>
	);
}

function LoadingIcon(props: JSX.IntrinsicElements["svg"]) {
	const id = useId();

	return (
		<svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
			<circle cx="10" cy="10" r="5.5" stroke-linejoin="round" />
			<path
				stroke={`url(#${id})`}
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M15.5 10a5.5 5.5 0 1 0-5.5 5.5"
			/>
			<defs>
				<linearGradient
					id={id}
					x1="13"
					x2="9.5"
					y1="9"
					y2="15"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="currentColor" />
					<stop offset="1" stop-color="currentColor" stop-opacity="0" />
				</linearGradient>
			</defs>
		</svg>
	);
}

function SearchInput() {
	const { close, setQuery, query, isLoading } = useContext(SearchContext);

	return (
		<div class="group relative flex h-12">
			<SearchIcon class="pointer-events-none absolute top-0 left-4 h-full w-5 fill-slate-400" />
			<input
				data-autofocus
				class={clsx(
					"flex-auto appearance-none bg-transparent pl-12 text-slate-900 outline-hidden placeholder:text-slate-400 focus:w-full focus:flex-none sm:text-sm [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden",
					isLoading() ? "pr-11" : "pr-4",
				)}
				onKeyDown={(event) => {
					if (event.key === "Escape") {
						// In Safari, closing the dialog with the escape key can sometimes cause the scroll position to jump to the
						// bottom of the page. This is a workaround for that until we can figure out a proper fix in Headless UI.
						if (document.activeElement instanceof HTMLElement) {
							document.activeElement.blur();
						}

						close();
					}
				}}
				value={query()}
				onInput={(event) => {
					const { value } = event.currentTarget;
					setQuery(value);
				}}
			/>
			{isLoading() && (
				<div class="absolute inset-y-0 right-3 flex items-center">
					<LoadingIcon class="h-6 w-6 animate-spin stroke-slate-200 text-slate-400" />
				</div>
			)}
		</div>
	);
}

function HighlightQuery({ text, query }: { text: string; query: string }) {
	return (
		<Highlighter
			highlightClass="group-aria-selected:underline bg-transparent text-violet-600"
			searchWords={[query]}
			autoEscape={true}
			textToHighlight={text}
		/>
	);
}

function SearchResultItem(props: { result: SearchResult; query: string }) {
	const { close } = useContext(SearchContext);
	const id = useId();

	return (
		<li
			class="group block cursor-default rounded-lg px-3 py-2 aria-selected:bg-slate-100 hover:bg-slate-100"
			aria-labelledby={`${id}-hierarchy ${id}-title`}
			tab-index={0}
			onKeyDown={(event) => {
				if (event.key === "Enter") {
					navigate(props.result.url);
					close();
				}
			}}
			onClick={() => {
				navigate(props.result.url);
				close();
			}}
		>
			<div
				id={`${id}-title`}
				aria-hidden="true"
				class="text-sm text-slate-700 group-aria-selected:text-violet-600"
			>
				<HighlightQuery text={props.result.title} query={props.query} />
			</div>
			{/* {props.result.length > 0 && (
				<div
					id={`${id}-hierarchy`}
					aria-hidden="true"
					class="mt-0.5 truncate text-xs whitespace-nowrap text-slate-500 dark:text-slate-400"
				>
					{hierarchy.map((item, itemIndex, items) => (
						<Fragment key={itemIndex}>
							<HighlightQuery text={item} query={query} />
							<span
								class={
									itemIndex === items.length - 1
										? "sr-only"
										: "mx-2 text-slate-300 dark:text-slate-700"
								}
							>
								/
							</span>
						</Fragment>
					))}
				</div>
			)} */}
		</li>
	);
}

function SearchResults() {
	const { results, query } = useContext(SearchContext);

	if (results().length === 0) {
		return (
			<p class="px-4 py-8 text-center text-sm text-slate-700">
				Aucun résultat pour &ldquo;
				<span class="break-words text-slate-900">{query()}</span>
				&rdquo;
			</p>
		);
	}

	return (
		<ul>
			<For each={results()}>
				{(result) => (
					<li>
						<SearchResultItem result={result} query={query()} />
					</li>
				)}
			</For>
		</ul>
	);
}

function SearchDialog(props: { class?: string }) {
	const { close, isOpened, setIsOpened, results } = useContext(SearchContext);

	createEffect(() => {
		if (isOpened()) return;

		function onKeyDown(event: KeyboardEvent) {
			if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
				event.preventDefault();
				setIsOpened(true);
			}
		}

		window.addEventListener("keydown", onKeyDown);

		return () => {
			window.removeEventListener("keydown", onKeyDown);
		};
	}, [isOpened, setIsOpened]);

	const handleClickOutside = (event: MouseEvent) => {
		const { target, currentTarget } = event;

		if (target instanceof Node && currentTarget instanceof Node) {
			if (target === currentTarget) close();
		}
	};

	return (
		<>
			<Dialog
				isOpen={isOpened()}
				onClose={close}
				class={clsx("fixed inset-0 z-50", props.class)}
			>
				<div class="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" />

				<div
					class="fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]"
					onClick={handleClickOutside}
					onKeyDown={(event) => {
						if (event.key === "Escape") close();
					}}
				>
					<DialogPanel class="mx-auto transform-gpu overflow-hidden rounded-xl bg-white shadow-xl sm:max-w-xl">
						<form onSubmit={(event) => event.preventDefault()}>
							<SearchInput />
							<div class="border-t border-slate-200 bg-white px-2 py-3 empty:hidden">
								{results().length > 0 && <SearchResults />}
							</div>
						</form>
					</DialogPanel>
				</div>
			</Dialog>
		</>
	);
}

export function Search() {
	const [results, setResults] = createSignal<SearchResult[]>([]);
	const [modifierKey, setModifierKey] = createSignal<string>();
	const [isLoading, setIsLoading] = createSignal(false);
	const [isOpened, setIsOpened] = createSignal(false);
	const [query, setQuery] = createSignal("");

	const debouncedQuery = useDebounce(query, 300);

	const onSearch = async (query: string) => {
		const response = await fetch(`/search?query=${query}`);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.json();
		return data;
	};

	createEffect(() => {
		const platform = navigator.userAgentData?.platform || navigator.platform;
		setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(platform) ? "⌘" : "Ctrl ");
	}, []);

	createEffect(() => {
		const query = debouncedQuery();

		if (query.length === 0) {
			setIsLoading(false);
			setResults([]);
			return;
		}

		setIsLoading(true);

		onSearch(query)
			.then(setResults)
			.finally(() => setIsLoading(false));
	});

	return (
		<SearchContext.Provider
			value={{
				query,
				close: () => setIsOpened(false),
				results,
				isLoading,
				isOpened,
				setQuery,
				setIsOpened,
				setIsLoading,
				setResults,
			}}
		>
			<button
				type="button"
				class="group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pr-3.5 md:pl-4 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 lg:w-96"
				onClick={() => setIsOpened(true)}
			>
				<SearchIcon class="h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 md:group-hover:fill-slate-400" />
				<span class="sr-only md:not-sr-only md:ml-2 md:text-slate-500">
					Rechercher...
				</span>
				{modifierKey && (
					<kbd class="ml-auto hidden font-medium text-slate-400 md:block">
						<kbd class="font-sans">{modifierKey()}</kbd>
						<kbd class="font-sans">K</kbd>
					</kbd>
				)}
			</button>
			<SearchDialog />
		</SearchContext.Provider>
	);
}
