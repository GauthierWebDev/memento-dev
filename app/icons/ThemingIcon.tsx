import type { IconColor } from "@/components/Icon";

import { Gradient } from "@/components/Icon";

type GradientProps = {
	id: string;
	color?: IconColor;
};

export function ThemingIcon(props: GradientProps) {
	return (
		<>
			<defs>
				<Gradient
					id={`${props.id}-gradient`}
					color={props.color}
					gradientTransform="matrix(0 21 -21 0 12 11)"
				/>
				<Gradient
					id={`${props.id}-gradient-dark`}
					color={props.color}
					gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"
				/>
			</defs>
			<circle cx={12} cy={20} r={12} fill={`url(#${props.id}-gradient)`} />
			<path
				d="M27 12.13 19.87 5 13 11.87v14.26l14-14Z"
				class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
				fill-opacity={0.5}
				stroke-width={2}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M3 3h10v22a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V3Z"
				class="fill-[var(--icon-background)]"
				fill-opacity={0.5}
			/>
			<path
				d="M3 9v16a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V9M3 9V3h10v6M3 9h10M3 15h10M3 21h10"
				class="stroke-[color:var(--icon-foreground)]"
				stroke-width={2}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M29 29V19h-8.5L13 26c0 1.5-2.5 3-5 3h21Z"
				fill-opacity={0.5}
				class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
				stroke-width={2}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</>
	);
}
