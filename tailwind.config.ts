import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0f172a",
          foreground: "#f8fafc"
        },
        brand: "#0284c7"
      }
    }
  },
  plugins: []
};

export default config;
