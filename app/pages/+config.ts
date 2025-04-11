import vikeReact from "vike-react/config";
import type { Config } from "vike/types";
import Layout from "../layouts/LayoutDefault.js";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  lang: "fr",

  // https://vike.dev/head-tags
  title: "Memento Dev",
  description: "Demo showcasing Vike",

  htmlAttributes: {
    class: "h-full antialiased",
  },
  bodyAttributes: {
    class: "flex min-h-full bg-white dark:bg-slate-900",
  },

  extends: vikeReact,
} satisfies Config;
