import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0891b2"
        },
        secondary: {
          DEFAULT: "#10b981"
        },
        accent: {
          DEFAULT: "#fb923c"
        }
      }
    },
  },
  plugins: [],
};
export default config;
