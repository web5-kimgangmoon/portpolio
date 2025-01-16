import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: { max: "767px" },
        md: { max: "1279px", min: "768px" },
      },
      colors: {
        text: "var(--color)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        color75: "var(--color75)",
        color60: "var(--color60)",
        color50: "var(--color50)",
        color20: "var(--color20)",
        yellow: { "300": "#ffdb67" },
      },
      container: {
        center: true,
      },
      cursor: {
        custom_dark_upX: "url(/cursors/cursor_dark_upX.svg), default",
        custom_dark: "url(/cursors/cursor_dark.svg), default",
        custom_dark_downX: "url(/cursors/cursor_dark_downX.svg), default",

        custom_upX: "url(/cursors/cursor_upX.svg), default",
        custom: "url(/cursors/cursor.svg), default",
        custom_downX: "url(/cursors/cursor_downX.svg), default",
      },
    },
  },
  plugins: [],
};
export default config;
