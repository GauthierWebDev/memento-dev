import { onRenderHtml } from "vike-react/__internal/integration/onRenderHtml";
import { useData } from "vike-react/useData";
import Markdoc from "@markdoc/markdoc";
import { t as tags, n as nodes, d as docsService } from "../chunks/chunk-DhcPoVSR.js";
import React from "react";
import { readingTime } from "reading-time-estimator";
import { useConfig } from "vike-react/useConfig";
import { t as title, c as config, i as import6$1, D as DefaultLayout, a as import4 } from "../chunks/chunk-Cog4aWZK.js";
import { render } from "vike/abort";
import import6 from "vike-react/__internal/integration/Loading";
import "telefunc";
import "flexsearch";
import "@sindresorhus/slugify";
import "react/jsx-runtime";
import "vike-react/usePageContext";
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
/*! pages/docs/+Page.tsx [vike:pluginModuleBanner] */
function Page() {
  const { doc, estimatedReadingTime } = useData();
  const parsedDoc = Markdoc.parse(doc.content);
  const transformedDoc = Markdoc.transform(parsedDoc, { nodes, tags, variables: { estimatedReadingTime } });
  return Markdoc.renderers.react(transformedDoc, React);
}
const import2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Page
}, Symbol.toStringTag, { value: "Module" }));
/*! pages/buildTitle.ts [vike:pluginModuleBanner] */
function buildTitle(pageTitle) {
  if (!pageTitle) return title();
  return `${pageTitle} - ${config.title}`;
}
/*! pages/docs/+data.ts [vike:pluginModuleBanner] */
async function data(pageContext) {
  const config2 = useConfig();
  const { key } = pageContext.routeParams;
  const doc = await docsService.getDoc("docs", key);
  if (!doc) {
    throw render(404);
  }
  const readingTimeObject = readingTime(doc.content, 300, "fr");
  config2({
    title: buildTitle(doc.title),
    description: doc.description
  });
  docsService.transform(doc);
  return { doc, estimatedReadingTime: readingTimeObject.text };
}
const import3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  data
}, Symbol.toStringTag, { value: "Module" }));
/*! virtual:vike:pageConfigValuesAll:server:/pages/docs [vike:pluginModuleBanner] */
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
    definedAtData: { "filePathToShowToUser": "/pages/docs/+Page.tsx", "fileExportPathToShowToUser": [] },
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
  ["data"]: {
    type: "standard",
    definedAtData: { "filePathToShowToUser": "/pages/docs/+data.ts", "fileExportPathToShowToUser": [] },
    valueSerialized: {
      type: "plus-file",
      exportValues: import3
    }
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
