/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['Source Sans Pro', 'sans-serif']
      },
      colors: {
        darkGreen: "#355A20",
        texasGreen: "#059033",
        dollar: "#93CB56",
        palm: "#7BAA47",
        grey: "#D9D9D6",
        red: "#FF0000"
      },
    },
  },
  darkMode: 'media',
  plugins: [],
}

