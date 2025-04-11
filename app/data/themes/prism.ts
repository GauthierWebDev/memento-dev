import { PrismTheme } from "prism-react-renderer";
import { Theme } from "@/contexts/ThemeContext";
import { themes } from "prism-react-renderer";

export const prismThemes: Record<Theme, PrismTheme> = {
  dark: themes.oneDark,
  light: themes.oneLight,
};
