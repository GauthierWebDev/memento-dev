import type { JSX } from "solid-js";

import { InstallationIcon } from "@/icons/InstallationIcon";
import { LightbulbIcon } from "@/icons/LightbulbIcon";
import { QuestionIcon } from "@/icons/QuestionIcon";
import { PluginsIcon } from "@/icons/PluginsIcon";
import { PresetsIcon } from "@/icons/PresetsIcon";
import { ThemingIcon } from "@/icons/ThemingIcon";
import { WarningIcon } from "@/icons/WarningIcon";
import { useId } from "@/hooks/useId";
import { For } from "solid-js";
import clsx from "clsx";

const icons = {
	installation: InstallationIcon,
	presets: PresetsIcon,
	plugins: PluginsIcon,
	theming: ThemingIcon,
	lightbulb: LightbulbIcon,
	warning: WarningIcon,
	question: QuestionIcon,
};

const iconStyles = {
	blue: "[--icon-foreground:var(--color-slate-900)] [--icon-background:var(--color-white)]",
	amber:
		"[--icon-foreground:var(--color-amber-900)] [--icon-background:var(--color-amber-100)]",
};

export type IconColor = keyof typeof iconStyles;

export type IconProps = JSX.IntrinsicElements["svg"] & {
	color?: IconColor;
	icon: keyof typeof icons;
};

export function Icon(props: IconProps) {
	const id = useId();
	const IconComponent = icons[props.icon];

	return (
		<svg
			{...props}
			aria-hidden="true"
			viewBox="0 0 32 32"
			fill="none"
			class={clsx(props.class, iconStyles[props.color || "blue"])}
		>
			<IconComponent id={id} color={props.color || "blue"} />
		</svg>
	);
}

const gradients = {
	blue: [
		{ "stop-color": "#0EA5E9" },
		{ "stop-color": "#22D3EE", offset: ".527" },
		{ "stop-color": "#818CF8", offset: 1 },
	],
	amber: [
		{ "stop-color": "#FDE68A", offset: ".08" },
		{ "stop-color": "#F59E0B", offset: ".837" },
	],
};

type GradientProps = JSX.IntrinsicElements["radialGradient"] & {
	color?: keyof typeof gradients;
};

export function Gradient(props: GradientProps) {
	return (
		<radialGradient
			cx={0}
			cy={0}
			r={1}
			gradientUnits="userSpaceOnUse"
			{...props}
		>
			<For each={gradients[props.color || "blue"]}>
				{(stop) => <stop {...stop} />}
			</For>
		</radialGradient>
	);
}
