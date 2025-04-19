export function cleanProps(
	props: Record<string, unknown>,
	...propsToRemove: string[]
): Record<string, unknown> {
	const newProps = { ...props };
	for (const prop of propsToRemove) {
		delete newProps[prop];
	}
	return newProps;
}
