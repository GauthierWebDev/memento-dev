import type { Config } from "vike/types";

import Layout from "@/layouts/LayoutDefault";
import vikeSolid from "vike-solid/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
	// https://vike.dev/Layout
	// @ts-ignore
	Layout,

	lang: "fr",

	// https://vike.dev/head-tags
	title: "Memento Dev",
	description:
		"Découvrez des synthèses et ressources open-source dans le développement informatique.",

	htmlAttributes: {
		class: "antialiased",
	},
	bodyAttributes: {
		class: "flex min-h-full bg-white",
	},

	prerender: true,
	prefetchStaticAssets: "hover",

	extends: [vikeSolid],
} satisfies Config;
