import { onUpdateThemeCookie } from "@/providers/ThemeProvider.telefunc";
import { ThemeContext, type Theme } from "@/contexts/ThemeContext";
import { usePageContext } from "vike-react/usePageContext";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const { cookies } = usePageContext();
  const [theme, setTheme] = useState<Theme>(props.defaultTheme || "light");

  useEffect(() => {
    const rootElement = document.documentElement;

    rootElement.classList.toggle("dark", theme === "dark");
    rootElement.classList.toggle("light", theme === "light");

    if (cookies.consent.customization) {
      onUpdateThemeCookie(theme).catch(() => {
        toast.error("Erreur lors de la mise à jour du cookie de thème");
      });
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
}
