import clsx from "clsx";

type IframeProps = {
	src: string;
	title: string;
	width?: string;
	height?: string;
	class?: string;
};

export function Iframe(props: IframeProps) {
	return (
		<iframe
			src={props.src}
			class={clsx("max-w-full pointer-events-none", props.class)}
			width={props.width}
			height={props.height}
			title={props.title}
		/>
	);
}
