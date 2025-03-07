const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: 'class',
  theme: {
     extend: {
      colors: {
        gray: colors.gray,
      }
    },
    container: {
      padding: '2rem',
      center: true,
    },
    fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
    },
    fontSize: {
      'xs': '10px',
      'sm': '12px',
      'base': '14px',
      'lg': '16px',
      'xl': '18px',
    },
  }
}