import type { Config } from "vike/types";

import Layout from "@/layouts/LayoutDefault";
import vikeReact from "vike-react/config";

// Default config (can be overridden by pages)
// https://vike.dev/config

export default {
  // https://vike.dev/Layout
  Layout,

  lang: "fr",

  // https://vike.dev/head-tags
  title: "Memento Dev",
  description: "Découvrez des synthèses et ressources open-source dans le développement informatique.",

  htmlAttributes: {
    class: "h-full antialiased",
  },
  bodyAttributes: {
    class: "flex min-h-full bg-white dark:bg-slate-900",
  },

  image: null,

  // prerender: true,
  prefetchStaticAssets: "hover",

  extends: vikeReact,
} satisfies Config;
