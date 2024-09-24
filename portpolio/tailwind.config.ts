import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        text: "var(--color)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        color60: "var(--color60)",
        color50: "var(--color50)",
        color20: "var(--color20)",
        yellow: { "300": "#ffdb67" },
      },
      container: {
        center: true,
      },
    },
  },
  plugins: [],
};
export default config;
