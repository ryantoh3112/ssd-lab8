import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs}"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      security: pluginSecurity,
    },
    rules: {
      ...js.configs.recommended.rules,
      "security/detect-eval-with-expression": "error", // Example rule
    },
  },
]);