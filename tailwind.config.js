/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          dark: '#070716',
          deep: '#0d0d2b',
          purple: '#6d28d9',
          violet: '#8b5cf6',
          nebula: '#c026d3',
          star: '#e0e7ff',
          glow: '#a78bfa',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      backgroundImage: {
        'space-gradient': 'radial-gradient(ellipse at top, #1e1b4b 0%, #0d0d2b 45%, #070716 100%)',
        'nebula-gradient': 'linear-gradient(135deg, #6d28d9 0%, #c026d3 100%)',
      },
      boxShadow: {
        glow: '0 0 30px rgba(167, 139, 250, 0.35)',
        'glow-lg': '0 0 60px rgba(167, 139, 250, 0.4)',
      },
      animation: {
        twinkle: 'twinkle 4s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
      },
      keyframes: {
        twinkle: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}