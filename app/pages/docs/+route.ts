import type { PageContext } from "vike/types";

const routeRegex = /^\/docs\/(.*)$/;

export function route(pageContext: PageContext) {
  const match = pageContext.urlPathname.match(routeRegex);
  if (!match) return false;

  const [, key] = match;

  return { routeParams: { key } };
}
