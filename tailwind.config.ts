// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    // ...
    // make sure it's pointing to the ROOT node_module
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {
            primary: {
              DEFAULT: "#006FEE",
              foreground: "#FFFFFF",
            },
            focus: "#006FEE",
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#020617", // slate-950
            foreground: "#f8fafc", // slate-50
            primary: {
              DEFAULT: "#3b82f6", // blue-500
              foreground: "#ffffff",
            },
            focus: "#3b82f6",
            content1: "#0f172a", // slate-900 (cards, dropdowns)
            content2: "#1e293b", // slate-800
            content3: "#334155", // slate-700
            content4: "#475569", // slate-600
          },
        },
      },
    }),
  ],
};

export default config;
