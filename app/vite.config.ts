import { telefunc } from "telefunc/vite";
import tailwindcss from "@tailwindcss/vite";
import vikeSolid from "vike-solid/vite";
import { defineConfig } from "vite";
import vike from "vike/plugin";

export default defineConfig({
  plugins: [vike(), vikeSolid(), tailwindcss(), telefunc()],
  build: {
    target: "es2022",
  },
});
