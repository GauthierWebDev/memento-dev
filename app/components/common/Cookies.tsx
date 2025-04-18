import { onUpdateConsentCookie, onAcceptAllConsentCookie, type ConsentCookies } from "./Cookies.telefunc";
import React, { useState, useContext, createContext } from "react";
import { usePageContext } from "vike-react/usePageContext";
import { reload } from "vike/client/router";
import { Button } from "@syntax/Button";
import { toast } from "react-toastify";
import { Toggle } from "./Toggle";
import { Link } from "./Link";

export const CookiesContext = createContext<{
  cookies: {
    analytics: boolean;
    customization: boolean;
  };
  setCookie: (cookieName: ConsentCookies, cookieValue: boolean) => void;
  acceptAll: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  isSelectionOpen: boolean;
  setIsSelectionOpen: (isSelectionOpen: boolean) => void;
}>({
  cookies: {
    analytics: false,
    customization: false,
  },
  setCookie: (_cookieName: ConsentCookies, _cookieValue: boolean) => {},
  acceptAll: () => {},
  isOpen: false,
  setIsOpen: () => {},
  isSelectionOpen: false,
  setIsSelectionOpen: () => {},
});

type CookiesContainerProps = {
  children?: React.ReactNode;
};

export function CookiesContainer(props: CookiesContainerProps) {
  const { cookies } = usePageContext();

  const [consentCookies, setConsentCookies] = useState(cookies.consent);
  const [isSelectionOpen, setIsSelectionOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(() => {
    return !Object.keys(cookies.consent).every((value) => value);
  });

  const handleUpdateCookie = (cookieName: ConsentCookies, cookieValue: boolean) => {
    setConsentCookies((prev) => ({
      ...prev,
      [cookieName]: cookieValue,
    }));

    toast
      .promise(onUpdateConsentCookie(cookieName, cookieValue), {
        pending: "Mise à jour des cookies...",
        success: "Cookies mis à jour !",
        error: "Erreur lors de la mise à jour des cookies",
      })
      .then(() => {
        setIsOpen(false);
        reload();
      });
  };

  const handleAcceptAll = () => {
    setConsentCookies({ analytics: true, customization: true });

    toast
      .promise(onAcceptAllConsentCookie(), {
        pending: "Acceptation des cookies...",
        success: "Cookies acceptés !",
        error: "Erreur lors de l'acceptation des cookies",
      })
      .then(() => {
        setIsOpen(false);
        setIsSelectionOpen(false);
        reload();
      });
  };

  return (
    <CookiesContext.Provider
      value={{
        cookies: consentCookies,
        setCookie: handleUpdateCookie,
        acceptAll: handleAcceptAll,
        isOpen,
        setIsOpen,
        isSelectionOpen,
        setIsSelectionOpen,
      }}
    >
      {props.children}
      {isSelectionOpen && <CookieChoices />}
      {isOpen && <CookieModal />}
    </CookiesContext.Provider>
  );
}

function CookieChoices() {
  const cookiesContext = useContext(CookiesContext);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
      <div className="relative flex flex-col gap-2 bg-slate-50 dark:bg-slate-800 rounded-md shadow-xl w-full max-w-sm p-4">
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-0 right-0"
          onClick={() => cookiesContext.setIsSelectionOpen(false)}
        >
          Fermer
        </Button>

        <p className="font-display dark:text-slate-300 font-bold text-lg">Personnalisation des cookies 🍪</p>

        <div className="flex flex-col gap-2 w-full items-start">
          <Toggle
            id="cookies-analytics"
            label="Cookies d&lsquo;analyse (Umami et Google Analytics)"
            checked={cookiesContext.cookies.analytics}
            onChange={(checked) => cookiesContext.setCookie("analytics", checked)}
          />

          <Toggle
            id="cookies-customization"
            label="Cookie de personnalisation (thème)"
            checked={cookiesContext.cookies.customization}
            onChange={(checked) => cookiesContext.setCookie("customization", checked)}
          />
        </div>
      </div>
    </div>
  );
}

function CookieModal() {
  const cookiesContext = useContext(CookiesContext);

  return (
    <div className="flex flex-col fixed bottom-4 left-4 bg-slate-50 dark:bg-slate-800 z-50 rounded-md shadow-xl w-full max-w-sm overflow-hidden">
      <Button
        variant="ghost"
        size="sm"
        className="absolute top-0 right-0"
        onClick={() => cookiesContext.setIsOpen(false)}
      >
        Fermer
      </Button>

      <div className="flex flex-col gap-2 p-4">
        <p className="font-display dark:text-slate-300">
          <span className="text-sm">Coucou c&apos;est nous...</span>
          <br />
          <span className="font-bold text-lg">les cookies ! 🍪</span>
        </p>

        <p className="text-slate-700 dark:text-slate-300">
          On ne t&lsquo;embête pas longtemps, on te laisse même le choix <em>(si ça c&lsquo;est pas la classe 😎)</em>.
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
          onClick={() => cookiesContext.setIsOpen(false)}
        >
          Non merci
        </button>

        <button
          className="cursor-pointer px-2 py-1 text-slate-600 dark:text-slate-300"
          onClick={() => cookiesContext.setIsSelectionOpen(true)}
        >
          Je choisis
        </button>

        <button
          className="cursor-pointer px-2 py-1 font-bold text-white dark:text-black bg-violet-600 dark:bg-violet-300"
          onClick={cookiesContext.acceptAll}
        >
          Oui, j&lsquo;ai faim !
        </button>
      </div>
    </div>
  );
}
