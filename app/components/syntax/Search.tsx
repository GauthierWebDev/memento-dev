import { useId, useState, useEffect, createContext, useContext, Fragment } from "react";
import { SearchResult } from "@/services/FlexSearchService";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useDebounce } from "@/hooks/useDebounce";
import Highlighter from "react-highlight-words";
import { navigation } from "@/lib/navigation";
import { navigate } from "vike/client/router";
import { onSearch } from "./Search.telefunc";
import clsx from "clsx";

const SearchContext = createContext<{
  query: string;
  close: () => void;
  results: SearchResult[];
  isLoading: boolean;
  isOpened: boolean;
  setQuery: (query: string) => void;
  setIsOpened: (isOpened: boolean) => void;
  setIsLoading: (isLoading: boolean) => void;
  setResults: (results: SearchResult[]) => void;
}>({
  query: "",
  close: () => {},
  results: [],
  isLoading: false,
  isOpened: false,
  setQuery: () => {},
  setIsOpened: () => {},
  setIsLoading: () => {},
  setResults: () => {},
});

function SearchIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" {...props}>
      <path d="M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" />
    </svg>
  );
}

function LoadingIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  const id = useId();

  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <circle cx="10" cy="10" r="5.5" strokeLinejoin="round" />
      <path stroke={`url(#${id})`} strokeLinecap="round" strokeLinejoin="round" d="M15.5 10a5.5 5.5 0 1 0-5.5 5.5" />
      <defs>
        <linearGradient id={id} x1="13" x2="9.5" y1="9" y2="15" gradientUnits="userSpaceOnUse">
          <stop stopColor="currentColor" />
          <stop offset="1" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function SearchInput() {
  const { close, setQuery, query, isLoading } = useContext(SearchContext);

  return (
    <div className="group relative flex h-12">
      <SearchIcon className="pointer-events-none absolute top-0 left-4 h-full w-5 fill-slate-400 dark:fill-slate-500" />
      <input
        data-autofocus
        className={clsx(
          "flex-auto appearance-none bg-transparent pl-12 text-slate-900 outline-hidden placeholder:text-slate-400 focus:w-full focus:flex-none sm:text-sm dark:text-white [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden",
          isLoading ? "pr-11" : "pr-4",
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
        value={query}
        onChange={(event) => setQuery(event.currentTarget.value)}
      />
      {isLoading && (
        <div className="absolute inset-y-0 right-3 flex items-center">
          <LoadingIcon className="h-6 w-6 animate-spin stroke-slate-200 text-slate-400 dark:stroke-slate-700 dark:text-slate-500" />
        </div>
      )}
    </div>
  );
}

function HighlightQuery({ text, query }: { text: string; query: string }) {
  return (
    <Highlighter
      highlightClassName="group-aria-selected:underline bg-transparent text-violet-600 dark:text-violet-400"
      searchWords={[query]}
      autoEscape={true}
      textToHighlight={text}
    />
  );
}

function SearchResultItem({ result, query }: { result: SearchResult; query: string }) {
  const { close } = useContext(SearchContext);
  const id = useId();

  const sectionTitle = navigation.find((section) =>
    section.links.find((link) => link.href === result.url.split("#")[0]),
  )?.title;

  const hierarchy = [sectionTitle, result.pageTitle].filter((x): x is string => typeof x === "string");

  return (
    <li
      className="group block cursor-default rounded-lg px-3 py-2 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-700/30 hover:bg-slate-100 dark:hover:bg-slate-700/30"
      aria-labelledby={`${id}-hierarchy ${id}-title`}
      role="option"
      tabIndex={0}
      onClick={() => {
        navigate(result.url);
        close();
      }}
    >
      <div
        id={`${id}-title`}
        aria-hidden="true"
        className="text-sm text-slate-700 group-aria-selected:text-violet-600 dark:text-slate-300 dark:group-aria-selected:text-violet-400"
      >
        <HighlightQuery text={result.title} query={query} />
      </div>
      {hierarchy.length > 0 && (
        <div
          id={`${id}-hierarchy`}
          aria-hidden="true"
          className="mt-0.5 truncate text-xs whitespace-nowrap text-slate-500 dark:text-slate-400"
        >
          {hierarchy.map((item, itemIndex, items) => (
            <Fragment key={itemIndex}>
              <HighlightQuery text={item} query={query} />
              <span className={itemIndex === items.length - 1 ? "sr-only" : "mx-2 text-slate-300 dark:text-slate-700"}>
                /
              </span>
            </Fragment>
          ))}
        </div>
      )}
    </li>
  );
}

function SearchResults() {
  const { results, query } = useContext(SearchContext);

  if (results.length === 0) {
    return (
      <p className="px-4 py-8 text-center text-sm text-slate-700 dark:text-slate-400">
        Aucun résultat pour &ldquo;
        <span className="break-words text-slate-900 dark:text-white">{query}</span>
        &rdquo;
      </p>
    );
  }

  return (
    <ul>
      {results.map((result) => (
        <SearchResultItem key={result.url} result={result} query={query} />
      ))}
    </ul>
  );
}

function SearchDialog({ className }: { className?: string }) {
  const { close, isOpened, setIsOpened, results } = useContext(SearchContext);

  useEffect(() => {
    if (isOpened) return;

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

  return (
    <>
      <Dialog open={isOpened} onClose={close} className={clsx("fixed inset-0 z-50", className)}>
        <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm" />

        <div className="fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]">
          <DialogPanel className="mx-auto transform-gpu overflow-hidden rounded-xl bg-white shadow-xl sm:max-w-xl dark:bg-slate-800 dark:ring-1 dark:ring-slate-700">
            <form onSubmit={(event) => event.preventDefault()}>
              <SearchInput />
              <div className="border-t border-slate-200 bg-white px-2 py-3 empty:hidden dark:border-slate-400/10 dark:bg-slate-800">
                {results.length > 0 && <SearchResults />}
              </div>
            </form>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}

export function Search() {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [debouncedQuery, setDebouncedQuery] = useDebounce();
  const [modifierKey, setModifierKey] = useState<string>();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const platform = navigator.userAgentData?.platform || navigator.platform;
    setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(platform) ? "⌘" : "Ctrl ");
  }, []);

  useEffect(() => {
    setDebouncedQuery(query);
  }, [query]);

  useEffect(() => {
    if (debouncedQuery.length === 0) {
      setIsLoading(false);
      setResults([]);
      return;
    }

    setIsLoading(true);

    onSearch(debouncedQuery, 5)
      .then(setResults)
      .finally(() => {
        setIsLoading(false);
      });
  }, [debouncedQuery]);

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
        className="group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pr-3.5 md:pl-4 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 lg:w-96 dark:md:bg-slate-800/75 dark:md:ring-white/5 dark:md:ring-inset dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500"
        onClick={() => setIsOpened(true)}
      >
        <SearchIcon className="h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 md:group-hover:fill-slate-400 dark:fill-slate-500" />
        <span className="sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400">Rechercher...</span>
        {modifierKey && (
          <kbd className="ml-auto hidden font-medium text-slate-400 md:block dark:text-slate-500">
            <kbd className="font-sans">{modifierKey}</kbd>
            <kbd className="font-sans">K</kbd>
          </kbd>
        )}
      </button>
      <SearchDialog />
    </SearchContext.Provider>
  );
}
