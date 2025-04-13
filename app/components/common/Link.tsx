import { usePageContext } from "vike-react/usePageContext";
import clsx from "clsx";

export function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const { urlPathname } = usePageContext();
  const isActive = props.href === "/" ? urlPathname === props.href : urlPathname.startsWith(props.href);
  const isSameDomain = !(props.href.startsWith("http") || props.href.startsWith("mailto"));

  return (
    <a
      {...props}
      href={props.href}
      className={clsx(isActive && "is-active", props.className)}
      {...(!isSameDomain ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {props.children}
    </a>
  );
}
