import { ThemeContext, type Theme } from "@/contexts/ThemeContext";
import { usePageContext } from "vike-react/usePageContext";
import React, { useEffect, useState } from "react";

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
      console.log(`ThemeProvider: ${theme}`);
      // TODO: update the theme in the cookies
    }
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
}
