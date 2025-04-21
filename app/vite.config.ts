import type { Root } from "postcss";

import remarkExtractFrontmatter from "./remarkExtractFrontmatter";
import prismjsVitePlugin from "vite-plugin-prismjs";
import remarkFrontmatter from "remark-frontmatter";
import remarkHeadingId from "./remarkHeadingId";
import tailwindcss from "@tailwindcss/vite";
import { telefunc } from "telefunc/vite";
import vikeSolid from "vike-solid/vite";
import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import vike from "vike/plugin";
import path from "node:path";

type RemoveCommentRules = (root: Root) => void;

const removeCommentRules: RemoveCommentRules = (root) => {
	root.walkComments((comment) => {
		comment.remove();
	});
};

const __dirname = path.resolve();

export default defineConfig({
	plugins: [
		prismjsVitePlugin({
			languages: [
				"javascript",
				"typescript",
				"tsx",
				"jsx",
				"css",
				"html",
				"bash",
				"nginx",
			],
		}),
		vike(),
		vikeSolid(),
		mdx({
			jsxImportSource: "solid-jsx",
			remarkPlugins: [
				remarkFrontmatter,
				remarkHeadingId,
				remarkExtractFrontmatter,
			],
		}),
		tailwindcss(),
		telefunc(),
	],
	css: {
		postcss: {
			plugins: [
				...(process.env.NODE_ENV === "production" ? [removeCommentRules] : []),
			],
		},
	},
	build: {
		target: "es2022",
	},
	resolve: {
		alias: {
			"@": __dirname,
		},
	},
});
