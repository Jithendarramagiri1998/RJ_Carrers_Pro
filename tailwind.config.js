/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: { sans: ['"Poppins"', 'sans-serif'] },
      colors: { primary: '#4f46e5', accent: '#14b8a6' },
      animation: { 'fade-up': 'fadeUp 0.8s ease-in-out' },
      keyframes: {
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(30px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } }
      }
    },
  },
  plugins: [],
};
