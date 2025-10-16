import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-unused-vars": "off",
      
      // Prevent inline Tailwind colors on interactive elements
      "no-restricted-syntax": [
        "warn",
        {
          selector: 'JSXAttribute[name.name="className"][value.value=/(bg|text|border|hover:bg|hover:text|hover:border)-(blue|green|emerald|indigo|red|orange|purple|yellow)-(\\d{3})/]',
          message: "❌ Inline Tailwind-färger (bg-*/text-*/hover:bg-*) är inte tillåtna på interaktiva element. Använd design system-klasser (.fg-btn, .fg-btn--secondary, .fg-btn--danger, etc.)",
        },
        {
          selector: 'JSXOpeningElement[name.name="Button"] JSXAttribute[name.name="className"][value.value=/bg-[a-z]+-\\d{3}/]',
          message: "❌ Button-komponenter ska använda design system-klasser (.fg-btn, .fg-btn--secondary, .fg-btn--danger) istället för inline bg-* klasser.",
        },
      ],
    },
  }
);
