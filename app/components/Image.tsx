import type { JSX } from "solid-js";

type ImageProps = JSX.IntrinsicElements["img"] & { src: string; alt: string };

export function Image(props: ImageProps) {
	const isDecorationImage = props.alt === "";

	return (
		<img
			{...props}
			src={props.src}
			aria-hidden={isDecorationImage ? "true" : undefined}
			alt={isDecorationImage ? undefined : props.alt}
			loading="lazy"
		/>
	);
}
