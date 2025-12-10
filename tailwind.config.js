/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // or 'media' — doesn't matter here
  theme: {
    extend: {
      colors: {
        // ✅ Define custom colors used in @apply
        dark: '#0F0F0F',
        neon: '#39FF14',
      },
    },
  },
  plugins: [],
}