import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      roboto: ["roboto"]
    },
    extend: {
      screens: {
        "max-md": {"max": "800px"},
        "max-sm": {"max":"428px"}
      },
      colors: {
        primary:"#000000",
        secondary: "#FFFFFF",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
export default config;
