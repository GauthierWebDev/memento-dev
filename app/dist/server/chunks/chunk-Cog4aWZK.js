import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useState, useCallback, Suspense, useEffect, createContext, useContext, useId, Fragment as Fragment$1 } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { Dialog, DialogPanel, Listbox, Label, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import { a as navigation, L as Link, T as ThemeContext, u as useTheme, o as onSearch, B as Button } from "./chunk-DhcPoVSR.js";
import clsx from "clsx";
import { Highlight } from "prism-react-renderer";
/* empty css               */
/* empty css               */
/* empty css               */
/* empty css               */
import "vike-react/config";
import Highlighter from "react-highlight-words";
import { navigate } from "vike/client/router";
/*! assets/logo.svg [vike:pluginModuleBanner] */
const logoUrl = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'%20standalone='no'?%3e%3c!DOCTYPE%20svg%20PUBLIC%20'-//W3C//DTD%20SVG%201.1//EN'%20'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg%20width='100%25'%20height='100%25'%20viewBox='0%200%2057%2038'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20xml:space='preserve'%20xmlns:serif='http://www.serif.com/'%20style='fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;'%3e%3cg%20transform='matrix(-1.76727,0,0,1.76727,49.1089,-3.53454)'%3e%3cpath%20d='M16.161,18.989L20.49,23.32L21.9,21.91L2.1,2.1L0.69,3.51L2.714,5.535L-4.085,11.253L-4.085,13.054L3.185,19.167L4.629,17.337L-1.61,12.165L4.397,7.219L9.588,12.412L6,16L6.01,16.01L6,16.01L6,22L18,22L18,20.83L16.161,18.989ZM14.417,17.244L16,18.83L16,20L8,20L8,16.5L10.837,13.663L14.417,17.244ZM8,4L16,4L16,7.5L13.16,10.34L14.41,11.59L18,8.01L17.99,8L18,8L18,2L6,2L6,3.17L8,5.17L8,4ZM25.294,12.164L19.071,17.34L20.542,19.164L27.788,13.075L27.788,11.274L20.597,5.22L19.158,7.075L25.294,12.164Z'%20style='fill:url(%23_Linear1);'/%3e%3c/g%3e%3cdefs%3e%3clinearGradient%20id='_Linear1'%20x1='0'%20y1='0'%20x2='1'%20y2='0'%20gradientUnits='userSpaceOnUse'%20gradientTransform='matrix(12.792,-21.32,-21.32,-12.792,5.208,23.32)'%3e%3cstop%20offset='0'%20style='stop-color:rgb(43,127,255);stop-opacity:1'/%3e%3cstop%20offset='1'%20style='stop-color:rgb(142,81,255);stop-opacity:1'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";
/*! pages/+Head.tsx [vike:pluginModuleBanner] */
function HeadDefault() {
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("link", { rel: "icon", href: logoUrl }) });
}
const import4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: HeadDefault
}, Symbol.toStringTag, { value: "Module" }));
/*! components/syntax/Navigation.tsx [vike:pluginModuleBanner] */
function Navigation({
  className,
  onLinkClick
}) {
  const { urlPathname } = usePageContext();
  return /* @__PURE__ */ jsx("nav", { className: clsx("text-base lg:text-sm", className), children: /* @__PURE__ */ jsx("ul", { role: "list", className: "space-y-9", children: navigation.map((section) => /* @__PURE__ */ jsxs("li", { children: [
    /* @__PURE__ */ jsx("h2", { className: "font-display font-medium text-slate-900 dark:text-white", children: section.title }),
    /* @__PURE__ */ jsx(
      "ul",
      {
        role: "list",
        className: "mt-2 space-y-2 border-l-2 border-slate-100 lg:mt-4 lg:space-y-4 lg:border-slate-200 dark:border-slate-800",
        children: section.links.map((link) => /* @__PURE__ */ jsx("li", { className: "relative", children: /* @__PURE__ */ jsx(
          Link,
          {
            href: link.href,
            onClick: onLinkClick,
            className: clsx(
              "block w-full pl-3.5 before:pointer-events-none before:absolute before:top-1/2 before:-left-1 before:h-1.5 before:w-1.5 before:-translate-y-1/2 before:rounded-full",
              link.href === urlPathname ? "font-semibold text-violet-500 before:bg-violet-500" : "text-slate-500 before:hidden before:bg-slate-300 hover:text-slate-600 hover:before:block dark:text-slate-400 dark:before:bg-slate-700 dark:hover:text-slate-300"
            ),
            children: link.title
          }
        ) }, link.href))
      }
    )
  ] }, section.title)) }) });
}
/*! components/syntax/Logo.tsx [vike:pluginModuleBanner] */
function LogomarkPaths() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs(
      "linearGradient",
      {
        id: "l",
        x1: "0",
        y1: "0",
        x2: "1",
        y2: "0",
        gradientUnits: "userSpaceOnUse",
        gradientTransform: "matrix(12.792,-21.32,-21.32,-12.792,5.208,23.32)",
        children: [
          /* @__PURE__ */ jsx("stop", { offset: "0", style: { stopColor: "rgb(43,127,255)" } }),
          /* @__PURE__ */ jsx("stop", { offset: "1", style: { stopColor: "rgb(142,81,255)" } })
        ]
      }
    ) }),
    /* @__PURE__ */ jsx("g", { transform: "matrix(-1.76727,0,0,1.76727,49.1089,-3.53454)", children: /* @__PURE__ */ jsx(
      "path",
      {
        d: "M16.161,18.989L20.49,23.32L21.9,21.91L2.1,2.1L0.69,3.51L2.714,5.535L-4.085,11.253L-4.085,13.054L3.185,19.167L4.629,17.337L-1.61,12.165L4.397,7.219L9.588,12.412L6,16L6.01,16.01L6,16.01L6,22L18,22L18,20.83L16.161,18.989ZM14.417,17.244L16,18.83L16,20L8,20L8,16.5L10.837,13.663L14.417,17.244ZM8,4L16,4L16,7.5L13.16,10.34L14.41,11.59L18,8.01L17.99,8L18,8L18,2L6,2L6,3.17L8,5.17L8,4ZM25.294,12.164L19.071,17.34L20.542,19.164L27.788,13.075L27.788,11.274L20.597,5.22L19.158,7.075L25.294,12.164Z",
        style: { fill: "url(#l)" }
      }
    ) })
  ] });
}
function Logo(props) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 231 38", ...props, children: [
    /* @__PURE__ */ jsx(LogomarkPaths, {}),
    /* @__PURE__ */ jsx(
      "text",
      {
        className: "hidden lg:block fill-zinc-900 dark:fill-zinc-100",
        fontFamily: "Inter Variable, sans-serif",
        fontSize: 24,
        fontWeight: "bold",
        letterSpacing: "-.02em",
        x: 74,
        y: 26,
        children: "Memento Dev"
      }
    )
  ] });
}
/*! components/syntax/MobileNavigation.tsx [vike:pluginModuleBanner] */
function MenuIcon(props) {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", fill: "none", strokeWidth: "2", strokeLinecap: "round", ...props, children: /* @__PURE__ */ jsx("path", { d: "M4 7h16M4 12h16M4 17h16" }) });
}
function CloseIcon(props) {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 24 24", fill: "none", strokeWidth: "2", strokeLinecap: "round", ...props, children: /* @__PURE__ */ jsx("path", { d: "M5 5l14 14M19 5l-14 14" }) });
}
function CloseOnNavigation({ close }) {
  const { urlPathname } = usePageContext();
  useEffect(() => {
    close();
  }, [urlPathname, close]);
  return null;
}
function MobileNavigation() {
  let [isOpen, setIsOpen] = useState(false);
  let close = useCallback(() => setIsOpen(false), [setIsOpen]);
  function onLinkClick(event) {
    let link = event.currentTarget;
    if (link.pathname + link.search + link.hash === window.location.pathname + window.location.search + window.location.hash) {
      close();
    }
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: () => setIsOpen(true),
        className: "relative",
        "aria-label": "Ouvrir le menu de navigation",
        children: /* @__PURE__ */ jsx(MenuIcon, { className: "h-6 w-6 stroke-slate-500" })
      }
    ),
    /* @__PURE__ */ jsx(Suspense, { fallback: null, children: /* @__PURE__ */ jsx(CloseOnNavigation, { close }) }),
    /* @__PURE__ */ jsx(
      Dialog,
      {
        open: isOpen,
        onClose: () => close(),
        className: "fixed inset-0 z-50 flex items-start overflow-y-auto bg-slate-900/50 pr-10 backdrop-blur-sm lg:hidden",
        "aria-label": "Navigation",
        children: /* @__PURE__ */ jsxs(DialogPanel, { className: "min-h-full w-full max-w-xs bg-white px-4 pt-5 pb-12 sm:px-6 dark:bg-slate-900", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
            /* @__PURE__ */ jsx("button", { type: "button", onClick: () => close(), "aria-label": "Fermer le menu de navigation", children: /* @__PURE__ */ jsx(CloseIcon, { className: "h-6 w-6 stroke-slate-500" }) }),
            /* @__PURE__ */ jsx(Link, { href: "/", className: "ml-6", "aria-label": "Page d'accueil", children: /* @__PURE__ */ jsx(Logo, { className: "h-9 w-9" }) })
          ] }),
          /* @__PURE__ */ jsx(Navigation, { className: "mt-5 px-1", onLinkClick })
        ] })
      }
    )
  ] });
}
/*! providers/ThemeProvider.tsx [vike:pluginModuleBanner] */
function ThemeProvider(props) {
  const [theme, setTheme] = useState(props.defaultTheme || "light");
  useEffect(() => {
    const rootElement = document.documentElement;
    rootElement.classList.toggle("dark", theme === "dark");
    rootElement.classList.toggle("light", theme === "light");
  }, [theme]);
  return /* @__PURE__ */ jsx(ThemeContext.Provider, { value: { theme, setTheme }, children: props.children });
}
/*! components/syntax/ThemeSelector.tsx [vike:pluginModuleBanner] */
const themes = [
  { name: "Clair", value: "light", icon: LightIcon },
  { name: "Sombre", value: "dark", icon: DarkIcon }
];
function LightIcon(props) {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 1a1 1 0 0 1 2 0v1a1 1 0 1 1-2 0V1Zm4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm2.657-5.657a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm-1.415 11.313-.707-.707a1 1 0 0 1 1.415-1.415l.707.708a1 1 0 0 1-1.415 1.414ZM16 7.999a1 1 0 0 0-1-1h-1a1 1 0 1 0 0 2h1a1 1 0 0 0 1-1ZM7 14a1 1 0 1 1 2 0v1a1 1 0 1 1-2 0v-1Zm-2.536-2.464a1 1 0 0 0-1.414 0l-.707.707a1 1 0 0 0 1.414 1.414l.707-.707a1 1 0 0 0 0-1.414Zm0-8.486A1 1 0 0 1 3.05 4.464l-.707-.707a1 1 0 0 1 1.414-1.414l.707.707ZM3 8a1 1 0 0 0-1-1H1a1 1 0 0 0 0 2h1a1 1 0 0 0 1-1Z"
    }
  ) });
}
function DarkIcon(props) {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ jsx(
    "path",
    {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7.23 3.333C7.757 2.905 7.68 2 7 2a6 6 0 1 0 0 12c.68 0 .758-.905.23-1.332A5.989 5.989 0 0 1 5 8c0-1.885.87-3.568 2.23-4.668ZM12 5a1 1 0 0 1 1 1 1 1 0 0 0 1 1 1 1 0 1 1 0 2 1 1 0 0 0-1 1 1 1 0 1 1-2 0 1 1 0 0 0-1-1 1 1 0 1 1 0-2 1 1 0 0 0 1-1 1 1 0 0 1 1-1Z"
    }
  ) });
}
function ThemeSelector(props) {
  let [mounted, setMounted] = useState(false);
  let { theme, setTheme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return /* @__PURE__ */ jsx("div", { className: "h-6 w-6" });
  }
  return /* @__PURE__ */ jsxs(Listbox, { as: "div", value: theme, onChange: setTheme, ...props, children: [
    /* @__PURE__ */ jsx(Label, { className: "sr-only", children: "Theme" }),
    /* @__PURE__ */ jsxs(
      ListboxButton,
      {
        className: "flex h-6 w-6 items-center justify-center rounded-lg ring-1 shadow-md shadow-black/5 ring-black/5 dark:bg-slate-700 dark:ring-white/5 dark:ring-inset",
        "aria-label": "Theme",
        children: [
          /* @__PURE__ */ jsx(LightIcon, { className: clsx("h-4 w-4 dark:hidden", "fill-violet-400") }),
          /* @__PURE__ */ jsx(DarkIcon, { className: clsx("hidden h-4 w-4 dark:block", "fill-violet-400") })
        ]
      }
    ),
    /* @__PURE__ */ jsx(ListboxOptions, { className: "absolute top-full left-1/2 mt-3 w-36 -translate-x-1/2 space-y-1 rounded-xl bg-white p-3 text-sm font-medium ring-1 shadow-md shadow-black/5 ring-black/5 dark:bg-slate-800 dark:ring-white/5", children: themes.map((theme2) => /* @__PURE__ */ jsx(
      ListboxOption,
      {
        value: theme2.value,
        className: ({ focus, selected }) => clsx("flex cursor-pointer items-center rounded-[0.625rem] p-1 select-none", {
          "text-violet-500": selected,
          "text-slate-900 dark:text-white": focus && !selected,
          "text-slate-700 dark:text-slate-400": !focus && !selected,
          "bg-slate-100 dark:bg-slate-900/40": focus
        }),
        children: ({ selected }) => /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("div", { className: "rounded-md bg-white p-1 ring-1 shadow-sm ring-slate-900/5 dark:bg-slate-700 dark:ring-white/5 dark:ring-inset", children: /* @__PURE__ */ jsx(
            theme2.icon,
            {
              className: clsx("h-4 w-4", selected ? "fill-violet-400 dark:fill-violet-400" : "fill-slate-400")
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "ml-3", children: theme2.name })
        ] })
      },
      theme2.value
    )) })
  ] });
}
/*! hooks/useDebounce.ts [vike:pluginModuleBanner] */
function useDebounce(debounceTime = 300) {
  const [debouncedValue, setDebouncedValue] = useState("");
  const [value, setValue] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, debounceTime);
    return () => {
      clearTimeout(handler);
    };
  }, [value]);
  return [debouncedValue, setValue];
}
/*! components/syntax/Search.tsx [vike:pluginModuleBanner] */
const SearchContext = createContext({
  query: "",
  close: () => {
  },
  results: [],
  isLoading: false,
  isOpened: false,
  setQuery: () => {
  },
  setIsOpened: () => {
  },
  setIsLoading: () => {
  },
  setResults: () => {
  }
});
function SearchIcon(props) {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 20 20", ...props, children: /* @__PURE__ */ jsx("path", { d: "M16.293 17.707a1 1 0 0 0 1.414-1.414l-1.414 1.414ZM9 14a5 5 0 0 1-5-5H2a7 7 0 0 0 7 7v-2ZM4 9a5 5 0 0 1 5-5V2a7 7 0 0 0-7 7h2Zm5-5a5 5 0 0 1 5 5h2a7 7 0 0 0-7-7v2Zm8.707 12.293-3.757-3.757-1.414 1.414 3.757 3.757 1.414-1.414ZM14 9a4.98 4.98 0 0 1-1.464 3.536l1.414 1.414A6.98 6.98 0 0 0 16 9h-2Zm-1.464 3.536A4.98 4.98 0 0 1 9 14v2a6.98 6.98 0 0 0 4.95-2.05l-1.414-1.414Z" }) });
}
function LoadingIcon(props) {
  const id = useId();
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 20 20", fill: "none", "aria-hidden": "true", ...props, children: [
    /* @__PURE__ */ jsx("circle", { cx: "10", cy: "10", r: "5.5", strokeLinejoin: "round" }),
    /* @__PURE__ */ jsx("path", { stroke: `url(#${id})`, strokeLinecap: "round", strokeLinejoin: "round", d: "M15.5 10a5.5 5.5 0 1 0-5.5 5.5" }),
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id, x1: "13", x2: "9.5", y1: "9", y2: "15", gradientUnits: "userSpaceOnUse", children: [
      /* @__PURE__ */ jsx("stop", { stopColor: "currentColor" }),
      /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "currentColor", stopOpacity: "0" })
    ] }) })
  ] });
}
function SearchInput() {
  const { close, setQuery, query, isLoading } = useContext(SearchContext);
  return /* @__PURE__ */ jsxs("div", { className: "group relative flex h-12", children: [
    /* @__PURE__ */ jsx(SearchIcon, { className: "pointer-events-none absolute top-0 left-4 h-full w-5 fill-slate-400 dark:fill-slate-500" }),
    /* @__PURE__ */ jsx(
      "input",
      {
        "data-autofocus": true,
        className: clsx(
          "flex-auto appearance-none bg-transparent pl-12 text-slate-900 outline-hidden placeholder:text-slate-400 focus:w-full focus:flex-none sm:text-sm dark:text-white [&::-webkit-search-cancel-button]:hidden [&::-webkit-search-decoration]:hidden [&::-webkit-search-results-button]:hidden [&::-webkit-search-results-decoration]:hidden",
          isLoading ? "pr-11" : "pr-4"
        ),
        onKeyDown: (event) => {
          if (event.key === "Escape") {
            if (document.activeElement instanceof HTMLElement) {
              document.activeElement.blur();
            }
            close();
          }
        },
        value: query,
        onChange: (event) => setQuery(event.currentTarget.value)
      }
    ),
    isLoading && /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-3 flex items-center", children: /* @__PURE__ */ jsx(LoadingIcon, { className: "h-6 w-6 animate-spin stroke-slate-200 text-slate-400 dark:stroke-slate-700 dark:text-slate-500" }) })
  ] });
}
function HighlightQuery({ text, query }) {
  return /* @__PURE__ */ jsx(
    Highlighter,
    {
      highlightClassName: "group-aria-selected:underline bg-transparent text-violet-600 dark:text-violet-400",
      searchWords: [query],
      autoEscape: true,
      textToHighlight: text
    }
  );
}
function SearchResultItem({ result, query }) {
  const { close } = useContext(SearchContext);
  const id = useId();
  const sectionTitle = navigation.find(
    (section) => section.links.find((link) => link.href === result.url.split("#")[0])
  )?.title;
  const hierarchy = [sectionTitle, result.pageTitle].filter((x) => typeof x === "string");
  return /* @__PURE__ */ jsxs(
    "li",
    {
      className: "group block cursor-default rounded-lg px-3 py-2 aria-selected:bg-slate-100 dark:aria-selected:bg-slate-700/30 hover:bg-slate-100 dark:hover:bg-slate-700/30",
      "aria-labelledby": `${id}-hierarchy ${id}-title`,
      role: "option",
      tabIndex: 0,
      onClick: () => {
        navigate(result.url);
        close();
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            id: `${id}-title`,
            "aria-hidden": "true",
            className: "text-sm text-slate-700 group-aria-selected:text-violet-600 dark:text-slate-300 dark:group-aria-selected:text-violet-400",
            children: /* @__PURE__ */ jsx(HighlightQuery, { text: result.title, query })
          }
        ),
        hierarchy.length > 0 && /* @__PURE__ */ jsx(
          "div",
          {
            id: `${id}-hierarchy`,
            "aria-hidden": "true",
            className: "mt-0.5 truncate text-xs whitespace-nowrap text-slate-500 dark:text-slate-400",
            children: hierarchy.map((item, itemIndex, items) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
              /* @__PURE__ */ jsx(HighlightQuery, { text: item, query }),
              /* @__PURE__ */ jsx("span", { className: itemIndex === items.length - 1 ? "sr-only" : "mx-2 text-slate-300 dark:text-slate-700", children: "/" })
            ] }, itemIndex))
          }
        )
      ]
    }
  );
}
function SearchResults() {
  const { results, query } = useContext(SearchContext);
  if (results.length === 0) {
    return /* @__PURE__ */ jsxs("p", { className: "px-4 py-8 text-center text-sm text-slate-700 dark:text-slate-400", children: [
      "Aucun résultat pour “",
      /* @__PURE__ */ jsx("span", { className: "break-words text-slate-900 dark:text-white", children: query }),
      "”"
    ] });
  }
  return /* @__PURE__ */ jsx("ul", { children: results.map((result) => /* @__PURE__ */ jsx(SearchResultItem, { result, query }, result.url)) });
}
function SearchDialog({ className }) {
  const { close, isOpened, setIsOpened, results } = useContext(SearchContext);
  useEffect(() => {
    if (isOpened) return;
    function onKeyDown(event) {
      if (event.key === "k" && (event.metaKey || event.ctrlKey)) {
        event.preventDefault();
        setIsOpened(true);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpened, setIsOpened]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs(Dialog, { open: isOpened, onClose: close, className: clsx("fixed inset-0 z-50", className), children: [
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 bg-slate-900/50 backdrop-blur-sm" }),
    /* @__PURE__ */ jsx("div", { className: "fixed inset-0 overflow-y-auto px-4 py-4 sm:px-6 sm:py-20 md:py-32 lg:px-8 lg:py-[15vh]", children: /* @__PURE__ */ jsx(DialogPanel, { className: "mx-auto transform-gpu overflow-hidden rounded-xl bg-white shadow-xl sm:max-w-xl dark:bg-slate-800 dark:ring-1 dark:ring-slate-700", children: /* @__PURE__ */ jsxs("form", { onSubmit: (event) => event.preventDefault(), children: [
      /* @__PURE__ */ jsx(SearchInput, {}),
      /* @__PURE__ */ jsx("div", { className: "border-t border-slate-200 bg-white px-2 py-3 empty:hidden dark:border-slate-400/10 dark:bg-slate-800", children: results.length > 0 && /* @__PURE__ */ jsx(SearchResults, {}) })
    ] }) }) })
  ] }) });
}
function Search() {
  const [results, setResults] = useState([]);
  const [debouncedQuery, setDebouncedQuery] = useDebounce();
  const [modifierKey, setModifierKey] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [query, setQuery] = useState("");
  useEffect(() => {
    const platform = navigator.userAgentData?.platform || navigator.platform;
    setModifierKey(/(Mac|iPhone|iPod|iPad)/i.test(platform) ? "⌘" : "Ctrl ");
  }, []);
  useEffect(() => {
    setDebouncedQuery(query);
  }, [query]);
  useEffect(() => {
    if (debouncedQuery.length === 0) {
      setIsLoading(false);
      setResults([]);
      return;
    }
    setIsLoading(true);
    onSearch(debouncedQuery, 5).then(setResults).finally(() => {
      setIsLoading(false);
    });
  }, [debouncedQuery]);
  return /* @__PURE__ */ jsxs(
    SearchContext.Provider,
    {
      value: {
        query,
        close: () => setIsOpened(false),
        results,
        isLoading,
        isOpened,
        setQuery,
        setIsOpened,
        setIsLoading,
        setResults
      },
      children: [
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            className: "group flex h-6 w-6 items-center justify-center sm:justify-start md:h-auto md:w-80 md:flex-none md:rounded-lg md:py-2.5 md:pr-3.5 md:pl-4 md:text-sm md:ring-1 md:ring-slate-200 md:hover:ring-slate-300 lg:w-96 dark:md:bg-slate-800/75 dark:md:ring-white/5 dark:md:ring-inset dark:md:hover:bg-slate-700/40 dark:md:hover:ring-slate-500",
            onClick: () => setIsOpened(true),
            children: [
              /* @__PURE__ */ jsx(SearchIcon, { className: "h-5 w-5 flex-none fill-slate-400 group-hover:fill-slate-500 md:group-hover:fill-slate-400 dark:fill-slate-500" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only md:not-sr-only md:ml-2 md:text-slate-500 md:dark:text-slate-400", children: "Rechercher..." }),
              modifierKey && /* @__PURE__ */ jsxs("kbd", { className: "ml-auto hidden font-medium text-slate-400 md:block dark:text-slate-500", children: [
                /* @__PURE__ */ jsx("kbd", { className: "font-sans", children: modifierKey }),
                /* @__PURE__ */ jsx("kbd", { className: "font-sans", children: "K" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsx(SearchDialog, {})
      ]
    }
  );
}
/*! components/syntax/HeroBackground.tsx [vike:pluginModuleBanner] */
function HeroBackground(props) {
  const id = useId();
  return /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 668 1069", width: 668, height: 1069, fill: "none", ...props, children: [
    /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: `${id}-clip-path`, children: /* @__PURE__ */ jsx("path", { fill: "#fff", transform: "rotate(-180 334 534.4)", d: "M0 0h668v1068.8H0z" }) }) }),
    /* @__PURE__ */ jsxs("g", { opacity: ".4", clipPath: `url(#${id}-clip-path)`, strokeWidth: 4, children: [
      /* @__PURE__ */ jsx(
        "path",
        {
          opacity: ".3",
          d: "M584.5 770.4v-474M484.5 770.4v-474M384.5 770.4v-474M283.5 769.4v-474M183.5 768.4v-474M83.5 767.4v-474",
          stroke: "#334155"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M83.5 221.275v6.587a50.1 50.1 0 0 0 22.309 41.686l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M83.5 716.012v6.588a50.099 50.099 0 0 0 22.309 41.685l55.581 37.054a50.102 50.102 0 0 1 22.309 41.686v6.587M183.7 584.5v6.587a50.1 50.1 0 0 0 22.31 41.686l55.581 37.054a50.097 50.097 0 0 1 22.309 41.685v6.588M384.101 277.637v6.588a50.1 50.1 0 0 0 22.309 41.685l55.581 37.054a50.1 50.1 0 0 1 22.31 41.686v6.587M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588",
          stroke: "#334155"
        }
      ),
      /* @__PURE__ */ jsx(
        "path",
        {
          d: "M384.1 770.288v6.587a50.1 50.1 0 0 1-22.309 41.686l-55.581 37.054A50.099 50.099 0 0 0 283.9 897.3v6.588M484.3 594.937v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054A50.1 50.1 0 0 0 384.1 721.95v6.587M484.3 872.575v6.587a50.1 50.1 0 0 1-22.31 41.686l-55.581 37.054a50.098 50.098 0 0 0-22.309 41.686v6.582M584.501 663.824v39.988a50.099 50.099 0 0 1-22.31 41.685l-55.581 37.054a50.102 50.102 0 0 0-22.309 41.686v6.587M283.899 945.637v6.588a50.1 50.1 0 0 1-22.309 41.685l-55.581 37.05a50.12 50.12 0 0 0-22.31 41.69v6.59M384.1 277.637c0 19.946 12.763 37.655 31.686 43.962l137.028 45.676c18.923 6.308 31.686 24.016 31.686 43.962M183.7 463.425v30.69c0 21.564 13.799 40.709 34.257 47.529l134.457 44.819c18.922 6.307 31.686 24.016 31.686 43.962M83.5 102.288c0 19.515 13.554 36.412 32.604 40.645l235.391 52.309c19.05 4.234 32.605 21.13 32.605 40.646M83.5 463.425v-58.45M183.699 542.75V396.625M283.9 1068.8V945.637M83.5 363.225v-141.95M83.5 179.524v-77.237M83.5 60.537V0M384.1 630.425V277.637M484.301 830.824V594.937M584.5 1068.8V663.825M484.301 555.275V452.988M584.5 622.075V452.988M384.1 728.537v-56.362M384.1 1068.8v-20.88M384.1 1006.17V770.287M283.9 903.888V759.85M183.699 1066.71V891.362M83.5 1068.8V716.012M83.5 674.263V505.175",
          stroke: "#334155"
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: "83.5", cy: "384.1", r: "10.438", transform: "rotate(-180 83.5 384.1)", fill: "#1E293B", stroke: "#334155" }),
      /* @__PURE__ */ jsx("circle", { cx: "83.5", cy: "200.399", r: "10.438", transform: "rotate(-180 83.5 200.399)", stroke: "#334155" }),
      /* @__PURE__ */ jsx("circle", { cx: "83.5", cy: "81.412", r: "10.438", transform: "rotate(-180 83.5 81.412)", stroke: "#334155" }),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "183.699",
          cy: "375.75",
          r: "10.438",
          transform: "rotate(-180 183.699 375.75)",
          fill: "#1E293B",
          stroke: "#334155"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "183.699",
          cy: "563.625",
          r: "10.438",
          transform: "rotate(-180 183.699 563.625)",
          fill: "#1E293B",
          stroke: "#334155"
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: "384.1", cy: "651.3", r: "10.438", transform: "rotate(-180 384.1 651.3)", fill: "#1E293B", stroke: "#334155" }),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "484.301",
          cy: "574.062",
          r: "10.438",
          transform: "rotate(-180 484.301 574.062)",
          fill: "#0EA5E9",
          fillOpacity: ".42",
          stroke: "#0EA5E9"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "384.1",
          cy: "749.412",
          r: "10.438",
          transform: "rotate(-180 384.1 749.412)",
          fill: "#1E293B",
          stroke: "#334155"
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: "384.1", cy: "1027.05", r: "10.438", transform: "rotate(-180 384.1 1027.05)", stroke: "#334155" }),
      /* @__PURE__ */ jsx("circle", { cx: "283.9", cy: "924.763", r: "10.438", transform: "rotate(-180 283.9 924.763)", stroke: "#334155" }),
      /* @__PURE__ */ jsx("circle", { cx: "183.699", cy: "870.487", r: "10.438", transform: "rotate(-180 183.699 870.487)", stroke: "#334155" }),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "283.9",
          cy: "738.975",
          r: "10.438",
          transform: "rotate(-180 283.9 738.975)",
          fill: "#1E293B",
          stroke: "#334155"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "83.5",
          cy: "695.138",
          r: "10.438",
          transform: "rotate(-180 83.5 695.138)",
          fill: "#1E293B",
          stroke: "#334155"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "83.5",
          cy: "484.3",
          r: "10.438",
          transform: "rotate(-180 83.5 484.3)",
          fill: "#0EA5E9",
          fillOpacity: ".42",
          stroke: "#0EA5E9"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "484.301",
          cy: "432.112",
          r: "10.438",
          transform: "rotate(-180 484.301 432.112)",
          fill: "#1E293B",
          stroke: "#334155"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "584.5",
          cy: "432.112",
          r: "10.438",
          transform: "rotate(-180 584.5 432.112)",
          fill: "#1E293B",
          stroke: "#334155"
        }
      ),
      /* @__PURE__ */ jsx(
        "circle",
        {
          cx: "584.5",
          cy: "642.95",
          r: "10.438",
          transform: "rotate(-180 584.5 642.95)",
          fill: "#1E293B",
          stroke: "#334155"
        }
      ),
      /* @__PURE__ */ jsx("circle", { cx: "484.301", cy: "851.699", r: "10.438", transform: "rotate(-180 484.301 851.699)", stroke: "#334155" }),
      /* @__PURE__ */ jsx("circle", { cx: "384.1", cy: "256.763", r: "10.438", transform: "rotate(-180 384.1 256.763)", stroke: "#334155" })
    ] })
  ] });
}
/*! images/blur-indigo.png [vike:pluginModuleBanner] */
const blurIndigoImage = "/assets/static/blur-indigo.Cbr0CUfr.png";
/*! images/blur-cyan.png [vike:pluginModuleBanner] */
const blurCyanImage = "/assets/static/blur-cyan.DJww6-ho.png";
/*! components/common/Image.tsx [vike:pluginModuleBanner] */
function Image(props) {
  return /* @__PURE__ */ jsx("img", { ...props, src: props.src, alt: props.alt, loading: "lazy" });
}
/*! components/syntax/Hero.tsx [vike:pluginModuleBanner] */
const codeLanguage = "javascript";
const code = `export default {
  role: 'developer',
  qualifications: [
    'DWWM',
    'CDA',
    'CDUI',
  ]
}`;
const tabs = [
  { name: "memento-dev.config.js", isActive: true },
  { name: "package.json", isActive: false }
];
function TrafficLightsIcon(props) {
  return /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", viewBox: "0 0 42 10", fill: "none", ...props, children: [
    /* @__PURE__ */ jsx("circle", { cx: "5", cy: "5", r: "4.5" }),
    /* @__PURE__ */ jsx("circle", { cx: "21", cy: "5", r: "4.5" }),
    /* @__PURE__ */ jsx("circle", { cx: "37", cy: "5", r: "4.5" })
  ] });
}
function Hero() {
  return /* @__PURE__ */ jsx("div", { className: "overflow-hidden bg-slate-900 dark:mt-[-4.75rem] dark:-mb-32 dark:pt-[4.75rem] dark:pb-32", children: /* @__PURE__ */ jsx("div", { className: "py-16 sm:px-2 lg:relative lg:px-0 lg:py-20", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto grid max-w-2xl w-full grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12", children: [
    /* @__PURE__ */ jsxs("div", { className: "relative z-10 md:text-center lg:text-left", children: [
      /* @__PURE__ */ jsx(
        Image,
        {
          className: "absolute right-full bottom-full -mr-72 -mb-56 opacity-50",
          src: blurCyanImage,
          alt: "",
          width: 530,
          height: 530
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("p", { className: "inline bg-linear-to-r from-indigo-200 via-violet-400 to-indigo-200 bg-clip-text font-display text-5xl tracking-tight text-transparent", children: "Souviens-toi que tu développeras." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-2xl tracking-tight text-slate-400", children: "Découvrez des ressources essentielles pour améliorer tes compétences en développement." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex gap-4 md:justify-center lg:justify-start", children: [
          /* @__PURE__ */ jsx(Button, { href: "/", children: "Accédez aux ressources" }),
          /* @__PURE__ */ jsx(Button, { href: "/", variant: "secondary", children: "Voir sur Github" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative lg:static xl:pl-10", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-x-[-50vw] -top-32 -bottom-48 [mask-image:linear-gradient(transparent,white,white)] lg:-top-32 lg:right-0 lg:-bottom-32 lg:left-[calc(50%+14rem)] lg:[mask-image:none] dark:[mask-image:linear-gradient(transparent,white,transparent)] lg:dark:[mask-image:linear-gradient(white,white,transparent)]", children: /* @__PURE__ */ jsx(HeroBackground, { className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 lg:left-0 lg:translate-x-0 lg:translate-y-[-60%]" }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx(Image, { className: "absolute -top-64 -right-64", src: blurCyanImage, alt: "", width: 530, height: 530 }),
        /* @__PURE__ */ jsx(Image, { className: "absolute -right-44 -bottom-40", src: blurIndigoImage, alt: "", width: 567, height: 567 }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl bg-linear-to-tr from-violet-300 via-violet-300/70 to-purple-300 opacity-10 blur-lg" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 rounded-2xl bg-linear-to-tr from-violet-300 via-violet-300/70 to-purple-300 opacity-10" }),
        /* @__PURE__ */ jsxs("div", { className: "relative rounded-2xl bg-[#0A101F]/80 ring-1 ring-white/10 backdrop-blur-sm", children: [
          /* @__PURE__ */ jsx("div", { className: "absolute -top-px right-11 left-20 h-px bg-linear-to-r from-violet-300/0 via-violet-300/70 to-violet-300/0" }),
          /* @__PURE__ */ jsx("div", { className: "absolute right-20 -bottom-px left-11 h-px bg-linear-to-r from-purple-400/0 via-purple-400 to-purple-400/0" }),
          /* @__PURE__ */ jsxs("div", { className: "pt-4 pl-4", children: [
            /* @__PURE__ */ jsx(TrafficLightsIcon, { className: "h-2.5 w-auto stroke-slate-500/30" }),
            /* @__PURE__ */ jsx("div", { className: "mt-4 flex space-x-2 text-xs", children: tabs.map((tab) => /* @__PURE__ */ jsx(
              "div",
              {
                className: clsx(
                  "flex h-6 rounded-full",
                  tab.isActive ? "bg-linear-to-r from-violet-400/30 via-violet-400 to-violet-400/30 p-px font-medium text-violet-300" : "text-slate-500"
                ),
                children: /* @__PURE__ */ jsx("div", { className: clsx("flex items-center rounded-full px-2.5", tab.isActive && "bg-slate-800"), children: tab.name })
              },
              tab.name
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-start px-1 text-sm", children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  "aria-hidden": "true",
                  className: "border-r border-slate-300/5 pr-4 font-mono text-slate-600 select-none",
                  children: Array.from({
                    length: code.split("\n").length
                  }).map((_, index) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
                    (index + 1).toString().padStart(2, "0"),
                    /* @__PURE__ */ jsx("br", {})
                  ] }, index))
                }
              ),
              /* @__PURE__ */ jsx(Highlight, { code, language: codeLanguage, theme: { plain: {}, styles: [] }, children: ({ className, style, tokens, getLineProps, getTokenProps }) => /* @__PURE__ */ jsx("pre", { className: clsx(className, "flex overflow-x-auto pb-6"), style, children: /* @__PURE__ */ jsx("code", { className: "px-4", children: tokens.map((line, lineIndex) => /* @__PURE__ */ jsx("div", { ...getLineProps({ line }), children: line.map((token, tokenIndex) => /* @__PURE__ */ jsx("span", { ...getTokenProps({ token }) }, tokenIndex)) }, lineIndex)) }) }) })
            ] })
          ] })
        ] })
      ] })
    ] })
  ] }) }) });
}
/*! layouts/LayoutDefault.tsx [vike:pluginModuleBanner] */
function GitHubIcon(props) {
  return /* @__PURE__ */ jsx("svg", { "aria-hidden": "true", viewBox: "0 0 16 16", ...props, children: /* @__PURE__ */ jsx("path", { d: "M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" }) });
}
function Header() {
  let [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 0);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return /* @__PURE__ */ jsxs(
    "header",
    {
      className: clsx(
        "sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none",
        isScrolled ? "dark:bg-slate-900/95 dark:backdrop-blur-sm dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75" : "dark:bg-transparent"
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "mr-6 flex lg:hidden", children: /* @__PURE__ */ jsx(MobileNavigation, {}) }),
        /* @__PURE__ */ jsx("div", { className: "relative flex grow basis-0 items-center", children: /* @__PURE__ */ jsx(Link, { href: "/", "aria-label": "Home page", children: /* @__PURE__ */ jsx(Logo, { className: "h-9 w-auto lg:block" }) }) }),
        /* @__PURE__ */ jsx("div", { className: "-my-5 mr-6 sm:mr-8 md:mr-0", children: /* @__PURE__ */ jsx(Search, {}) }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex basis-0 justify-end gap-6 sm:gap-8 md:grow", children: [
          /* @__PURE__ */ jsx(ThemeSelector, { className: "relative z-10" }),
          /* @__PURE__ */ jsx(Link, { href: "https://gitea.gauthierdaniels.fr/GauthierWebDev/memento-dev", className: "group", "aria-label": "GitHub", children: /* @__PURE__ */ jsx(GitHubIcon, { className: "h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" }) })
        ] })
      ]
    }
  );
}
function DefaultLayout({ children }) {
  const { urlPathname } = usePageContext();
  const isHomePage = urlPathname === "/";
  return /* @__PURE__ */ jsx(ThemeProvider, { children: /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col", children: [
    /* @__PURE__ */ jsx(Header, {}),
    isHomePage && /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsxs("div", { className: "relative mx-auto w-full flex max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "hidden lg:relative lg:block lg:flex-none", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-16 right-0 bottom-0 hidden h-12 w-px bg-linear-to-t from-slate-800 dark:block" }),
        /* @__PURE__ */ jsx("div", { className: "absolute top-28 right-0 bottom-0 hidden w-px bg-slate-800 dark:block" }),
        /* @__PURE__ */ jsx("div", { className: "sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-x-hidden overflow-y-auto py-16 pr-8 pl-0.5 xl:w-72 xl:pr-16", children: /* @__PURE__ */ jsx(Navigation, {}) })
      ] }),
      children
    ] })
  ] }) });
}
/*! pages/+config.ts [vike:pluginModuleBanner] */
const config = {
  // https://vike.dev/head-tags
  title: "Memento Dev"
};
/*! pages/+title.ts [vike:pluginModuleBanner] */
function title() {
  return `Synthèses et ressources pour développeurs - ${config.title}`;
}
const import6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  title
}, Symbol.toStringTag, { value: "Module" }));
export {
  DefaultLayout as D,
  import4 as a,
  config as c,
  import6 as i,
  title as t
};
