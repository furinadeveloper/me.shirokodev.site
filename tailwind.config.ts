import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "dark-main": "#121212",
      "dark-main-100": "#393939",
      "light-main": "#ffffff",
      "light-main-100": "#f5f5f5",
      "dark-state": "#00ffff",
      "light-state": "#811188",
      idle: "#FACC15",
      dnd: "#F23F43",
      online: "#4ade80",
      offline: "#5B5C6F",
    },
  },
  darkMode: ["class", '[data-mode="dark"]'],
  plugins: [],
};
export default config;
