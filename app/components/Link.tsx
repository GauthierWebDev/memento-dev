import type { JSX } from "solid-js";

import { usePageContext } from "vike-solid/usePageContext";

type LinkProps = JSX.IntrinsicElements["a"] & { href: string };

export function Link(props: LinkProps) {
	const { urlPathname } = usePageContext();

	const isActive =
		props.href === "/"
			? urlPathname === props.href
			: urlPathname.startsWith(props.href);

	const isSameDomain = !(
		props.href.startsWith("http") || props.href.startsWith("mailto")
	);

	const downloadExtensions = [".pdf", ".zip"];

	const isDownload = downloadExtensions.some(props.href.endsWith);

	return (
		<a
			{...props}
			{...(isActive && { ariaCurrent: "page" })}
			{...(isDownload && { download: true })}
			{...(!isSameDomain || isDownload
				? { target: "_blank", rel: "noopener noreferrer" }
				: { target: "_self" })}
		>
			{props.children}
		</a>
	);
}
