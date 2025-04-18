/// <reference lib="webworker" />

// TODO: stop using universal-middleware and directly integrate server middlewares instead. (Bati generates boilerplates that use universal-middleware https://github.com/magne4000/universal-middleware to make Bati's internal logic easier. This is temporary and will be removed soon.)
import type { Get, UniversalHandler } from "@universal-middleware/core";

import { CookieParser } from "@/services/CookieParser";
import { renderPage } from "vike/server";

export const vikeHandler: Get<[], UniversalHandler> = () => async (request, context, runtime) => {
  const cookies = new CookieParser(request.headers.get("cookie") || "");

  const pageContextInit = {
    ...context,
    ...runtime,
    urlOriginal: request.url,
    headersOriginal: request.headers,
    cookies: {
      consent: {
        analytics: cookies.get("consent-analytics", Boolean) || false,
        customization: cookies.get("consent-customization", Boolean) || false,
      },
      theme: cookies.get("theme") || "light",
    },
  };
  const pageContext = await renderPage(pageContextInit);
  const response = pageContext.httpResponse;

  const { readable, writable } = new TransformStream();
  response.pipe(writable);

  return new Response(readable, {
    status: response.statusCode,
    headers: response.headers,
  });
};
