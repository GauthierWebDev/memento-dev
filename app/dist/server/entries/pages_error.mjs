import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { usePageContext } from "vike-react/usePageContext";
import { L as Link } from "../chunks/chunk-DhcPoVSR.js";
import { i as import6$1, D as DefaultLayout, a as import4 } from "../chunks/chunk-Cog4aWZK.js";
import import6 from "vike-react/__internal/integration/Loading";
import "telefunc";
import "flexsearch";
import "@sindresorhus/slugify";
import "@markdoc/markdoc";
import "react";
import "clsx";
import "@heroicons/react/24/outline";
import "prism-react-renderer";
import "js-yaml";
import "fast-glob";
import "path";
import "fs";
import "@headlessui/react";
/* empty css                       */
/* empty css                       */
/* empty css                       */
/* empty css                       */
import "vike-react/config";
import "react-highlight-words";
import "vike/client/router";
/*! pages/_error/+Page.tsx [vike:pluginModuleBanner] */
function Page() {
  const { is404 } = usePageContext();
  if (is404) {
    return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { className: "max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16", children: /* @__PURE__ */ jsxs("div", { className: "flex h-full flex-col items-center justify-center text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "font-display text-sm font-medium text-slate-900 dark:text-white", children: "404" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-3 font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: "Page introuvable" }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-slate-500 dark:text-slate-400", children: "Désolé, nous ne pouvons pas trouver la page que vous recherchez." }),
      /* @__PURE__ */ jsx(Link, { href: "/", className: "mt-8 text-sm font-medium text-slate-900 dark:text-white", children: "Retour à l'accueil" })
    ] }) }) });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "500 Internal Server Error" }),
    /* @__PURE__ */ jsx("p", { children: "Something went wrong." })
  ] });
}
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
/*! virtual:vike:pageConfigValuesAll:server:/pages/_error [vike:pluginModuleBanner] */
const configValuesSerialized = {
  ["isClientRuntimeLoaded"]: {
    type: "computed",
    definedAtData: null,
    valueSerialized: {
      type: "js-serialized",
      value: true
    }
  },
  ["onRenderHtml"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/onRenderHtml", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: onRenderHtml
    }
  },
  ["Page"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/_error/+Page.tsx", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import2
    }
  },
  ["passToClient"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "passToClient"] }],
    valueSerialized: [{
      type: "js-serialized",
      value: ["_configFromHook"]
    }]
  },
  ["Head"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "/pages/+Head.tsx", "fileExportPathToShowToUser": [] }],
    valueSerialized: [{
      type: "plus-file",
      exportValues: import4
    }]
  },
  ["Layout"]: {
    type: "cumulative",
    definedAtData: [{ "filePathToShowToUser": "/layouts/LayoutDefault.tsx", "fileExportPathToShowToUser": [] }],
    valueSerialized: [{
      type: "pointer-import",
      value: DefaultLayout
    }]
  },
  ["title"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+title.ts", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import6$1
    }
  },
  ["description"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+config.ts", "fileExportPathToShowToUser": ["default", "description"] },
    valueSerialized: {
      type: "js-serialized",
      value: "Demo showcasing Vike"
    }
  },
  ["lang"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/+config.ts", "fileExportPathToShowToUser": ["default", "lang"] },
    valueSerialized: {
      type: "js-serialized",
      value: "fr"
    }
  },
  ["Loading"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "vike-react/__internal/integration/Loading", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "pointer-import",
      value: import6
    }
  }
};
export {
  configValuesSerialized
};
