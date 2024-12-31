/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-custom': 'spin 2s linear infinite', // Custom duration: 2 seconds
      },
    },
  },
  plugins: [],
}

