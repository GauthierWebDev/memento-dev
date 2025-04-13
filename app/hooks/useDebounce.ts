import React, { useEffect, useState } from "react";

export function useDebounce(debounceTime: number = 300): [string, React.Dispatch<React.SetStateAction<string>>] {
  const [debouncedValue, setDebouncedValue] = useState<string>("");
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, debounceTime);

    return () => {
      clearTimeout(handler);
    };
  }, [value]);

  return [debouncedValue, setValue];
}
