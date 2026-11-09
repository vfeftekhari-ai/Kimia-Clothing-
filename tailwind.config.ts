import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#894b5f",
        "primary-container": "#d98fa5",
        "on-primary": "#ffffff",
        "on-primary-container": "#5f283b",
        "primary-fixed": "#ffd9e2",
        "primary-fixed-dim": "#ffb1c7",
        "on-primary-fixed": "#38091c",
        "on-primary-fixed-variant": "#6e3448",
        "inverse-primary": "#ffb1c7",

        secondary: "#665c60",
        "secondary-container": "#eadce1",
        "on-secondary": "#ffffff",
        "on-secondary-container": "#6a6064",
        "secondary-fixed": "#eddfe4",
        "secondary-fixed-dim": "#d1c3c8",
        "on-secondary-fixed": "#211a1d",
        "on-secondary-fixed-variant": "#4e4448",

        tertiary: "#8d4961",
        "tertiary-container": "#dd8ca7",
        "on-tertiary": "#ffffff",
        "on-tertiary-container": "#61253d",
        "tertiary-fixed": "#ffd9e3",
        "tertiary-fixed-dim": "#ffb0c9",
        "on-tertiary-fixed": "#3a051e",
        "on-tertiary-fixed-variant": "#71324a",

        surface: "#fff8f8",
        "surface-dim": "#e9d5db",
        "surface-bright": "#fff8f8",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#fff0f4",
        "surface-container": "#fde9ef",
        "surface-container-high": "#f8e3e9",
        "surface-container-highest": "#f2dde4",
        "surface-variant": "#f2dde4",
        "surface-tint": "#894b5f",

        "on-surface": "#23191d",
        "on-surface-variant": "#514346",
        "inverse-surface": "#392d32",
        "inverse-on-surface": "#ffecf2",

        outline: "#847377",
        "outline-variant": "#d6c1c5",

        background: "#fff8f8",
        "on-background": "#23191d",

        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff",
        "on-error-container": "#93000a",
      },
      borderRadius: {
        DEFAULT: "1rem",
        lg: "2rem",
        xl: "3rem",
        full: "9999px",
      },
      spacing: {
        gutter: "1.5rem",
        "gutter-mobile": "0.75rem",
        margin: "3rem",
        "margin-mobile": "1rem",
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
      },
      fontFamily: {
        sans: ["Vazirmatn", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        headline: ["Plus Jakarta Sans", "Vazirmatn", "sans-serif"],
        body: ["Vazirmatn", "Plus Jakarta Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
