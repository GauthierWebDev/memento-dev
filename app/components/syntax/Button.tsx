import { Link } from "@/components/common/Link";
import clsx from "clsx";

const variantStyles = {
  primary:
    "rounded-full bg-violet-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-violet-200 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300/50 active:bg-violet-500",
  secondary:
    "rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400",
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
} & (React.ComponentPropsWithoutRef<typeof Link> | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined }));

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  className = clsx(variantStyles[variant], "cursor-pointer", className);

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}
