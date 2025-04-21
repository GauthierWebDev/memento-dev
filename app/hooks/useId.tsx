import { createUniqueId } from "solid-js";

export function useId() {
	const id = createUniqueId();
	return `memento-${id}`;
}
