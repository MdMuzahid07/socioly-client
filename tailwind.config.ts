// tailwind.config.js
import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "blob": "blob 7s infinite",
        "fade-in": "fadeIn 0.5s ease-out",
        "scale-up": "scaleUp 0.3s ease-out",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.95)" },
          "100%": { transform: "scale(1)" },
        },
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
            background: "#fffbf5", // Soft porcelain/peach tint for "eye peace"
            foreground: "#1c1c1c",
            primary: {
              DEFAULT: "#4f46e5", // Indigo-600 - Premium & Trustworthy
              foreground: "#FFFFFF",
            },
            secondary: {
              DEFAULT: "#ec4899", // Pink-500
              foreground: "#FFFFFF",
            },
            focus: "#4f46e5",
            content1: "#ffffff",
            content2: "#f3f4f6", // gray-100
            content3: "#e5e7eb", // gray-200
            content4: "#d1d5db", // gray-300
          },
        },
        dark: {
          layout: {},
          colors: {
            background: "#0B1121", // Deep Navy - Premium Dark
            foreground: "#f1f5f9", // Slate-100
            primary: {
              DEFAULT: "#6366f1", // Indigo-500 - Vibrant against dark
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#f472b6", // Pink-400
              foreground: "#000000",
            },
            focus: "#6366f1",
            content1: "#151e32", // Rich Navy (Cards)
            content2: "#1e293b", // Slate-800
            content3: "#334155", // Slate-700
            content4: "#475569", // Slate-600
          },
        },
      },
    }),
  ],
};

export default config;
