import type { PageContext } from "vike/types";

const routeRegex = /^\/certifications\/(.*)$/;

export function route(pageContext: PageContext) {
  if (pageContext.urlPathname === "/certifications") {
    return { routeParams: { key: "index" } };
  }

  const match = pageContext.urlPathname.match(routeRegex);
  if (!match) return false;

  const [, key] = match;

  return { routeParams: { key } };
}
