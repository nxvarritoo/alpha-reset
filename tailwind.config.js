/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { navy: '#071629', ink: '#0B1F36', teal: '#17B9AD', mist: '#F4F6F8' },
      fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], display: ['Arial Black', 'Inter', 'sans-serif'] },
      boxShadow: { soft: '0 20px 50px rgba(7,22,41,.10)', glow: '0 15px 45px rgba(23,185,173,.22)' },
    },
  },
  plugins: [],
}
