import { onUpdateConsentCookie, onAcceptAllConsentCookie } from "./LayoutDefault.telefunc";
import { MobileNavigation } from "@syntax/MobileNavigation";
import { usePageContext } from "vike-react/usePageContext";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { ToastContainer, toast } from "react-toastify";
import { ThemeSelector } from "@syntax/ThemeSelector";
import { Button } from "@/components/syntax/Button";
import { Toggle } from "@/components/common/Toggle";
import { clientOnly } from "vike-react/clientOnly";
import React, { useEffect, useState } from "react";
import { Navigation } from "@syntax/Navigation";
import { Link } from "@/components/common/Link";
import { reload } from "vike/client/router";
import { Hero } from "@syntax/Hero";
import { Logo } from "@syntax/Logo";
import clsx from "clsx";

import "./style.css";
import "./tailwind.css";
import "./prism.css";
import "unfonts.css";

const Search = clientOnly(() => import("@syntax/Search").then((module) => module.Search));

function GitHubIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" {...props}>
      <path d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z" />
    </svg>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 flex flex-none flex-wrap items-center justify-between bg-white px-4 py-5 shadow-md shadow-slate-900/5 transition duration-500 sm:px-6 lg:px-8 dark:shadow-none",
        isScrolled
          ? "dark:bg-slate-900/95 dark:backdrop-blur-sm dark:[@supports(backdrop-filter:blur(0))]:bg-slate-900/75"
          : "dark:bg-transparent",
      )}
    >
      <div className="mr-6 flex lg:hidden">
        <MobileNavigation />
      </div>

      <div className="relative flex grow basis-0 items-center">
        <Link href="/" aria-label="Home page" className="flex items-center gap-2">
          <Logo className="h-9 w-auto" />
          <span className="hidden lg:inline text-2xl font-bold -tracking-tight">Memento Dev</span>
        </Link>
      </div>

      <div className="-my-5 mr-6 sm:mr-8 md:mr-0">
        <Search fallback={<div className="h-6 w-6 animate-pulse rounded-full bg-slate-200 dark:bg-slate-700" />} />
      </div>

      <div className="relative flex basis-0 justify-end gap-6 sm:gap-8 md:grow">
        <ThemeSelector className="relative z-10" />
        <Link href="https://github.com/GauthierWebDev/memento-dev" className="group" aria-label="GitHub">
          <GitHubIcon className="h-6 w-6 fill-slate-400 group-hover:fill-slate-500 dark:group-hover:fill-slate-300" />
        </Link>
      </div>
    </header>
  );
}

function CookieModal() {
  const { cookies } = usePageContext();

  const [consentCookies, setConsentCookies] = useState(cookies.consent);
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(() => {
    return Object.keys(cookies.consent).every((value) => value);
  });

  if (isSelectionOpen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
        <div className="relative flex flex-col gap-2 bg-slate-50 dark:bg-slate-800 rounded-md shadow-xl w-full max-w-sm p-4">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-0 right-0"
            onClick={() => setIsSelectionOpen(false)}
          >
            Fermer
          </Button>

          <p className="font-display dark:text-slate-300 font-bold text-lg">Personnalisation des cookies 🍪</p>

          <div className="flex flex-col gap-2 w-full items-start">
            <Toggle
              id="cookies-analytics"
              label="Cookies d'analyse (Umami et Google Analytics)"
              checked={consentCookies.analytics}
              onChange={(checked) => {
                setConsentCookies({ ...consentCookies, analytics: checked });

                toast
                  .promise(onUpdateConsentCookie("analytics", checked), {
                    pending: "Mise à jour des cookies...",
                    success: "Cookies mis à jour !",
                    error: "Erreur lors de la mise à jour des cookies.",
                  })
                  .finally(reload);
              }}
            />

            <Toggle
              id="cookies-customization"
              label="Cookie de personnalisation (thème)"
              checked={consentCookies.customization}
              onChange={(checked) => {
                setConsentCookies({ ...consentCookies, analytics: checked });

                toast
                  .promise(onUpdateConsentCookie("customization", checked), {
                    pending: "Mise à jour des cookies...",
                    success: "Cookies mis à jour !",
                    error: "Erreur lors de la mise à jour des cookies.",
                  })
                  .then((data) => {
                    setConsentCookies({ ...consentCookies, [data.cookieName]: data.cookieValue });
                    reload();
                  });
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  if (!isOpen) return null;

  return (
    <div className="flex flex-col fixed bottom-4 left-4 bg-slate-50 dark:bg-slate-800 z-50 rounded-md shadow-xl w-full max-w-sm overflow-hidden">
      <Button variant="ghost" size="sm" className="absolute top-0 right-0" onClick={() => setIsOpen(false)}>
        Fermer
      </Button>

      <div className="flex flex-col gap-2 p-4">
        <p className="font-display dark:text-slate-300">
          <span className="text-sm">Coucou c'est nous...</span>
          <br />
          <span className="font-bold text-lg">les cookies ! 🍪</span>
        </p>

        <p className="text-slate-700 dark:text-slate-300">
          On ne t'embête pas longtemps, on te laisse même le choix <em>(si ça c'est pas la classe 😎)</em>.
        </p>

        <p className="text-slate-700 dark:text-slate-300">
          Si tu veux en savoir plus, tu peux consulter la page{" "}
          <Link href="/politique-de-confidentialite" className="font-bold">
            Politique de confidentialité
          </Link>
          .
        </p>
      </div>

      <div className="grid items-center grid-cols-3 justify-between bg-slate-100 dark:bg-slate-700">
        <button
          className="cursor-pointer px-2 py-1 text-slate-600 dark:text-slate-300"
          onClick={() => setIsOpen(false)}
        >
          Non merci
        </button>

        <button
          className="cursor-pointer px-2 py-1 text-slate-600 dark:text-slate-300"
          onClick={() => setIsSelectionOpen(true)}
        >
          Je choisis
        </button>

        <button
          className="cursor-pointer px-2 py-1 font-bold text-white dark:text-black bg-violet-600 dark:bg-violet-300"
          onClick={() => {
            setConsentCookies({ analytics: true, customization: true });

            toast
              .promise(onAcceptAllConsentCookie(), {
                pending: "Mise à jour des cookies...",
                success: "Cookies mis à jour !",
                error: "Erreur lors de la mise à jour des cookies.",
              })
              .then(() => {
                setIsOpen(false);
                setIsOpen(false);
                reload();
              });
          }}
        >
          Oui, j'ai faim !
        </button>
      </div>
    </div>
  );
}

export default function DefaultLayout({ children }: { children: React.ReactNode }) {
  const { urlPathname, cookies } = usePageContext();
  const isHomePage = urlPathname === "/";

  return (
    <ThemeProvider defaultTheme={cookies.settings.theme}>
      <CookieModal />

      <div className="flex w-full flex-col font-sans">
        <Header />

        {isHomePage && <Hero />}

        <div className="relative mx-auto w-full flex max-w-8xl flex-auto justify-center sm:px-2 lg:px-8 xl:px-12">
          <div className="hidden lg:relative lg:block lg:flex-none">
            <div className="absolute inset-y-0 right-0 w-[50vw] bg-slate-50 dark:hidden" />
            <div className="absolute top-16 right-0 bottom-0 hidden h-12 w-px bg-linear-to-t from-slate-800 dark:block" />
            <div className="absolute top-28 right-0 bottom-0 hidden w-px bg-slate-800 dark:block" />
            <div className="sticky top-[4.75rem] -ml-0.5 h-[calc(100vh-4.75rem)] w-64 overflow-x-hidden overflow-y-auto py-16 pr-8 pl-0.5 xl:w-72 xl:pr-16">
              <Navigation />
            </div>
          </div>
          {children}
        </div>
      </div>
      <ToastContainer />
    </ThemeProvider>
  );
}
