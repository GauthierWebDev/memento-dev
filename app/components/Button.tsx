import type { JSX } from "solid-js";

import { Link } from "./Link";
import clsx from "clsx";

const variantStyles = {
	primary:
		"bg-violet-300 font-semibold text-slate-900 hover:bg-violet-200 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300/50 active:bg-violet-500",
	secondary:
		"bg-slate-800 font-medium text-white hover:bg-slate-700 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400",
	ghost:
		"bg-transparent font-medium text-slate-900 hover:bg-slate-100 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300/50 active:bg-slate-200",
};

const sizeStyles = {
	sm: "rounded-md py-1 px-2 text-xs",
	md: "rounded-full py-2 px-4 text-sm",
	lg: "rounded-full py-3 px-6 text-base",
};

type ButtonProps = {
	variant?: keyof typeof variantStyles;
	size?: keyof typeof sizeStyles;
	className?: string;
} & (
	| JSX.IntrinsicElements["button"]
	| (JSX.IntrinsicElements["a"] & { href: string })
);

export function Button(props: ButtonProps) {
	const className = clsx(
		variantStyles[props.variant ?? "primary"],
		sizeStyles[props.size ?? "md"],
		"cursor-pointer",
		props.className,
	);

	return "href" in props && props.href ? (
		<Link
			{...(props as JSX.IntrinsicElements["a"])}
			class={className}
			href={props.href}
		/>
	) : (
		<button {...(props as JSX.IntrinsicElements["button"])} class={className} />
	);
}
