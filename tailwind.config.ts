import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        circle: {
          "100%": { transform: "rotate(360deg)" },
        },
      },
      animation: {
        circle: "circle 20s linear infinite",
      },
    },
  },
};
export default config;
