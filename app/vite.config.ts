import tailwindcss from "@tailwindcss/vite";
import { telefunc } from "telefunc/vite";
import vikeSolid from "vike-solid/vite";
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import vike from "vike/plugin";
import path from "node:path";

const __dirname = path.resolve();

export default defineConfig({
	plugins: [
		vike(),
		vikeSolid(),
		mdx({ jsxImportSource: "solid-jsx", providerImportSource: "solid-mdx" }),
		tailwindcss(),
		telefunc(),
	],
	build: {
		target: "es2022",
	},
	resolve: {
		alias: {
			"@": __dirname,
		},
	},
});
