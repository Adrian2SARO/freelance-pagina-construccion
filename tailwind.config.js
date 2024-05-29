/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'lightred': '#DF3F36',
        'darkgray': '#2F2F2F'
      },
      fontWeight: {
        'extra-thin': 100, // Valor personalizado para "extra thin"
      },
      animation: {
        slide: 'slide 2s linear infinite',
      }
    },
  },
  plugins: [],
}

