import type { Config } from "vike/types";

import Layout from "@/layouts/LayoutDefault";
import vikeSolid from "vike-solid/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
	// https://vike.dev/Layout
	// @ts-ignore
	Layout,

	// https://vike.dev/head-tags
	title: "My Vike App",
	description: "Demo showcasing Vike",
	htmlAttributes: {
		class: "h-full antialiased",
	},
	bodyAttributes: {
		class: "flex min-h-full bg-white",
	},

	prerender: true,

	extends: [vikeSolid],
} satisfies Config;
