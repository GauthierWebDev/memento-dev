import type { IconColor } from "@/components/Icon";

import { Gradient } from "@/components/Icon";

type GradientProps = {
	id: string;
	color?: IconColor;
};

export function PluginsIcon(props: GradientProps) {
	return (
		<>
			<defs>
				<Gradient
					id={`${props.id}-gradient`}
					color={props.color}
					gradientTransform="matrix(0 21 -21 0 20 11)"
				/>
				<Gradient
					id={`${props.id}-gradient-dark-1`}
					color={props.color}
					gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)"
				/>
				<Gradient
					id={`${props.id}-gradient-dark-2`}
					color={props.color}
					gradientTransform="matrix(0 14 -14 0 16 10)"
				/>
			</defs>
			<circle cx={20} cy={20} r={12} fill={`url(#${props.id}-gradient)`} />
			<g
				fill-opacity={0.5}
				class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
				stroke-width={2}
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M3 9v14l12 6V15L3 9Z" />
				<path d="M27 9v14l-12 6V15l12-6Z" />
			</g>
			<path
				d="M11 4h8v2l6 3-10 6L5 9l6-3V4Z"
				fill-opacity={0.5}
				class="fill-[var(--icon-background)]"
			/>
			<g
				class="stroke-[color:var(--icon-foreground)]"
				stroke-width={2}
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M20 5.5 27 9l-12 6L3 9l7-3.5" />
				<path d="M20 5c0 1.105-2.239 2-5 2s-5-.895-5-2m10 0c0-1.105-2.239-2-5-2s-5 .895-5 2m10 0v3c0 1.105-2.239 2-5 2s-5-.895-5-2V5" />
			</g>
		</>
	);
}
