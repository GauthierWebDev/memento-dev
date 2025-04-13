import prismjsVitePlugin from "vite-plugin-prismjs";
import tailwindcss from "@tailwindcss/vite";
import Unfonts from "unplugin-fonts/vite";
import { telefunc } from "telefunc/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [
    prismjsVitePlugin({
      languages: ["javascript", "typescript", "tsx", "jsx", "css", "html", "bash", "nginx"],
    }),
    Unfonts({
      fontsource: {
        families: ["Inter Variable", "Lexend Variable"],
      },
    }),
    vike({}),
    react({}),
    tailwindcss(),
    telefunc(),
  ],
  build: {
    target: "es2022",
  },
  resolve: {
    alias: {
      "@syntax": __dirname + "/components/syntax",
      "@": __dirname,
    },
  },
});
