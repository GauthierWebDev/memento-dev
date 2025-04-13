import { ThemeContext, type Theme } from "@/contexts/ThemeContext";
import { useEffect, useState } from "react";

type ThemeProviderProps = {
  children: React.ReactNode;
  defaultTheme?: Theme;
};

export function ThemeProvider(props: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(props.defaultTheme || "light");

  useEffect(() => {
    const rootElement = document.documentElement;

    rootElement.classList.toggle("dark", theme === "dark");
    rootElement.classList.toggle("light", theme === "light");
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{props.children}</ThemeContext.Provider>;
}
