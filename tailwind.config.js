export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sakura: {
          50: '#fff7f9',
          100: '#fdecef',
          200: '#f9d1de',
          300: '#f1b2c7',
          400: '#e687aa',
          500: '#d95f8b',
          600: '#c84574',
          700: '#a92f5d',
          800: '#7d2247',
          900: '#551733'
        },
        ink: '#20141a',
        paper: '#fff8f5',
        mist: 'rgba(255, 245, 247, 0.72)',
        lantern: '#ffd7b0'
      },
      fontFamily: {
        display: ['Noto Serif', 'serif'],
        body: ['Plus Jakarta Sans', 'sans-serif']
      },
      boxShadow: {
        soft: '0 20px 60px rgba(34, 12, 20, 0.16)',
        glow: '0 0 60px rgba(255, 195, 205, 0.26)'
      },
      backgroundImage: {
        'sakura-hero': 'radial-gradient(circle at 20% 20%, rgba(255, 230, 236, 0.85), transparent 35%), radial-gradient(circle at 80% 15%, rgba(255, 201, 214, 0.55), transparent 30%), linear-gradient(135deg, rgba(255, 244, 248, 0.94), rgba(245, 210, 224, 0.9))'
      },
      keyframes: {
        drift: {
          '0%': { transform: 'translate3d(0, -8px, 0) rotate(0deg)' },
          '100%': { transform: 'translate3d(0, 30px, 0) rotate(14deg)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.38 },
          '50%': { opacity: 0.72 }
        },
        floatPetal: {
          '0%': { transform: 'translate3d(0, -12vh, 0) rotate(0deg)', opacity: 0 },
          '10%': { opacity: 1 },
          '100%': { transform: 'translate3d(18px, 112vh, 0) rotate(180deg)', opacity: 0 }
        }
      },
      animation: {
        drift: 'drift 5s ease-in-out infinite alternate',
        pulseGlow: 'pulseGlow 6s ease-in-out infinite',
        floatPetal: 'floatPetal 14s linear infinite'
      }
    }
  },
  plugins: []
};