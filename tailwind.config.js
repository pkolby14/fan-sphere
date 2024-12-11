/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1a1a1a',
          light: '#2a2a2a',
          dark: '#121212',
        },
        accent: {
          blue: '#3b82f6',
          red: '#ef4444',
        },
        text: {
          primary: '#ffffff',
          secondary: '#a3a3a3',
        }
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}
