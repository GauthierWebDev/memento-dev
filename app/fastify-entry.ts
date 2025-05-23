import type { readingTime } from "reading-time-estimator";
import type { TableOfContents } from "./remarkHeadingId";

import { createHandler } from "@universal-middleware/fastify";
import { vikeHandler } from "./server/vike-handler";
import { createDevMiddleware } from "vike/server";
import { docCache } from "./services/DocCache";
import { fileURLToPath } from "node:url";
import { search } from "./libs/search";
import { dirname } from "node:path";
import { config } from "./config";
import Fastify from "fastify";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = __dirname;

declare global {
	namespace Vike {
		interface PageContext {
			baseUrl: string;
			exports: {
				frontmatter?: Partial<{
					title: string;
					description: string;
					tags: string[];
				}>;
				readingTime?: ReturnType<typeof readingTime>;
				tableOfContents?: TableOfContents;
				[key: string]: unknown;
			};
		}
	}
}

async function startServer() {
	await docCache.waitingForCache(20000);

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

	app.get("/search", async (request, reply) => {
		const { query } = request.query as { query: string };
		if (!query) {
			reply.status(400).send("Query parameter is required");
			return;
		}

		const results = search(query);

		reply.status(200).send(results);
	});

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
