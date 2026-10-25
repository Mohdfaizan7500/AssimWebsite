/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#142B45',
          50: '#F4F6F8',
          100: '#E6EBF1',
          200: '#C7D2DE',
          300: '#9AABC0',
          400: '#5E7796',
          500: '#2F4C6F',
          600: '#1F3A5C',
          700: '#1A3350',
          800: '#142B45',
          900: '#0E1F33',
          950: '#081421',
        },
        orange: {
          DEFAULT: '#F28C28',
          50: '#FEF5EC',
          100: '#FDE8D3',
          200: '#FACFA6',
          300: '#F7B478',
          400: '#F5A050',
          500: '#F28C28',
          600: '#D9730F',
          700: '#B25A0B',
          800: '#8A460C',
          900: '#6E390D',
        },
        ink: '#252B33',
        muted: '#6B7280',
        surface: '#F4F6F8',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '90rem',
      },
      boxShadow: {
        card: '0 4px 24px -8px rgba(20, 43, 69, 0.15)',
        'card-hover': '0 20px 48px -12px rgba(20, 43, 69, 0.28)',
        soft: '0 2px 12px -4px rgba(20, 43, 69, 0.12)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.08)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        'fade-in': 'fade-in 0.6s ease-out both',
        'slide-in': 'slide-in 0.3s ease-out both',
        'ken-burns': 'ken-burns 6s ease-out both',
      },
    },
  },
  plugins: [],
};
