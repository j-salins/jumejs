/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    ".dist/index.html",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
				sofia_regular: ['SofiaProRegular'],
			},
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

