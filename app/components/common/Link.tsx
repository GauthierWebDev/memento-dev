import { usePageContext } from "vike-react/usePageContext";
import clsx from "clsx";

export function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const { urlPathname } = usePageContext();
  const isActive = props.href === "/" ? urlPathname === props.href : urlPathname.startsWith(props.href);

  return (
    <a {...props} href={props.href} className={clsx(isActive && "is-active", props.className)}>
      {props.children}
    </a>
  );
}
