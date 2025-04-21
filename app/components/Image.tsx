import type { JSX } from "solid-js";

type ImageProps = JSX.IntrinsicElements["img"] & { src: string; alt: string };

export default function Image(props: ImageProps) {
	const isDecorationImage = props.alt === "";

	return (
		<img
			loading="lazy"
			{...props}
			src={props.src}
			aria-hidden={isDecorationImage ? "true" : undefined}
			alt={isDecorationImage ? undefined : props.alt}
		/>
	);
}
