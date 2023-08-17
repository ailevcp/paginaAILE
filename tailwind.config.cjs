/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat Variable", ...defaultTheme.fontFamily.sans],
        body: ["Lato", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'violet': '#6314a7',
        'white': '#ffffff',
        'light-gray': '#e6e6e6',
        'pink': '#e50051',
      },
      backgroundImage: {
        'aile-bg': "url('/src/assets/AILE/ailePortada.jpg')",
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
