import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      'sm': '12px',
      'base': '14px',
      'xl': '16px',
      '2xl': '20px',
      '3xl': '28px',
      '4xl': '38px',
      '5xl': '50px',
  },

  extend: {
      fontFamily: {
        inter: ["'Kanit'", "sans-serif"],
        gelasio: ["'Gelasio'", "serif"],
        ibm: ["'IBM Plex Sans Thai'", "sans-serif"],
        kanit: ["'Kanit'", "sans-serif"]
      },
  },
  },
  plugins: [],
};
export default config;
