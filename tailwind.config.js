/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightBlue: "#F8FAFC",
        lightGrey: "#4B5565",
        darkBlue: "#0F00D1",
        darkBlack: "#121926",
        bgBlue: "#EEF2F6",
      },
    },
  },
  plugins: [],
};
