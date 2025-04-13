import { usePageContext } from "vike-react/usePageContext";
import clsx from "clsx";

export function Link(props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) {
  const { urlPathname } = usePageContext();
  const isActive = props.href === "/" ? urlPathname === props.href : urlPathname.startsWith(props.href);
  const isSameDomain = !(props.href.startsWith("http") || props.href.startsWith("mailto"));
  const isDownload = props.href.endsWith(".pdf") || props.href.endsWith(".zip");

  return (
    <a
      {...props}
      href={props.href}
      className={clsx(isActive && "is-active", props.className)}
      {...(isDownload ? { download: true } : {})}
      {...(!isSameDomain || isDownload ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {props.children}
    </a>
  );
}
