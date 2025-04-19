import type { IconColor } from "@/components/Icon";

import { Gradient } from "@/components/Icon";

type GradientProps = {
	id: string;
	color?: IconColor;
};

export function PresetsIcon(props: GradientProps) {
	return (
		<>
			<defs>
				<Gradient
					id={`${props.id}-gradient`}
					color={props.color}
					gradientTransform="matrix(0 21 -21 0 20 3)"
				/>
				<Gradient
					id={`${props.id}-gradient-dark`}
					color={props.color}
					gradientTransform="matrix(0 22.75 -22.75 0 16 6.25)"
				/>
			</defs>
			<circle cx={20} cy={12} r={12} fill={`url(#${props.id}-gradient)`} />
			<g
				class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
				fill-opacity={0.5}
				stroke-width={2}
				stroke-linecap="round"
				stroke-linejoin="round"
			>
				<path d="M3 5v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
				<path d="M18 17v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z" />
				<path d="M18 5v4a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z" />
				<path d="M3 25v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" />
			</g>
		</>
	);
}
