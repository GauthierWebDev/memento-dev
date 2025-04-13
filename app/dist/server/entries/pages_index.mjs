import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { jsx } from "react/jsx-runtime";
import { i as import6$1, D as DefaultLayout, a as import4 } from "../chunks/chunk-Cog4aWZK.js";
import import6 from "vike-react/__internal/integration/Loading";
import "react";
import "vike-react/usePageContext";
import "@headlessui/react";
import "../chunks/chunk-DhcPoVSR.js";
import "telefunc";
import "flexsearch";
import "@sindresorhus/slugify";
import "@markdoc/markdoc";
import "clsx";
import "@heroicons/react/24/outline";
import "prism-react-renderer";
import "js-yaml";
import "fast-glob";
import "path";
import "fs";
/* empty css                       */
/* empty css                       */
/* empty css                       */
/* empty css                       */
import "vike-react/config";
import "react-highlight-words";
import "vike/client/router";
/*! pages/index/+Page.tsx [vike:pluginModuleBanner] */
function Page() {
  return /* @__PURE__ */ jsx("main", { className: "max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16", children: /* @__PURE__ */ jsx("h1", { className: "font-bold text-3xl pb-4", children: "My Vike app" }) });
}
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
/*! virtual:vike:pageConfigValuesAll:server:/pages/index [vike:pluginModuleBanner] */
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
    definedAtData: { "filePathToShowToUser": "/pages/index/+Page.tsx", "fileExportPathToShowToUser": [] },
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
