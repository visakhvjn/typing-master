/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: 'white',
        darkBody: '#0f172a',
        primary: '#6366f1',
        secondary: '#94a3b8'
      }
    },
  },
  plugins: [],
}

