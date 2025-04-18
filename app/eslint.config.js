// @ts-nocheck

import react from "eslint-plugin-react/configs/recommended.js";
import prettier from "eslint-plugin-prettier/recommended";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import globals from "globals";

export default tseslint.config(
  {
    ignores: [
      "dist/*",
      "data/snippets/*",
      // Temporary compiled files
      "**/*.ts.build-*.mjs",

      // JS files at the root of the project
      "*.js",
      "*.cjs",
      "*.mjs",
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        sourceType: "module",
        ecmaVersion: "latest",
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-unused-vars": [1, { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-namespace": 0,
      "react/react-in-jsx-scope": "warn",
      "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    },
  },

  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...react,
    languageOptions: {
      ...react.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },

  prettier,
);
