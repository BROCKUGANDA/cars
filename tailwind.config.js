/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'lamborghini': {
          'yellow': '#FFD700',  // Lamborghini Yellow
          'red': '#FF0000',     // Lamborghini Red
          'black': '#000000',   // Pure Black
          'gray': '#1A1A1A',    // Dark Gray
          'gold': '#B8860B',    // Gold Accent
        },
        'midnight-blue': '#0A1128',
        'silver-metallic': '#CCCCCC',
        'carbon-black': '#121212',
        'charcoal': '#222222',
        'soft-white': '#F8F8F8',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'rev-engine': 'rev 0.5s ease-in-out infinite',
        'speed-line': 'speedLines 2s linear infinite',
        'pulse-subtle': 'pulsate 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(255, 215, 0, 0.5)' },
          '50%': { textShadow: '0 0 30px rgba(255, 215, 0, 0.8)' },
        },
        rev: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03)' },
        },
        speedLines: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        pulsate: {
          '0%, 100%': { opacity: 0.7 },
          '50%': { opacity: 1 },
        }
      },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      opacity: {
        '85': '0.85',
      },
      borderWidth: {
        '0.5': '0.5px',
      },
      height: {
        '0.5': '0.125rem',
      },
      maxWidth: {
        '8xl': '90rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
      },
      backgroundOpacity: {
        '15': '0.15',
      },
    },
  },
  plugins: [],
} 