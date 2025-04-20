import type { Accessor, Setter } from "solid-js";

import { createEffect, createSignal } from "solid-js";

export function useDebounce<T>(
	defaultValue: T,
	debounceTime = 300,
): [Accessor<T>, Setter<T>] {
	const [debouncedValue, setDebouncedValue] = createSignal<T>(defaultValue);
	const [value, setValue] = createSignal<T>(defaultValue);

	createEffect(() => {
		const handler = setTimeout(() => {
			setDebouncedValue(value());
		}, debounceTime);

		return () => {
			clearTimeout(handler);
		};
	}, [value()]);

	return [debouncedValue, setValue];
}
