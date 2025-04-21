import fastifyStatic from "@fastify/static";
import { fileURLToPath } from "node:url";
import { search } from "./libs/search";
import { dirname } from "node:path";
import { config } from "./config";
import Fastify from "fastify";
import fs from "node:fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = __dirname;

const pagesDir = `${root}/dist/client`;

async function startServer() {
	const app = Fastify();

	app.register(fastifyStatic, {
		root: `${root}/dist/client`,
		wildcard: false,
	});

	app.get("/*", (request, reply) => {
		const filePath = `${pagesDir}${request.url}/index.html`;

		if (!fs.existsSync(filePath)) {
			const stream = fs.createReadStream(`${pagesDir}/404.html`);
			reply.status(404).type("text/html").send(stream);
			return;
		}

		const stream = fs.createReadStream(filePath);
		reply.type("text/html").send(stream);
	});

	app.get("/search", async (request, reply) => {
		const { query } = request.query as { query: string };
		if (!query) {
			reply.status(400).send("Query parameter is required");
			return;
		}

		const results = search(query);

		reply.status(200).send(results);
	});

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

export default app;
