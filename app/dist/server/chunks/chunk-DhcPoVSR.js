import { __decorateTelefunction, shield } from "telefunc";
import FlexSearch from "flexsearch";
import { slugifyWithCounter } from "@sindresorhus/slugify";
import Markdoc from "@markdoc/markdoc";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { createContext, useContext, useState, useCallback, useEffect, useMemo, Fragment as Fragment$1, useId } from "react";
import { usePageContext } from "vike-react/usePageContext";
import clsx from "clsx";
import { ClockIcon } from "@heroicons/react/24/outline";
import { themes, Highlight } from "prism-react-renderer";
import yaml from "js-yaml";
import glob from "fast-glob";
import path from "path";
import fs from "fs";
/*! components/common/Link.tsx [vike:pluginModuleBanner] */
function Link(props) {
  const { urlPathname } = usePageContext();
  const isActive = props.href === "/" ? urlPathname === props.href : urlPathname.startsWith(props.href);
  return /* @__PURE__ */ jsx("a", { ...props, href: props.href, className: clsx(isActive && "is-active", props.className), children: props.children });
}
/*! lib/navigation.ts [vike:pluginModuleBanner] */
const navigation = [
  {
    title: "React",
    links: [
      { title: "Introduction", href: "/docs/react" },
      { title: "Initialisation", href: "/docs/react/initialisation" },
      { title: "Syntaxe JSX", href: "/docs/react/jsx" },
      { title: "Premier composant", href: "/docs/react/premier-composant" },
      { title: "State et cycle de vie", href: "/docs/react/state-et-cycle-de-vie" },
      { title: "Hooks", href: "/docs/react/hooks" },
      { title: "Le hook useContext", href: "/docs/react/usecontext" },
      { title: "Le hook useReducer", href: "/docs/react/usereducer" }
    ]
  },
  {
    title: "Merise",
    links: [
      { title: "Introduction", href: "/docs/merise" },
      { title: "Dictionnaire de données", href: "/docs/merise/dictionnaire-de-donnees" },
      { title: "Modèle Conceptuel de Données", href: "/docs/merise/modele-conceptuel-de-donnees" }
    ]
  }
];
/*! contexts/ThemeContext.ts [vike:pluginModuleBanner] */
const ThemeContext = createContext({
  theme: "light",
  setTheme: () => {
  }
});
/*! hooks/useTheme.ts [vike:pluginModuleBanner] */
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
/*! services/FlexSearchService.ts [vike:pluginModuleBanner] */
function buildFlexSearch(data) {
  const sectionIndex = new FlexSearch.Document({
    tokenize: "full",
    document: {
      id: "url",
      index: "content",
      store: ["title", "pageTitle"]
    },
    context: {
      resolution: 9,
      depth: 2,
      bidirectional: true
    }
  });
  for (const { key, sections } of data) {
    for (const [title, hash, content] of sections) {
      sectionIndex.add({
        url: key + (hash ? `#${hash}` : ""),
        title,
        content: [title, ...content].join("\n"),
        pageTitle: hash ? sections[0][0] : void 0
      });
    }
  }
  return function search(query) {
    const result = sectionIndex.search(query, 5, {
      enrich: true
    });
    if (result.length === 0) return [];
    return result[0].result.map((rawItem) => {
      const item = rawItem;
      return {
        url: item.id,
        title: item.doc.title,
        pageTitle: item.doc.pageTitle
      };
    });
  };
}
/*! components/syntax/TableOfContents.tsx [vike:pluginModuleBanner] */
function TableOfContents({ tableOfContents }) {
  let [currentSection, setCurrentSection] = useState(tableOfContents[0]?.id);
  let getHeadings = useCallback((tableOfContents2) => {
    return tableOfContents2.flatMap((node) => [node.id, ...node.children.map((child) => child.id)]).map((id) => {
      let el = document.getElementById(id);
      if (!el) return null;
      let style = window.getComputedStyle(el);
      let scrollMt = parseFloat(style.scrollMarginTop);
      let top = window.scrollY + el.getBoundingClientRect().top - scrollMt;
      return { id, top };
    }).filter((x) => x !== null);
  }, []);
  useEffect(() => {
    if (tableOfContents.length === 0) return;
    const headings = getHeadings(tableOfContents);
    function onScroll() {
      const top = window.scrollY;
      let current = headings[0]?.id;
      for (const heading of headings) {
        if (top >= heading.top - 10) {
          current = heading.id;
        } else {
          break;
        }
      }
      setCurrentSection(current);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [getHeadings, tableOfContents]);
  function isActive(section) {
    if (section.id === currentSection) {
      return true;
    }
    if (!section.children) {
      return false;
    }
    return section.children.findIndex(isActive) > -1;
  }
  return /* @__PURE__ */ jsx("div", { className: "hidden xl:sticky xl:top-[4.75rem] xl:-mr-6 xl:block xl:h-[calc(100vh-4.75rem)] xl:flex-none xl:overflow-y-auto xl:py-16 xl:pr-6", children: /* @__PURE__ */ jsx("nav", { "aria-labelledby": "on-this-page-title", className: "w-56", children: tableOfContents.length > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h2", { id: "on-this-page-title", className: "font-display text-sm font-medium text-slate-900 dark:text-white", children: "Table des matières" }),
    /* @__PURE__ */ jsx("ol", { role: "list", className: "mt-4 space-y-3 text-sm", children: tableOfContents.map((section) => /* @__PURE__ */ jsxs("li", { children: [
      /* @__PURE__ */ jsx("h3", { children: /* @__PURE__ */ jsx(
        Link,
        {
          href: `#${section.id}`,
          className: clsx(
            isActive(section) ? "text-violet-500" : "font-normal text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300"
          ),
          children: section.title
        }
      ) }),
      section.children.length > 0 && /* @__PURE__ */ jsx("ol", { role: "list", className: "mt-2 space-y-3 pl-5 text-slate-500 dark:text-slate-400", children: section.children.map((subSection) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
        Link,
        {
          href: `#${subSection.id}`,
          className: isActive(subSection) ? "text-violet-500" : "hover:text-slate-600 dark:hover:text-slate-300",
          children: subSection.title
        }
      ) }, subSection.id)) })
    ] }, section.id)) })
  ] }) }) });
}
/*! components/syntax/PrevNextLinks.tsx [vike:pluginModuleBanner] */
function ArrowIcon(props) {
  return /* @__PURE__ */ jsx("svg", { viewBox: "0 0 16 16", "aria-hidden": "true", ...props, children: /* @__PURE__ */ jsx("path", { d: "m9.182 13.423-1.17-1.16 3.505-3.505H3V7.065h8.517l-3.506-3.5L9.181 2.4l5.512 5.511-5.511 5.512Z" }) });
}
function PageLink({
  title,
  href,
  dir = "next",
  ...props
}) {
  return /* @__PURE__ */ jsxs("div", { ...props, children: [
    /* @__PURE__ */ jsx("dt", { className: "font-display text-sm font-medium text-slate-900 dark:text-white", children: dir === "next" ? "Suivant" : "Précédent" }),
    /* @__PURE__ */ jsx("dd", { className: "mt-1", children: /* @__PURE__ */ jsxs(
      Link,
      {
        href,
        className: clsx(
          "flex items-center gap-x-1 text-base font-semibold text-slate-500 hover:text-slate-600 dark:text-slate-400 dark:hover:text-slate-300",
          dir === "previous" && "flex-row-reverse"
        ),
        children: [
          title,
          /* @__PURE__ */ jsx(ArrowIcon, { className: clsx("h-4 w-4 flex-none fill-current", dir === "previous" && "-scale-x-100") })
        ]
      }
    ) })
  ] });
}
function PrevNextLinks() {
  let { urlPathname } = usePageContext();
  let allLinks = navigation.flatMap((section) => section.links);
  let linkIndex = allLinks.findIndex((link) => link.href === urlPathname);
  let previousPage = linkIndex > -1 ? allLinks[linkIndex - 1] : null;
  let nextPage = linkIndex > -1 ? allLinks[linkIndex + 1] : null;
  if (!nextPage && !previousPage) {
    return null;
  }
  return /* @__PURE__ */ jsxs("dl", { className: "mt-12 flex border-t border-slate-200 pt-6 dark:border-slate-800", children: [
    previousPage && /* @__PURE__ */ jsx(PageLink, { dir: "previous", ...previousPage }),
    nextPage && /* @__PURE__ */ jsx(PageLink, { className: "ml-auto text-right", ...nextPage })
  ] });
}
/*! lib/sections.ts [vike:pluginModuleBanner] */
function isHeadingNode(node) {
  return node.type === "heading" && [1, 2, 3, 4, 5, 6].includes(node.attributes.level) && (typeof node.attributes.id === "string" || typeof node.attributes.id === "undefined");
}
function isH2Node(node) {
  return isHeadingNode(node) && node.attributes.level === 2;
}
function isH3Node(node) {
  return isHeadingNode(node) && node.attributes.level === 3;
}
function getNodeText(node) {
  let text = "";
  for (let child of node.children ?? []) {
    if (child.type === "text") {
      text += child.attributes.content;
    }
    text += getNodeText(child);
  }
  return text;
}
function collectSections(nodes2, slugify = slugifyWithCounter()) {
  const sections = [];
  for (const node of nodes2) {
    if (isH2Node(node) || isH3Node(node)) {
      const title = getNodeText(node);
      if (title) {
        const id = slugify(title);
        if (isH3Node(node)) {
          if (!sections[sections.length - 1]) {
            throw new Error("Cannot add `h3` to table of contents without a preceding `h2`");
          }
          sections[sections.length - 1].children.push({
            ...node.attributes,
            id,
            title
          });
        } else {
          sections.push({ ...node.attributes, id, title, children: [] });
        }
      }
    }
    sections.push(...collectSections(node.children ?? [], slugify));
  }
  return sections;
}
/*! components/syntax/DocsHeader.tsx [vike:pluginModuleBanner] */
function DocsHeader(props) {
  const { urlPathname } = usePageContext();
  const section = navigation.find((section2) => section2.links.find((link) => link.href === urlPathname));
  if (!props.title && !section) {
    return null;
  }
  return /* @__PURE__ */ jsxs("header", { className: "mb-9 space-y-1", children: [
    section && /* @__PURE__ */ jsx("p", { className: "font-display text-sm font-medium text-violet-500", children: section.title }),
    props.title && /* @__PURE__ */ jsx("h1", { className: "font-display text-3xl tracking-tight text-slate-900 dark:text-white", children: props.title }),
    props.estimatedReadingTime && /* @__PURE__ */ jsxs("p", { className: "text-sm text-slate-500 dark:text-slate-400 inline-flex items-center gap-1", children: [
      /* @__PURE__ */ jsx(ClockIcon, { className: "w-4" }),
      " ",
      props.estimatedReadingTime
    ] })
  ] });
}
/*! components/syntax/Prose.tsx [vike:pluginModuleBanner] */
function Prose({
  as,
  className,
  ...props
}) {
  let Component = as ?? "div";
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: clsx(
        className,
        "prose max-w-none prose-slate dark:text-slate-400 dark:prose-invert",
        // headings
        "prose-headings:scroll-mt-28 prose-headings:font-display prose-headings:font-normal lg:prose-headings:scroll-mt-[8.5rem]",
        // lead
        "prose-lead:text-slate-500 dark:prose-lead:text-slate-400",
        // links
        "prose-a:font-semibold dark:prose-a:text-violet-400",
        // link underline
        "dark:[--tw-prose-background:var(--color-slate-900)] prose-a:no-underline prose-a:shadow-[inset_0_-2px_0_0_var(--tw-prose-background,#fff),inset_0_calc(-1*(var(--tw-prose-underline-size,4px)+2px))_0_0_var(--tw-prose-underline,var(--color-violet-300))] prose-a:hover:[--tw-prose-underline-size:6px] dark:prose-a:shadow-[inset_0_calc(-1*var(--tw-prose-underline-size,2px))_0_0_var(--tw-prose-underline,var(--color-violet-800))] dark:prose-a:hover:[--tw-prose-underline-size:6px]",
        // pre
        "prose-pre:rounded-xl prose-pre:bg-slate-900 prose-pre:shadow-lg dark:prose-pre:bg-slate-800/60 dark:prose-pre:ring-1 dark:prose-pre:shadow-none dark:prose-pre:ring-slate-300/10",
        // hr
        "dark:prose-hr:border-slate-800"
      ),
      ...props
    }
  );
}
/*! components/syntax/DocsLayout.tsx [vike:pluginModuleBanner] */
function DocsLayout({
  children,
  frontmatter: { title },
  estimatedReadingTime,
  nodes: nodes2
}) {
  let tableOfContents = collectSections(nodes2);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("div", { className: "max-w-2xl min-w-0 flex-auto px-4 py-16 lg:max-w-none lg:pr-0 lg:pl-8 xl:px-16", children: [
      /* @__PURE__ */ jsxs("article", { children: [
        /* @__PURE__ */ jsx(DocsHeader, { title, estimatedReadingTime }),
        /* @__PURE__ */ jsx(Prose, { children })
      ] }),
      /* @__PURE__ */ jsx(PrevNextLinks, {})
    ] }),
    /* @__PURE__ */ jsx(TableOfContents, { tableOfContents })
  ] });
}
/*! data/themes/prism.ts [vike:pluginModuleBanner] */
const prismThemes = {
  dark: themes.oneDark,
  light: themes.oneLight
};
/*! components/syntax/Fence.tsx [vike:pluginModuleBanner] */
function Fence({ children, language }) {
  const { theme } = useTheme();
  const prismTheme = useMemo(() => {
    return prismThemes[theme];
  }, [theme]);
  return /* @__PURE__ */ jsx(Highlight, { code: children.trimEnd(), language, theme: prismTheme, children: ({ className, style, tokens, getTokenProps }) => /* @__PURE__ */ jsx("pre", { className, style, children: /* @__PURE__ */ jsx("code", { children: tokens.map((line, lineIndex) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
    line.filter((token) => !token.empty).map((token, tokenIndex) => /* @__PURE__ */ jsx("span", { ...getTokenProps({ token }) }, tokenIndex)),
    "\n"
  ] }, lineIndex)) }) }) });
}
/*! markdoc/nodes.tsx [vike:pluginModuleBanner] */
const { nodes: defaultNodes, Tag } = Markdoc;
let documentSlugifyMap = /* @__PURE__ */ new Map();
const nodes = {
  document: {
    ...defaultNodes.document,
    render: DocsLayout,
    transform(node, config) {
      documentSlugifyMap.set(config, slugifyWithCounter());
      return new Tag(
        this.render,
        {
          frontmatter: yaml.load(node.attributes.frontmatter),
          estimatedReadingTime: config?.variables?.estimatedReadingTime,
          nodes: node.children
        },
        node.transformChildren(config)
      );
    }
  },
  heading: {
    ...defaultNodes.heading,
    transform(node, config) {
      const slugify = documentSlugifyMap.get(config);
      const attributes = node.transformAttributes(config);
      const children = node.transformChildren(config);
      const text = children.filter((child) => typeof child === "string").join(" ");
      const id = attributes.id ?? slugify(text);
      return new Tag(`h${node.attributes.level}`, { ...attributes, id }, children);
    }
  },
  strong: {
    ...defaultNodes.strong,
    attributes: {
      ...defaultNodes.strong.attributes,
      class: {
        type: String,
        default: "font-semibold text-slate-800 dark:text-slate-200"
      }
    }
  },
  th: {
    ...defaultNodes.th,
    attributes: {
      ...defaultNodes.th.attributes,
      scope: {
        type: String,
        default: "col"
      }
    }
  },
  fence: {
    render: Fence,
    attributes: {
      language: {
        type: String
      }
    }
  }
};
/*! components/syntax/icons/InstallationIcon.tsx [vike:pluginModuleBanner] */
function InstallationIcon({
  id,
  color
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient`, color, gradientTransform: "matrix(0 21 -21 0 12 3)" }),
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient-dark`, color, gradientTransform: "matrix(0 21 -21 0 16 7)" })
    ] }),
    /* @__PURE__ */ jsxs(LightMode, { children: [
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 12, r: 12, fill: `url(#${id}-gradient)` }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m8 8 9 21 2-10 10-2L8 8Z",
          fillOpacity: 0.5,
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(DarkMode, { children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "m4 4 10.286 24 2.285-11.429L28 14.286 4 4Z",
        fill: `url(#${id}-gradient-dark)`,
        stroke: `url(#${id}-gradient-dark)`,
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
      }
    ) })
  ] });
}
/*! components/syntax/icons/LightbulbIcon.tsx [vike:pluginModuleBanner] */
function LightbulbIcon({ id, color }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient`, color, gradientTransform: "matrix(0 21 -21 0 20 11)" }),
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient-dark`, color, gradientTransform: "matrix(0 24.5001 -19.2498 0 16 5.5)" })
    ] }),
    /* @__PURE__ */ jsxs(LightMode, { children: [
      /* @__PURE__ */ jsx("circle", { cx: 20, cy: 20, r: 12, fill: `url(#${id}-gradient)` }),
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M20 24.995c0-1.855 1.094-3.501 2.427-4.792C24.61 18.087 26 15.07 26 12.231 26 7.133 21.523 3 16 3S6 7.133 6 12.23c0 2.84 1.389 5.857 3.573 7.973C10.906 21.494 12 23.14 12 24.995V27a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-2.005Z",
          className: "fill-[var(--icon-background)]",
          fillOpacity: 0.5
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M25 12.23c0 2.536-1.254 5.303-3.269 7.255l1.391 1.436c2.354-2.28 3.878-5.547 3.878-8.69h-2ZM16 4c5.047 0 9 3.759 9 8.23h2C27 6.508 21.998 2 16 2v2Zm-9 8.23C7 7.76 10.953 4 16 4V2C10.002 2 5 6.507 5 12.23h2Zm3.269 7.255C8.254 17.533 7 14.766 7 12.23H5c0 3.143 1.523 6.41 3.877 8.69l1.392-1.436ZM13 27v-2.005h-2V27h2Zm1 1a1 1 0 0 1-1-1h-2a3 3 0 0 0 3 3v-2Zm4 0h-4v2h4v-2Zm1-1a1 1 0 0 1-1 1v2a3 3 0 0 0 3-3h-2Zm0-2.005V27h2v-2.005h-2ZM8.877 20.921C10.132 22.136 11 23.538 11 24.995h2c0-2.253-1.32-4.143-2.731-5.51L8.877 20.92Zm12.854-1.436C20.32 20.852 19 22.742 19 24.995h2c0-1.457.869-2.859 2.122-4.074l-1.391-1.436Z",
          className: "fill-[var(--icon-foreground)]"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M20 26a1 1 0 1 0 0-2v2Zm-8-2a1 1 0 1 0 0 2v-2Zm2 0h-2v2h2v-2Zm1 1V13.5h-2V25h2Zm-5-11.5v1h2v-1h-2Zm3.5 4.5h5v-2h-5v2Zm8.5-3.5v-1h-2v1h2ZM20 24h-2v2h2v-2Zm-2 0h-4v2h4v-2Zm-1-10.5V25h2V13.5h-2Zm2.5-2.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2ZM18.5 18a3.5 3.5 0 0 0 3.5-3.5h-2a1.5 1.5 0 0 1-1.5 1.5v2ZM10 14.5a3.5 3.5 0 0 0 3.5 3.5v-2a1.5 1.5 0 0 1-1.5-1.5h-2Zm2.5-3.5a2.5 2.5 0 0 0-2.5 2.5h2a.5.5 0 0 1 .5-.5v-2Zm2.5 2.5a2.5 2.5 0 0 0-2.5-2.5v2a.5.5 0 0 1 .5.5h2Z",
          className: "fill-[var(--icon-foreground)]"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(DarkMode, { children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16 2C10.002 2 5 6.507 5 12.23c0 3.144 1.523 6.411 3.877 8.691.75.727 1.363 1.52 1.734 2.353.185.415.574.726 1.028.726H12a1 1 0 0 0 1-1v-4.5a.5.5 0 0 0-.5-.5A3.5 3.5 0 0 1 9 14.5V14a3 3 0 1 1 6 0v9a1 1 0 1 0 2 0v-9a3 3 0 1 1 6 0v.5a3.5 3.5 0 0 1-3.5 3.5.5.5 0 0 0-.5.5V23a1 1 0 0 0 1 1h.36c.455 0 .844-.311 1.03-.726.37-.833.982-1.626 1.732-2.353 2.354-2.28 3.878-5.547 3.878-8.69C27 6.507 21.998 2 16 2Zm5 25a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1 3 3 0 0 0 3 3h4a3 3 0 0 0 3-3Zm-8-13v1.5a.5.5 0 0 1-.5.5 1.5 1.5 0 0 1-1.5-1.5V14a1 1 0 1 1 2 0Zm6.5 2a.5.5 0 0 1-.5-.5V14a1 1 0 1 1 2 0v.5a1.5 1.5 0 0 1-1.5 1.5Z",
        fill: `url(#${id}-gradient-dark)`
      }
    ) })
  ] });
}
/*! components/syntax/icons/QuestionIcon.tsx [vike:pluginModuleBanner] */
function QuestionIcon({ id, color }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient`, color, gradientTransform: "rotate(65.924 1.519 20.92) scale(25.7391)" }),
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient-dark`, color, gradientTransform: "matrix(0 24.5 -24.5 0 16 5.5)" })
    ] }),
    /* @__PURE__ */ jsxs(LightMode, { children: [
      /* @__PURE__ */ jsx("circle", { cx: 20, cy: 20, r: 12, fill: `url(#${id}-gradient)` }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3 3 8.82 3 16Z",
          fillOpacity: 0.5,
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m 16.39 14.617 l 1.179 -3.999 C 17.38 9.304 16.133 9.127 15.469 10.645 C 15.306 11.269 14.71 11.12 14.71 10.537 a 1.66 1.66 5 1 1 3.808 0.217 l -1.5182 5.4314 a 0.602 0.602 5 0 1 -1.1795 -0.1032 Z",
          className: "fill-[var(--icon-foreground)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M16 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          fillOpacity: 0.5,
          stroke: "currentColor",
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(DarkMode, { children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Zm11.386-4.85a2.66 2.66 0 1 1 5.228 0l-1.039 5.543a1.602 1.602 0 0 1-3.15 0l-1.04-5.543ZM16 20a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
        fill: `url(#${id}-gradient-dark)`
      }
    ) })
  ] });
}
/*! components/syntax/icons/PluginsIcon.tsx [vike:pluginModuleBanner] */
function PluginsIcon({ id, color }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient`, color, gradientTransform: "matrix(0 21 -21 0 20 11)" }),
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient-dark-1`, color, gradientTransform: "matrix(0 22.75 -22.75 0 16 6.25)" }),
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient-dark-2`, color, gradientTransform: "matrix(0 14 -14 0 16 10)" })
    ] }),
    /* @__PURE__ */ jsxs(LightMode, { children: [
      /* @__PURE__ */ jsx("circle", { cx: 20, cy: 20, r: 12, fill: `url(#${id}-gradient)` }),
      /* @__PURE__ */ jsxs(
        "g",
        {
          fillOpacity: 0.5,
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ jsx("path", { d: "M3 9v14l12 6V15L3 9Z" }),
            /* @__PURE__ */ jsx("path", { d: "M27 9v14l-12 6V15l12-6Z" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("path", { d: "M11 4h8v2l6 3-10 6L5 9l6-3V4Z", fillOpacity: 0.5, className: "fill-[var(--icon-background)]" }),
      /* @__PURE__ */ jsxs(
        "g",
        {
          className: "stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ jsx("path", { d: "M20 5.5 27 9l-12 6L3 9l7-3.5" }),
            /* @__PURE__ */ jsx("path", { d: "M20 5c0 1.105-2.239 2-5 2s-5-.895-5-2m10 0c0-1.105-2.239-2-5-2s-5 .895-5 2m10 0v3c0 1.105-2.239 2-5 2s-5-.895-5-2V5" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(DarkMode, { strokeWidth: 2, strokeLinecap: "round", strokeLinejoin: "round", children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M17.676 3.38a3.887 3.887 0 0 0-3.352 0l-9 4.288C3.907 8.342 3 9.806 3 11.416v9.168c0 1.61.907 3.073 2.324 3.748l9 4.288a3.887 3.887 0 0 0 3.352 0l9-4.288C28.093 23.657 29 22.194 29 20.584v-9.168c0-1.61-.907-3.074-2.324-3.748l-9-4.288Z",
          stroke: `url(#${id}-gradient-dark-1)`
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M16.406 8.087a.989.989 0 0 0-.812 0l-7 3.598A1.012 1.012 0 0 0 8 12.61v6.78c0 .4.233.762.594.925l7 3.598a.989.989 0 0 0 .812 0l7-3.598c.361-.163.594-.525.594-.925v-6.78c0-.4-.233-.762-.594-.925l-7-3.598Z",
          fill: `url(#${id}-gradient-dark-2)`,
          stroke: `url(#${id}-gradient-dark-2)`
        }
      )
    ] })
  ] });
}
/*! components/syntax/icons/PresetsIcon.tsx [vike:pluginModuleBanner] */
function PresetsIcon({ id, color }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient`, color, gradientTransform: "matrix(0 21 -21 0 20 3)" }),
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient-dark`, color, gradientTransform: "matrix(0 22.75 -22.75 0 16 6.25)" })
    ] }),
    /* @__PURE__ */ jsxs(LightMode, { children: [
      /* @__PURE__ */ jsx("circle", { cx: 20, cy: 12, r: 12, fill: `url(#${id}-gradient)` }),
      /* @__PURE__ */ jsxs(
        "g",
        {
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          fillOpacity: 0.5,
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          children: [
            /* @__PURE__ */ jsx("path", { d: "M3 5v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" }),
            /* @__PURE__ */ jsx("path", { d: "M18 17v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V17a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z" }),
            /* @__PURE__ */ jsx("path", { d: "M18 5v4a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-7a2 2 0 0 0-2 2Z" }),
            /* @__PURE__ */ jsx("path", { d: "M3 25v2a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2Z" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(DarkMode, { fill: `url(#${id}-gradient-dark)`, children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          fillRule: "evenodd",
          clipRule: "evenodd",
          d: "M3 17V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm16 10v-9a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2Zm0-23v5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1ZM3 28v-3a1 1 0 0 1 1-1h9a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"
        }
      ),
      /* @__PURE__ */ jsx("path", { d: "M2 4v13h2V4H2Zm2-2a2 2 0 0 0-2 2h2V2Zm8 0H4v2h8V2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 13V4h-2v13h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-8 0h8v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Zm16 1v9h2v-9h-2Zm3-3a3 3 0 0 0-3 3h2a1 1 0 0 1 1-1v-2Zm6 0h-6v2h6v-2Zm3 3a3 3 0 0 0-3-3v2a1 1 0 0 1 1 1h2Zm0 9v-9h-2v9h2Zm-3 3a3 3 0 0 0 3-3h-2a1 1 0 0 1-1 1v2Zm-6 0h6v-2h-6v2Zm-3-3a3 3 0 0 0 3 3v-2a1 1 0 0 1-1-1h-2Zm2-18V4h-2v5h2Zm0 0h-2a2 2 0 0 0 2 2V9Zm8 0h-8v2h8V9Zm0 0v2a2 2 0 0 0 2-2h-2Zm0-5v5h2V4h-2Zm0 0h2a2 2 0 0 0-2-2v2Zm-8 0h8V2h-8v2Zm0 0V2a2 2 0 0 0-2 2h2ZM2 25v3h2v-3H2Zm2-2a2 2 0 0 0-2 2h2v-2Zm9 0H4v2h9v-2Zm2 2a2 2 0 0 0-2-2v2h2Zm0 3v-3h-2v3h2Zm-2 2a2 2 0 0 0 2-2h-2v2Zm-9 0h9v-2H4v2Zm-2-2a2 2 0 0 0 2 2v-2H2Z" })
    ] })
  ] });
}
/*! components/syntax/icons/ThemingIcon.tsx [vike:pluginModuleBanner] */
function ThemingIcon({ id, color }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient`, color, gradientTransform: "matrix(0 21 -21 0 12 11)" }),
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient-dark`, color, gradientTransform: "matrix(0 24.5 -24.5 0 16 5.5)" })
    ] }),
    /* @__PURE__ */ jsxs(LightMode, { children: [
      /* @__PURE__ */ jsx("circle", { cx: 12, cy: 20, r: 12, fill: `url(#${id}-gradient)` }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M27 12.13 19.87 5 13 11.87v14.26l14-14Z",
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          fillOpacity: 0.5,
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3 3h10v22a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V3Z",
          className: "fill-[var(--icon-background)]",
          fillOpacity: 0.5
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3 9v16a4 4 0 0 0 4 4h2a4 4 0 0 0 4-4V9M3 9V3h10v6M3 9h10M3 15h10M3 21h10",
          className: "stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M29 29V19h-8.5L13 26c0 1.5-2.5 3-5 3h21Z",
          fillOpacity: 0.5,
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(DarkMode, { children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3 2a1 1 0 0 0-1 1v21a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H3Zm16.752 3.293a1 1 0 0 0-1.593.244l-1.045 2A1 1 0 0 0 17 8v13a1 1 0 0 0 1.71.705l7.999-8.045a1 1 0 0 0-.002-1.412l-6.955-6.955ZM26 18a1 1 0 0 0-.707.293l-10 10A1 1 0 0 0 16 30h13a1 1 0 0 0 1-1V19a1 1 0 0 0-1-1h-3ZM5 18a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Zm-1-5a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1Zm1-7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2H5Z",
        fill: `url(#${id}-gradient-dark)`
      }
    ) })
  ] });
}
/*! components/syntax/icons/WarningIcon.tsx [vike:pluginModuleBanner] */
function WarningIcon({ id, color }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs("defs", { children: [
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient`, color, gradientTransform: "rotate(65.924 1.519 20.92) scale(25.7391)" }),
      /* @__PURE__ */ jsx(Gradient, { id: `${id}-gradient-dark`, color, gradientTransform: "matrix(0 24.5 -24.5 0 16 5.5)" })
    ] }),
    /* @__PURE__ */ jsxs(LightMode, { children: [
      /* @__PURE__ */ jsx("circle", { cx: 20, cy: 20, r: 12, fill: `url(#${id}-gradient)` }),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M3 16c0 7.18 5.82 13 13 13s13-5.82 13-13S23.18 3 16 3 3 8.82 3 16Z",
          fillOpacity: 0.5,
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "m15.408 16.509-1.04-5.543a1.66 1.66 0 1 1 3.263 0l-1.039 5.543a.602.602 0 0 1-1.184 0Z",
          className: "fill-[var(--icon-foreground)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M16 23a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z",
          fillOpacity: 0.5,
          stroke: "currentColor",
          className: "fill-[var(--icon-background)] stroke-[color:var(--icon-foreground)]",
          strokeWidth: 2,
          strokeLinecap: "round",
          strokeLinejoin: "round"
        }
      )
    ] }),
    /* @__PURE__ */ jsx(DarkMode, { children: /* @__PURE__ */ jsx(
      "path",
      {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M2 16C2 8.268 8.268 2 16 2s14 6.268 14 14-6.268 14-14 14S2 23.732 2 16Zm11.386-4.85a2.66 2.66 0 1 1 5.228 0l-1.039 5.543a1.602 1.602 0 0 1-3.15 0l-1.04-5.543ZM16 20a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z",
        fill: `url(#${id}-gradient-dark)`
      }
    ) })
  ] });
}
/*! components/syntax/Icon.tsx [vike:pluginModuleBanner] */
const icons$1 = {
  installation: InstallationIcon,
  presets: PresetsIcon,
  plugins: PluginsIcon,
  theming: ThemingIcon,
  lightbulb: LightbulbIcon,
  warning: WarningIcon,
  question: QuestionIcon
};
const iconStyles = {
  blue: "[--icon-foreground:var(--color-slate-900)] [--icon-background:var(--color-white)]",
  amber: "[--icon-foreground:var(--color-amber-900)] [--icon-background:var(--color-amber-100)]"
};
function Icon({
  icon,
  color = "blue",
  className,
  ...props
}) {
  let id = useId();
  let IconComponent = icons$1[icon];
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 32 32", fill: "none", className: clsx(className, iconStyles[color]), ...props, children: /* @__PURE__ */ jsx(IconComponent, { id, color }) });
}
const gradients = {
  blue: [{ stopColor: "#0EA5E9" }, { stopColor: "#22D3EE", offset: ".527" }, { stopColor: "#818CF8", offset: 1 }],
  amber: [
    { stopColor: "#FDE68A", offset: ".08" },
    { stopColor: "#F59E0B", offset: ".837" }
  ]
};
function Gradient({
  color = "blue",
  ...props
}) {
  return /* @__PURE__ */ jsx("radialGradient", { cx: 0, cy: 0, r: 1, gradientUnits: "userSpaceOnUse", ...props, children: gradients[color].map((stop, stopIndex) => /* @__PURE__ */ jsx("stop", { ...stop }, stopIndex)) });
}
function LightMode({ className, ...props }) {
  return /* @__PURE__ */ jsx("g", { className: clsx("dark:hidden", className), ...props });
}
function DarkMode({ className, ...props }) {
  return /* @__PURE__ */ jsx("g", { className: clsx("hidden dark:inline", className), ...props });
}
/*! components/syntax/QuickLinks.tsx [vike:pluginModuleBanner] */
function QuickLinks({ children }) {
  return /* @__PURE__ */ jsx("div", { className: "not-prose my-12 grid grid-cols-1 gap-6 sm:grid-cols-2", children });
}
function QuickLink({
  title,
  description,
  href,
  icon
}) {
  return /* @__PURE__ */ jsxs("div", { className: "group relative rounded-xl border border-slate-200 dark:border-slate-800", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,var(--color-violet-50)),var(--quick-links-hover-bg,var(--color-violet-50)))_padding-box,linear-gradient(to_top,var(--color-indigo-400),var(--color-cyan-400),var(--color-violet-500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:var(--color-slate-800)]" }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-xl p-6", children: [
      /* @__PURE__ */ jsx(Icon, { icon, className: "h-8 w-8" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-4 font-display text-base text-slate-900 dark:text-white", children: /* @__PURE__ */ jsxs(Link, { href, children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -inset-px rounded-xl" }),
        title
      ] }) }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-slate-700 dark:text-slate-400", children: description })
    ] })
  ] });
}
/*! components/syntax/Button.tsx [vike:pluginModuleBanner] */
const variantStyles = {
  primary: "rounded-full bg-violet-300 py-2 px-4 text-sm font-semibold text-slate-900 hover:bg-violet-200 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300/50 active:bg-violet-500",
  secondary: "rounded-full bg-slate-800 py-2 px-4 text-sm font-medium text-white hover:bg-slate-700 focus:outline-hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/50 active:text-slate-400"
};
function Button({ variant = "primary", className, ...props }) {
  className = clsx(variantStyles[variant], "cursor-pointer", className);
  return typeof props.href === "undefined" ? /* @__PURE__ */ jsx("button", { className, ...props }) : /* @__PURE__ */ jsx(Link, { className, ...props });
}
/*! components/md/Tabs.tsx [vike:pluginModuleBanner] */
const TabsContext = createContext({
  selectedTab: "",
  selectTab: () => {
  },
  tabs: [],
  addTab: () => {
  }
});
function Tabs({
  defaultSelectedTab = "",
  children
}) {
  const [selectedTab, selectTab] = useState(defaultSelectedTab);
  const [tabs, setTabs] = useState([]);
  const addTab = (tab) => setTabs((prevTabs) => {
    if (prevTabs.some((t) => t.value === tab.value)) {
      return prevTabs;
    }
    return [...prevTabs, tab];
  });
  return /* @__PURE__ */ jsx(
    TabsContext.Provider,
    {
      value: {
        selectedTab,
        selectTab,
        tabs,
        addTab
      },
      children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "max-w-full overflow-x-auto overflow-y-hidden", children: /* @__PURE__ */ jsx("ul", { className: "!p-0 w-max flex items-stretch gap-1 !m-0", "aria-orientation": "horizontal", role: "tablist", children: tabs.map((tab) => /* @__PURE__ */ jsx("li", { className: "overflow-hidden", role: "tab", "aria-selected": selectedTab === tab.value, children: /* @__PURE__ */ jsx(TabItem, { tab, isSelected: selectedTab === tab.value, select: () => selectTab(tab.value) }) }, tab.value)) }) }),
        /* @__PURE__ */ jsx("div", { className: "-mt-1 p-2", children })
      ] })
    }
  );
}
function TabItem({ tab, isSelected, select }) {
  return /* @__PURE__ */ jsx(
    Button,
    {
      variant: isSelected ? "primary" : "secondary",
      className: clsx("!rounded-md", isSelected && "cursor-default"),
      onClick: select,
      children: tab.label
    }
  );
}
function TabContent({ label, value, children }) {
  const { addTab, selectedTab } = useContext(TabsContext);
  useEffect(() => {
    addTab({ label, value });
  }, []);
  return /* @__PURE__ */ jsx("div", { className: clsx("[&>*:first-of-type]:!mt-0", "[&>*:last-of-type]:!mb-0", selectedTab !== value && "hidden"), children });
}
/*! components/syntax/Callout.tsx [vike:pluginModuleBanner] */
const styles = {
  note: {
    container: "bg-violet-50 dark:bg-violet-800/60 dark:ring-1 dark:ring-violet-300/10",
    title: "text-violet-900 dark:text-violet-400",
    body: "text-slate-800 [--tw-prose-background:var(--color-slate-50)] prose-a:text-slate-900 prose-code:text-slate-900 dark:text-slate-300 dark:prose-code:text-slate-300"
  },
  warning: {
    container: "bg-amber-50 dark:bg-amber-800/60 dark:ring-1 dark:ring-amber-300/10",
    title: "text-amber-900 dark:text-amber-500",
    body: "text-slate-800 [--tw-prose-underline:var(--color-slate-400)] [--tw-prose-background:var(--color-slate-50)] prose-a:text-slate-900 prose-code:text-slate-900 dark:text-slate-300 dark:[--tw-prose-underline:var(--color-slate-700)] dark:prose-code:text-slate-300"
  },
  question: {
    container: "bg-amber-50 dark:bg-amber-800/60 dark:ring-1 dark:ring-amber-300/10",
    title: "text-amber-900 dark:text-amber-500",
    body: "text-slate-800 [--tw-prose-underline:var(--color-slate-400)] [--tw-prose-background:var(--color-slate-50)] prose-a:text-slate-900 prose-code:text-slate-900 dark:text-slate-300 dark:[--tw-prose-underline:var(--color-slate-700)] dark:prose-code:text-slate-300"
  }
};
const icons = {
  note: (props) => /* @__PURE__ */ jsx(Icon, { icon: "lightbulb", ...props }),
  warning: (props) => /* @__PURE__ */ jsx(Icon, { icon: "warning", color: "amber", ...props }),
  question: (props) => /* @__PURE__ */ jsx(Icon, { icon: "question", color: "blue", ...props })
};
function Callout({
  title,
  children,
  type = "note",
  collapsible = false
}) {
  let IconComponent = icons[type];
  return /* @__PURE__ */ jsxs("div", { className: clsx("my-8 flex flex-col rounded-3xl p-6", styles[type].container), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-6", children: [
      /* @__PURE__ */ jsx(IconComponent, { className: "h-8 w-8 flex-none" }),
      /* @__PURE__ */ jsx("p", { className: clsx("!m-0 font-display text-xl text-balance", styles[type].title), children: title })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "mt-4 flex-auto", children: /* @__PURE__ */ jsx("div", { className: clsx("prose mt-2.5", styles[type].body), children }) })
  ] });
}
/*! markdoc/tags.tsx [vike:pluginModuleBanner] */
const tags = {
  callout: {
    attributes: {
      title: { type: String },
      type: {
        type: String,
        default: "note",
        matches: ["note", "warning", "question"],
        errorLevel: "critical"
      },
      collapsible: {
        type: Boolean,
        default: false
      }
    },
    render: (props) => {
      return /* @__PURE__ */ jsx(Callout, { ...props, collapsible: props.collapsible, type: props.type || "note" });
    }
  },
  figure: {
    selfClosing: true,
    attributes: {
      src: { type: String },
      alt: { type: String },
      caption: { type: String }
    },
    render: ({ src, alt = "", caption }) => /* @__PURE__ */ jsxs("figure", { children: [
      /* @__PURE__ */ jsx("img", { src, alt, loading: "lazy" }),
      /* @__PURE__ */ jsx("figcaption", { children: caption })
    ] })
  },
  "quick-links": {
    render: QuickLinks
  },
  "quick-link": {
    selfClosing: true,
    render: QuickLink,
    attributes: {
      title: { type: String },
      description: { type: String },
      icon: { type: String },
      href: { type: String }
    }
  },
  tabs: {
    render: Tabs,
    attributes: {
      defaultSelectedTab: { type: String }
    }
  },
  tab: {
    render: TabContent,
    attributes: {
      label: { type: String },
      value: { type: String }
    }
  }
};
/*! services/DocsService.ts [vike:pluginModuleBanner] */
class DocsService {
  static DOCS_PATH = path.resolve("../../app/data");
  static DOCS_EXTS = ["mdx", "md"];
  // Order matters
  static instance;
  search = buildFlexSearch([]);
  slugify = slugifyWithCounter();
  cache = /* @__PURE__ */ new Map();
  static getInstance() {
    if (!DocsService.instance) {
      DocsService.instance = new DocsService();
    }
    return DocsService.instance;
  }
  getFromCache(key) {
    return this.cache.get(key);
  }
  setToCache(key, value) {
    this.cache.set(key, value);
  }
  nodeToString(node) {
    let string = "";
    if (node.type === "text" && typeof node.attributes?.content === "string") {
      string = node.attributes.content;
    }
    if (node.children) {
      for (const child of node.children) {
        string += this.nodeToString(child);
      }
    }
    return string;
  }
  extractSections(node, sections, isRoot = true) {
    if (isRoot) {
      this.slugify.reset();
    }
    if (["heading", "paragraph"].includes(node.type)) {
      const content = this.nodeToString(node).trim();
      if (node.type === "heading" && node.attributes.level <= 2) {
        const hash = node.attributes?.id ?? this.slugify(content);
        sections.push([content, hash, []]);
      } else {
        sections.at(-1)?.[2].push(content);
      }
    } else if (node.children) {
      for (const child of node.children) {
        this.extractSections(child, sections, false);
      }
    }
  }
  async fetchDocs() {
    const docs = glob.sync(DocsService.DOCS_PATH + `/**/*.{${DocsService.DOCS_EXTS.join(",")}}`);
    const data = docs.map((doc) => {
      const content = fs.readFileSync(doc, "utf-8");
      const extension = path.extname(doc).slice(1);
      const key = doc.replace(DocsService.DOCS_PATH, "").replace(`page.${extension}`, "").replace(`.${extension}`, "").replace(/\/$/g, "");
      const ast = Markdoc.parse(content);
      const title = ast.attributes?.frontmatter?.match(/^title:\s*(.*?)\s*$/m)?.[1];
      const description = ast.attributes?.frontmatter?.match(/^description:\s*(.*?)\s*$/m)?.[1];
      const sections = [[title, null, []]];
      this.extractSections(ast, sections);
      this.setToCache(key, { title, description, content, sections });
      return { key, sections };
    });
    return data;
  }
  async buildSearch() {
    const data = await this.fetchDocs();
    this.search = buildFlexSearch(data);
  }
  transform(doc) {
    const ast = Markdoc.parse(doc.content);
    const transformed = Markdoc.transform(ast, { nodes, tags, variables: {} });
    return {
      ...doc,
      tags: transformed
    };
  }
  async getDoc(namespace, key) {
    try {
      await this.fetchDocs();
      const doc = this.getFromCache(`/${namespace}/${key}`);
      if (!doc) {
        throw new Error("Doc not found");
      }
      return doc;
    } catch (error) {
      return null;
    }
  }
}
const docsService = DocsService.getInstance();
/*! components/syntax/Search.telefunc.ts [vike:pluginModuleBanner] */
const onSearch = async (query, maxResults) => {
  const search = buildFlexSearch(await docsService.fetchDocs());
  const results = search(query);
  if (maxResults) {
    return results.slice(0, maxResults);
  }
  return results;
};
__decorateTelefunction(onSearch, "onSearch", "/components/syntax/Search.telefunc.ts", "/app", true);
const __telefunc_t = shield.type;
shield(onSearch, [__telefunc_t.string, __telefunc_t.optional(__telefunc_t.number)], { __autoGenerated: true });
const Search_telefunc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  onSearch
}, Symbol.toStringTag, { value: "Module" }));
export {
  Button as B,
  Link as L,
  Search_telefunc as S,
  ThemeContext as T,
  navigation as a,
  docsService as d,
  nodes as n,
  onSearch as o,
  tags as t,
  useTheme as u
};
