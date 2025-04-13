import type { SearchResult } from "@/lib/search";

import { useDebounce } from "./useDebounce";
import { useState, useEffect, use } from "react";

export function useAutoComplete(onSearch: (query: string) => Promise<SearchResult[]>) {
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [query, setQuery] = useDebounce();

  useEffect(() => {
    // Attach the event listener to the window
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpened(false);
      } else if (event.key === "K" && (event.ctrlKey || event.metaKey)) {
        event.preventDefault();
        setIsOpened(true);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return {
    results,
    isLoading,
    isOpened,
    query,
    setQuery,
  };
}
