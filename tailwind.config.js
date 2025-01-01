/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Custom animation configurations
      animation: {
        'spin-custom': 'spin 3s linear infinite', 
      },
    },
  },
  plugins: [],
}

