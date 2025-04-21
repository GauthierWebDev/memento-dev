import { createSignal, createEffect, onCleanup } from "solid-js";
import type { Accessor } from "solid-js";

export function useDebounce<T>(value: Accessor<T>, delay = 1000): Accessor<T> {
	const [debouncedValue, setDebouncedValue] = createSignal(value());
	let timeoutId: ReturnType<typeof setTimeout>;

	createEffect(() => {
		value();
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => setDebouncedValue(() => value()), delay);
	});

	onCleanup(() => clearTimeout(timeoutId));

	return debouncedValue;
}
