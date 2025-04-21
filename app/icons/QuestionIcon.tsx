import type { IconColor } from "@/components/Icon";

import { Gradient } from "@/components/Icon";

type GradientProps = {
	id: string;
	color?: IconColor;
};

export function QuestionIcon(props: GradientProps) {
	return (
		<>
			<defs>
				<Gradient
					id={`${props.id}-gradient`}
					color={props.color}
					gradientTransform="rotate(65.924 1.519 20.92) scale(25.7391)"
				/>
				<Gradient
					id={`${props.id}-gradient-dark`}
					color={props.color}
					gradientTransform="matrix(0 24.5 -24.5 0 16 5.5)"
				/>
			</defs>
			<circle cx={20} cy={20} r={12} fill={`url(#${props.id}-gradient)`} />
			<path
				d="M3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3 3 8.82 3 16Z"
				fill-opacity={0.5}
				class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
				stroke-width={2}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M 15.613 15.7139 C 15.8705 15.1461 17.758 11.3442 17.8109 10.4986 C 17.9128 8.8632 15.5223 8.1803 14.6161 9.3819 C 14.4617 9.5862 13.8186 9.7889 13.8694 9.2081 C 14.0808 7.755 16.4352 7.3025 17.9493 8.5954 C 18.5705 9.1256 18.8798 9.9497 18.7641 10.6412 C 18.5471 11.9402 16.7786 15.9192 16.7786 15.9192 C 16.2095 17.065 15.3394 16.3173 15.613 15.7139 Z"
				class="fill-[var(--icon-foreground)] stroke-[color:var(--icon-foreground)]"
				stroke-width={2}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
			<path
				d="M16 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
				fill-opacity={0.5}
				stroke="currentColor"
				class="fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]"
				stroke-width={2}
				stroke-linecap="round"
				stroke-linejoin="round"
			/>
		</>
	);
}
