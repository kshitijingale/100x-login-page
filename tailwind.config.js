/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#f9f9f9",
        "neutral-200": "#E4E4E4",
        "neutral-500": "#737373",
        "twitter-blue": "#1D9BF0",
        "stroke": "#1D9BF03D"

      },
      fontFamily: {
        'Inter': ['Inter']
      }
    },
  },
  plugins: [],
}

