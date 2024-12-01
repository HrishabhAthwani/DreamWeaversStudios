
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        helveticaNow: ['Helvetica_Now_Display', 'sans-serif'], // Add your custom font
      },
    },
  },
  plugins: [],
}