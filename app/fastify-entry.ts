import { createHandler } from "@universal-middleware/fastify";
import { telefuncHandler } from "./server/telefunc-handler";
import { vikeHandler } from "./server/vike-handler";
import { createDevMiddleware } from "vike/server";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import { config } from "./config";
import Fastify from "fastify";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = __dirname;

async function startServer() {
	const app = Fastify();

	// Avoid pre-parsing body, otherwise it will cause issue with universal handlers
	// This will probably change in the future though, you can follow https://github.com/magne4000/universal-middleware for updates
	app.removeAllContentTypeParsers();
	app.addContentTypeParser("*", (_request, _payload, done) => done(null, ""));

	await app.register(await import("@fastify/middie"));

	if (process.env.NODE_ENV === "production") {
		await app.register(await import("@fastify/static"), {
			root: `${root}/dist/client`,
			wildcard: false,
		});
	} else {
		const { devMiddleware } = await createDevMiddleware({
			root,
			viteConfig: {
				server: { hmr: { port: config.HMR_PORT } },
			},
		});
		app.use(devMiddleware);
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

app.listen({ port: config.PORT, host: "0.0.0.0" }, (error, address) => {
	if (error) {
		app.log.error(error);
		process.exit(1);
	}

	console.log(`Server listening on ${address}`);
});
