import type { IconColor } from "@/components/Icon";

import { Gradient } from "@/components/Icon";

type GradientProps = {
	id: string;
	color?: IconColor;
};

export function InstallationIcon(props: GradientProps) {
	return (
		<>
			<defs>
				<Gradient
					id={`${props.id}-gradient`}
					color={props.color}
					gradientTransform="matrix(0 21 -21 0 12 3)"
				/>
				<Gradient
					id={`${props.id}-gradient-dark`}
					color={props.color}
					gradientTransform="matrix(0 21 -21 0 16 7)"
				/>
			</defs>
			<circle cx={12} cy={12} r={12} fill={`url(#${props.id}-gradient)`} />
			<path
				d="m8 8 9 21 2-10 10-2L8 8Z"
				fill-opacity={0.5}
				class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
				stroke-width={2}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</>
	);
}
