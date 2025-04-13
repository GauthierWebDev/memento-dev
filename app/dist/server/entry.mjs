import { setGlobalContext_buildEntry } from "vike/__internal";
import { setTelefuncLoaders } from "telefunc/__internal/loadBuild";
/*! pages/docs/+route.ts [vike:pluginModuleBanner] */
const routeRegex = /^\/docs\/(.*)$/;
function route(pageContext) {
  const match = pageContext.urlPathname.match(routeRegex);
  if (!match) return false;
  const [, key] = match;
  return { routeParams: { key } };
}
const import1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  route
}, Symbol.toStringTag, { value: "Module" }));
/*! virtual:vike:importUserCode:server [vike:pluginModuleBanner] */
const pageFilesLazy = {};
const pageFilesEager = {};
const pageFilesExportNamesLazy = {};
const pageFilesExportNamesEager = {};
const pageFilesList = [];
const neverLoaded = {};
const pageConfigsSerialized = [
  {
    pageId: "/pages/_error",
    isErrorPage: true,
    routeFilesystem: void 0,
    loadConfigValuesAll: () => ({ moduleId: "virtual:vike:pageConfigValuesAll:server:/pages/_error", moduleExports: import("./entries/pages_error.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/index",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/", "definedAtLocation": "/pages/index/" },
    loadConfigValuesAll: () => ({ moduleId: "virtual:vike:pageConfigValuesAll:server:/pages/index", moduleExports: import("./entries/pages_index.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  },
  {
    pageId: "/pages/docs",
    isErrorPage: void 0,
    routeFilesystem: { "routeString": "/docs", "definedAtLocation": "/pages/docs/" },
    loadConfigValuesAll: () => ({ moduleId: "virtual:vike:pageConfigValuesAll:server:/pages/docs", moduleExports: import("./entries/pages_docs.mjs") }),
    configValuesSerialized: {
      ["isClientRuntimeLoaded"]: {
        type: "computed",
        definedAtData: null,
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      },
      ["route"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "/pages/docs/+route.ts", "fileExportPathToShowToUser": [] },
        valueSerialized: {
          type: "plus-file",
          exportValues: import1
        }
      },
      ["clientRouting"]: {
        type: "standard",
        definedAtData: { "filePathToShowToUser": "vike-react/config", "fileExportPathToShowToUser": ["default", "clientRouting"] },
        valueSerialized: {
          type: "js-serialized",
          value: true
        }
      }
    }
  }
];
const pageConfigGlobalSerialized = {
  configValuesSerialized: {
    ["htmlAttributes"]: {
      type: "cumulative",
      definedAtData: [{ "filePathToShowToUser": "/pages/+config.ts", "fileExportPathToShowToUser": ["default", "htmlAttributes"] }],
      valueSerialized: [{
        type: "js-serialized",
        value: { "class": "h-full antialiased" }
      }]
    },
    ["bodyAttributes"]: {
      type: "cumulative",
      definedAtData: [{ "filePathToShowToUser": "/pages/+config.ts", "fileExportPathToShowToUser": ["default", "bodyAttributes"] }],
      valueSerialized: [{
        type: "js-serialized",
        value: { "class": "flex min-h-full bg-white dark:bg-slate-900" }
      }]
    }
  }
};
const pageFilesLazyIsomorph1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyIsomorph = { ...pageFilesLazyIsomorph1 };
pageFilesLazy[".page"] = pageFilesLazyIsomorph;
const pageFilesLazyServer1 = /* @__PURE__ */ Object.assign({});
const pageFilesLazyServer = { ...pageFilesLazyServer1 };
pageFilesLazy[".page.server"] = pageFilesLazyServer;
const pageFilesEagerRoute1 = /* @__PURE__ */ Object.assign({});
const pageFilesEagerRoute = { ...pageFilesEagerRoute1 };
pageFilesEager[".page.route"] = pageFilesEagerRoute;
const pageFilesExportNamesEagerClient1 = /* @__PURE__ */ Object.assign({});
const pageFilesExportNamesEagerClient = { ...pageFilesExportNamesEagerClient1 };
pageFilesExportNamesEager[".page.client"] = pageFilesExportNamesEagerClient;
const virtualFileExports = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  neverLoaded,
  pageConfigGlobalSerialized,
  pageConfigsSerialized,
  pageFilesEager,
  pageFilesExportNamesEager,
  pageFilesExportNamesLazy,
  pageFilesLazy,
  pageFilesList
}, Symbol.toStringTag, { value: "Module" }));
/*! node_modules/.pnpm/telefunc@0.1.87_@babel+core@7.26.10_@babel+parser@7.27.0_@babel+types@7.27.0_react-stre_779ec5fef2a5267e40fd00b9dc06fd8a/node_modules/telefunc/dist/cjs/node/vite/importGlob/telefuncFilesGlob.js [vike:pluginModuleBanner] */
const telefuncFilesGlob = /* @__PURE__ */ Object.assign({ "/components/syntax/Search.telefunc.ts": () => import("./chunks/chunk-DhcPoVSR.js").then((n) => n.S) });
const telefuncFiles = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  telefuncFilesGlob
}, Symbol.toStringTag, { value: "Module" }));
/*! virtual:@brillout/vite-plugin-server-entry:serverEntry [vike:pluginModuleBanner] */
{
  const assetsManifest = {
  "_chunk-FoQi8sq6.js": {
    "file": "assets/chunks/chunk-FoQi8sq6.js",
    "name": "renderPageClientSide",
    "dynamicImports": [
      "virtual:vike:pageConfigValuesAll:client:/pages/_error",
      "virtual:vike:pageConfigValuesAll:client:/pages/index",
      "virtual:vike:pageConfigValuesAll:client:/pages/docs"
    ]
  },
  "_chunk-YnSR0nZE.js": {
    "file": "assets/chunks/chunk-YnSR0nZE.js",
    "name": "Loading",
    "imports": [
      "_chunk-FoQi8sq6.js"
    ],
    "css": [
      "assets/static/vike-react-fe70c48a.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.HyLxvJhb.css",
      "assets/static/layouts_tailwind-00e65532.kM054_rr.css",
      "assets/static/layouts_prism-feac250c.B2a_QZIO.css",
      "assets/static/style-1efdef47.B5Troj4Q.css"
    ],
    "assets": [
      "assets/static/blur-indigo.Cbr0CUfr.png",
      "assets/static/blur-cyan.DJww6-ho.png",
      "assets/static/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2",
      "assets/static/inter-cyrillic-wght-normal.CMZtQduZ.woff2",
      "assets/static/inter-greek-ext-wght-normal.CGAr0uHJ.woff2",
      "assets/static/inter-greek-wght-normal.CaVNZxsx.woff2",
      "assets/static/inter-vietnamese-wght-normal.CBcvBZtf.woff2",
      "assets/static/inter-latin-ext-wght-normal.CFHvXkgd.woff2",
      "assets/static/inter-latin-wght-normal.C2S99t-D.woff2",
      "assets/static/lexend-vietnamese-wght-normal.RvljkFvg.woff2",
      "assets/static/lexend-latin-ext-wght-normal.Ca5OILQq.woff2",
      "assets/static/lexend-latin-wght-normal.ga3u8m5q.woff2"
    ]
  },
  "_layouts_prism-feac250c.B2a_QZIO.css": {
    "file": "assets/static/layouts_prism-feac250c.B2a_QZIO.css",
    "src": "_layouts_prism-feac250c.B2a_QZIO.css"
  },
  "_layouts_style-b34a8e57.HyLxvJhb.css": {
    "file": "assets/static/layouts_style-b34a8e57.HyLxvJhb.css",
    "src": "_layouts_style-b34a8e57.HyLxvJhb.css"
  },
  "_layouts_tailwind-00e65532.kM054_rr.css": {
    "file": "assets/static/layouts_tailwind-00e65532.kM054_rr.css",
    "src": "_layouts_tailwind-00e65532.kM054_rr.css"
  },
  "_style-1efdef47.B5Troj4Q.css": {
    "file": "assets/static/style-1efdef47.B5Troj4Q.css",
    "src": "_style-1efdef47.B5Troj4Q.css"
  },
  "_vike-react-fe70c48a.BcWtY8Ol.css": {
    "file": "assets/static/vike-react-fe70c48a.BcWtY8Ol.css",
    "src": "_vike-react-fe70c48a.BcWtY8Ol.css"
  },
  "images/blur-cyan.png": {
    "file": "assets/static/blur-cyan.DJww6-ho.png",
    "src": "images/blur-cyan.png"
  },
  "images/blur-indigo.png": {
    "file": "assets/static/blur-indigo.Cbr0CUfr.png",
    "src": "images/blur-indigo.png"
  },
  "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-cyrillic-ext-wght-normal.woff2": {
    "file": "assets/static/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2",
    "src": "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-cyrillic-ext-wght-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-cyrillic-wght-normal.woff2": {
    "file": "assets/static/inter-cyrillic-wght-normal.CMZtQduZ.woff2",
    "src": "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-cyrillic-wght-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-greek-ext-wght-normal.woff2": {
    "file": "assets/static/inter-greek-ext-wght-normal.CGAr0uHJ.woff2",
    "src": "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-greek-ext-wght-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-greek-wght-normal.woff2": {
    "file": "assets/static/inter-greek-wght-normal.CaVNZxsx.woff2",
    "src": "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-greek-wght-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2": {
    "file": "assets/static/inter-latin-ext-wght-normal.CFHvXkgd.woff2",
    "src": "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-latin-ext-wght-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2": {
    "file": "assets/static/inter-latin-wght-normal.C2S99t-D.woff2",
    "src": "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-vietnamese-wght-normal.woff2": {
    "file": "assets/static/inter-vietnamese-wght-normal.CBcvBZtf.woff2",
    "src": "node_modules/.pnpm/@fontsource-variable+inter@5.2.5/node_modules/@fontsource-variable/inter/files/inter-vietnamese-wght-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource-variable+lexend@5.2.6/node_modules/@fontsource-variable/lexend/files/lexend-latin-ext-wght-normal.woff2": {
    "file": "assets/static/lexend-latin-ext-wght-normal.Ca5OILQq.woff2",
    "src": "node_modules/.pnpm/@fontsource-variable+lexend@5.2.6/node_modules/@fontsource-variable/lexend/files/lexend-latin-ext-wght-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource-variable+lexend@5.2.6/node_modules/@fontsource-variable/lexend/files/lexend-latin-wght-normal.woff2": {
    "file": "assets/static/lexend-latin-wght-normal.ga3u8m5q.woff2",
    "src": "node_modules/.pnpm/@fontsource-variable+lexend@5.2.6/node_modules/@fontsource-variable/lexend/files/lexend-latin-wght-normal.woff2"
  },
  "node_modules/.pnpm/@fontsource-variable+lexend@5.2.6/node_modules/@fontsource-variable/lexend/files/lexend-vietnamese-wght-normal.woff2": {
    "file": "assets/static/lexend-vietnamese-wght-normal.RvljkFvg.woff2",
    "src": "node_modules/.pnpm/@fontsource-variable+lexend@5.2.6/node_modules/@fontsource-variable/lexend/files/lexend-vietnamese-wght-normal.woff2"
  },
  "node_modules/.pnpm/vike@0.4.228_react-streaming@0.3.50_react-dom@19.1.0_react@19.1.0__react@19.1.0__vite@6_a5d8557c8c03851ef9ff4b1fc2b0d591/node_modules/vike/dist/esm/client/client-routing-runtime/entry.js": {
    "file": "assets/entries/entry-client-routing.Bc4tBJ4_.js",
    "name": "entries/entry-client-routing",
    "src": "node_modules/.pnpm/vike@0.4.228_react-streaming@0.3.50_react-dom@19.1.0_react@19.1.0__react@19.1.0__vite@6_a5d8557c8c03851ef9ff4b1fc2b0d591/node_modules/vike/dist/esm/client/client-routing-runtime/entry.js",
    "isEntry": true,
    "imports": [
      "_chunk-FoQi8sq6.js"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/_error": {
    "file": "assets/entries/pages_error.DlwLYWej.js",
    "name": "entries/pages/_error",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/_error",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-YnSR0nZE.js",
      "_chunk-FoQi8sq6.js"
    ],
    "css": [
      "assets/static/vike-react-fe70c48a.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.HyLxvJhb.css",
      "assets/static/layouts_tailwind-00e65532.kM054_rr.css",
      "assets/static/layouts_prism-feac250c.B2a_QZIO.css",
      "assets/static/style-1efdef47.B5Troj4Q.css"
    ],
    "assets": [
      "assets/static/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2",
      "assets/static/inter-cyrillic-wght-normal.CMZtQduZ.woff2",
      "assets/static/inter-greek-ext-wght-normal.CGAr0uHJ.woff2",
      "assets/static/inter-greek-wght-normal.CaVNZxsx.woff2",
      "assets/static/inter-vietnamese-wght-normal.CBcvBZtf.woff2",
      "assets/static/inter-latin-ext-wght-normal.CFHvXkgd.woff2",
      "assets/static/inter-latin-wght-normal.C2S99t-D.woff2",
      "assets/static/lexend-vietnamese-wght-normal.RvljkFvg.woff2",
      "assets/static/lexend-latin-ext-wght-normal.Ca5OILQq.woff2",
      "assets/static/lexend-latin-wght-normal.ga3u8m5q.woff2"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/docs": {
    "file": "assets/entries/pages_docs.Gi7h7KmT.js",
    "name": "entries/pages/docs",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/docs",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-YnSR0nZE.js",
      "_chunk-FoQi8sq6.js"
    ],
    "css": [
      "assets/static/vike-react-fe70c48a.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.HyLxvJhb.css",
      "assets/static/layouts_tailwind-00e65532.kM054_rr.css",
      "assets/static/layouts_prism-feac250c.B2a_QZIO.css",
      "assets/static/style-1efdef47.B5Troj4Q.css"
    ],
    "assets": [
      "assets/static/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2",
      "assets/static/inter-cyrillic-wght-normal.CMZtQduZ.woff2",
      "assets/static/inter-greek-ext-wght-normal.CGAr0uHJ.woff2",
      "assets/static/inter-greek-wght-normal.CaVNZxsx.woff2",
      "assets/static/inter-vietnamese-wght-normal.CBcvBZtf.woff2",
      "assets/static/inter-latin-ext-wght-normal.CFHvXkgd.woff2",
      "assets/static/inter-latin-wght-normal.C2S99t-D.woff2",
      "assets/static/lexend-vietnamese-wght-normal.RvljkFvg.woff2",
      "assets/static/lexend-latin-ext-wght-normal.Ca5OILQq.woff2",
      "assets/static/lexend-latin-wght-normal.ga3u8m5q.woff2"
    ]
  },
  "virtual:vike:pageConfigValuesAll:client:/pages/index": {
    "file": "assets/entries/pages_index.Bb824t1n.js",
    "name": "entries/pages/index",
    "src": "virtual:vike:pageConfigValuesAll:client:/pages/index",
    "isEntry": true,
    "isDynamicEntry": true,
    "imports": [
      "_chunk-YnSR0nZE.js",
      "_chunk-FoQi8sq6.js"
    ],
    "css": [
      "assets/static/vike-react-fe70c48a.BcWtY8Ol.css",
      "assets/static/layouts_style-b34a8e57.HyLxvJhb.css",
      "assets/static/layouts_tailwind-00e65532.kM054_rr.css",
      "assets/static/layouts_prism-feac250c.B2a_QZIO.css",
      "assets/static/style-1efdef47.B5Troj4Q.css"
    ],
    "assets": [
      "assets/static/inter-cyrillic-ext-wght-normal.B2xhLi22.woff2",
      "assets/static/inter-cyrillic-wght-normal.CMZtQduZ.woff2",
      "assets/static/inter-greek-ext-wght-normal.CGAr0uHJ.woff2",
      "assets/static/inter-greek-wght-normal.CaVNZxsx.woff2",
      "assets/static/inter-vietnamese-wght-normal.CBcvBZtf.woff2",
      "assets/static/inter-latin-ext-wght-normal.CFHvXkgd.woff2",
      "assets/static/inter-latin-wght-normal.C2S99t-D.woff2",
      "assets/static/lexend-vietnamese-wght-normal.RvljkFvg.woff2",
      "assets/static/lexend-latin-ext-wght-normal.Ca5OILQq.woff2",
      "assets/static/lexend-latin-wght-normal.ga3u8m5q.woff2"
    ]
  }
};
  const buildInfo = {
    "versionAtBuildTime": "0.4.228",
    "usesClientRouter": false,
    "viteConfigRuntime": {
      "root": "/app",
      "build": {
        "outDir": "/app/dist/"
      },
      "_baseViteOriginal": "/__UNSET__",
      "vitePluginServerEntry": {}
    }
  };
  setGlobalContext_buildEntry({
    virtualFileExports,
    assetsManifest,
    buildInfo
  });
}
setTelefuncLoaders({
  loadTelefuncFiles: () => telefuncFiles,
  loadManifest: () => ({
    "version": "0.1.87",
    "config": {}
  })
});
