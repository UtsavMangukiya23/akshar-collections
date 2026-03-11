/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a9ba',
          400: '#ec7796',
          500: '#df4b74',
          600: '#cc2a5c',
          700: '#ab1e4a',
          800: '#7B1E3A',
          900: '#6a1a33',
          950: '#3d0a1a',
        },
        gold: {
          50: '#fdfbef',
          100: '#faf5d0',
          200: '#f5e99d',
          300: '#edd86a',
          400: '#D4AF37',
          500: '#c99a20',
          600: '#b07918',
          700: '#8f5917',
          800: '#77481a',
          900: '#653c1b',
          950: '#3a1f0b',
        },
        cream: {
          50: '#FFF8F0',
          100: '#FFF3E6',
          200: '#FFE8CC',
          300: '#FFD9AD',
          400: '#FFC98F',
          500: '#FFB870',
        },
        charcoal: '#333333',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        body: ['Poppins', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
