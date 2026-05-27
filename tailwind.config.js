/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'Inter', 'serif'],
      },
      colors: {
        ink: {
          950: '#0B0509',
          900: '#120711',
          800: '#1A0B18',
          700: '#240D20',
          600: '#2C1027',
        },
        wine: {
          900: '#2A0820',
          800: '#380C29',
          700: '#4A1238',
          600: '#5B1746',
          500: '#7A1F5C',
          400: '#9B2A75',
        },
        gold: {
          500: '#F4B84A',
          400: '#FFD36A',
          300: '#FFE19A',
          200: '#FFEEC2',
        },
        cream: {
          50: '#FBF7FA',
          100: '#F7F1F5',
          200: '#F5F1F4',
          300: '#EEE6EB',
          400: '#E2D6DD',
        },
        orange: {
          50: '#fff7ed',
          100: '#ffedd5',
          200: '#fed7aa',
          300: '#fdba74',
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          800: '#9a3412',
          900: '#7c2d12',
        },
        blue: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      backgroundImage: {
        spotlight:
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(244,184,74,0.18) 0%, rgba(244,184,74,0) 60%)',
        'wine-gradient':
          'linear-gradient(135deg, #120711 0%, #240D20 35%, #380C29 70%, #4A1238 100%)',
        'gold-gradient':
          'linear-gradient(135deg, #FFD36A 0%, #F4B84A 50%, #C68B22 100%)',
        'cream-gradient': 'linear-gradient(180deg, #FBF7FA 0%, #F5F1F4 100%)',
      },
      boxShadow: {
        '3xl': '0 35px 60px -12px rgba(0, 0, 0, 0.45)',
        gold: '0 10px 30px -8px rgba(244, 184, 74, 0.45)',
        wine: '0 20px 50px -15px rgba(56, 12, 41, 0.55)',
        glass:
          '0 30px 60px -20px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.08)',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s infinite',
        'ping-slow': 'ping 3s infinite',
        float: 'float 6s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both',
        'shimmer-gold': 'shimmerGold 6s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmerGold: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      borderWidth: {
        '3': '3px',
      },
      letterSpacing: {
        tight: '-0.025em',
        wide: '0.025em',
        widest: '0.2em',
      },
      fontSize: {
        '8xl': ['6rem', { lineHeight: '1' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
    },
  },
  plugins: [],
};
