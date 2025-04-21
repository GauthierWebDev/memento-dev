import clsx from "clsx";

type IframeProps = {
	src: string;
	title: string;
	width?: string;
	height?: string;
	class?: string;
};

export default function Iframe(props: IframeProps) {
	return (
		<div class={clsx("max-w-full pointer-events-none w-full")}>
			<iframe
				src={props.src}
				width={props.width}
				height={props.height}
				title={props.title}
				class={props.class}
			/>
		</div>
	);
}
