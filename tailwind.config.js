/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#1a1a1a',
        'dark-surface': '#2c2c2c',
        'primary': '#00ffcc',
        'primary-dark': '#00b38f',
        'text-light': '#e0e0e0',
        'text-muted': '#a0a0a0',
      },
      boxShadow: {
        'glow': '0 0 15px 5px rgba(0, 255, 204, 0.2)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};