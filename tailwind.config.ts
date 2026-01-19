import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
      },
    },
  },
  plugins: [],
};

export default config;

