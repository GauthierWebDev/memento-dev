import type { Theme } from "@/contexts/ThemeContext";

import { createHandler } from "@universal-middleware/fastify";
import { telefuncHandler } from "./server/telefunc-handler";
import { vikeHandler } from "./server/vike-handler";
import fastifyCookie from "@fastify/cookie";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import Fastify from "fastify";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const hmrPort = process.env.HMR_PORT ? parseInt(process.env.HMR_PORT, 10) : 24678;
const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const root = __dirname;

declare global {
  namespace Vike {
    interface PageContext {
      cookies: Partial<{
        consent: boolean;
        theme: Theme;
      }>;
    }
  }
}

async function startServer() {
  const app = Fastify();

  app.register(fastifyCookie, {
    secret: "todo",
    hook: "onRequest",
    parseOptions: {},
  });

  // Avoid pre-parsing body, otherwise it will cause issue with universal handlers
  // This will probably change in the future though, you can follow https://github.com/magne4000/universal-middleware for updates
  app.removeAllContentTypeParsers();
  app.addContentTypeParser("*", function (_request, _payload, done) {
    done(null, "");
  });

  await app.register(await import("@fastify/middie"));

  if (process.env.NODE_ENV === "production") {
    await app.register(await import("@fastify/static"), {
      root: `${root}/dist/client`,
      wildcard: false,
    });
  } else {
    // Instantiate Vite's development server and integrate its middleware to our server.
    // ⚠️ We should instantiate it *only* in development. (It isn't needed in production
    // and would unnecessarily bloat our server in production.)
    const vite = await import("vite");
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true, hmr: { port: hmrPort } },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }

  app.post<{ Body: string }>("/_telefunc", createHandler(telefuncHandler)());

  /**
   * Vike route
   *
   * @link {@see https://vike.dev}
   **/
  app.all("/*", createHandler(vikeHandler)());

  return app;
}

const app = await startServer();

app.listen({ port, host: "0.0.0.0" }, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
