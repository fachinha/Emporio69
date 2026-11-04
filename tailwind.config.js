/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#060B12',
          900: '#0A111C', // Deep Midnight Navy (Fondo Principal)
          850: '#0E1726',
          800: '#111C2D', // Fondo Secundario / Cards
          700: '#18263D',
          600: '#223552',
        },
        gold: {
          DEFAULT: '#C89D54', // Primary Accent
          50: '#FBF7EE',
          100: '#F5ECDA',
          200: '#EBD9B5',
          300: '#DFB76C', // Light Gold
          400: '#D5AA5E',
          500: '#C89D54', // Main Gold
          600: '#B3843B', // Dark Gold
          700: '#8E642A',
          800: '#69471D',
          900: '#432C10',
        },
        luxury: {
          text: '#F4F4F6',
          muted: '#9BA3B0',
          border: 'rgba(200, 157, 84, 0.2)',
          borderHover: 'rgba(200, 157, 84, 0.45)',
          glow: 'rgba(200, 157, 84, 0.15)',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
        cursive: ['"Alex Brush"', '"Great Vibes"', 'cursive'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #DFB76C 0%, #C89D54 50%, #B3843B 100%)',
        'gold-gradient-hover': 'linear-gradient(135deg, #F0C980 0%, #DFB76C 50%, #C89D54 100%)',
        'gold-metallic': 'linear-gradient(105deg, #ECC880 0%, #DFB76C 30%, #F5DE9B 45%, #C89D54 65%, #9E7431 100%)',
        'card-gradient': 'linear-gradient(180deg, rgba(17, 28, 45, 0.85) 0%, rgba(10, 17, 28, 0.95) 100%)',
        'hero-gradient': 'radial-gradient(circle at 70% 30%, rgba(200, 157, 84, 0.08) 0%, rgba(10, 17, 28, 0) 60%)',
      },
      boxShadow: {
        'gold-glow': '0 0 25px rgba(200, 157, 84, 0.25)',
        'gold-glow-lg': '0 0 45px rgba(200, 157, 84, 0.35)',
        'card-dark': '0 10px 30px -10px rgba(0, 0, 0, 0.6), 0 0 1px 1px rgba(200, 157, 84, 0.15)',
        'float-shadow': '0 25px 40px -15px rgba(0, 0, 0, 0.9)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.08)' },
        },
        smokeDrift: {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: '0.2' },
          '50%': { transform: 'translate(15px, -20px) scale(1.15)', opacity: '0.35' },
          '100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.2' },
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'smoke-drift': 'smokeDrift 12s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
