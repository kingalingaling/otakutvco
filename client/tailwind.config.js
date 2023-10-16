/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  plugins: [require("tw-elements/dist/plugin")],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "expect-lg": "url('/assets/images/expect-lg.png')"
      }
    },
  },
}

