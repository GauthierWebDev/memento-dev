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
        analytics: cookies.get<boolean>("analytics", (value) => value === "true") || false,
        customization: cookies.get<boolean>("customization", (value) => value === "true") || false,
      },
      settings: {
        theme: cookies.get("theme") || "light",
      },
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
