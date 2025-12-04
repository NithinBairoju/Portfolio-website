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
          black: '#050505', // Deeper black
          lime: '#84CC16',
          yellow: '#FACC15',
        },
        accent: {
          'lime-light': '#A3E635',
          'lime-dark': '#65A30D',
          'yellow-light': '#FDE047',
          'yellow-dark': '#EAB308',
        }
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      backgroundImage: {
        'gradient-lime': 'linear-gradient(to right, #84CC16, #A3E635)',
        'gradient-yellow': 'linear-gradient(to right, #FACC15, #FDE047)',
        'gradient-accent': 'linear-gradient(135deg, #84CC16, #FACC15)',
        'noise': "url('/noise.png')", // We will need a noise asset or CSS generator
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 1s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
      letterSpacing: {
        'tightest': '-0.05em',
        'widest': '0.2em',
      }
    },
  },
  plugins: [],
}
