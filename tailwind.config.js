/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".dist/index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    fontFamily: {
      sans: [
        "SofiaProRegular, sans-serif"
      ],
      serif: [
        "StixGeneral, serif"
      ]
    },
    extend: {
      animation: {
        "fade-in": "fadeIn 0.75s ease-in-out"
      },
      keyframes: () => ({
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 }
        }
      }),
      colors: {
        'pr-green': '#002B2C',
        'pr-dark-green': '#002425',
        'pr-green-accent': '#97D100',
        'pr-beige': '#DBDCC9'
      }
    },
  },
  plugins: [],
}

