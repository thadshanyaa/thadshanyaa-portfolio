/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        canvas: '#050816',
        surface: '#0B1228',
        elevated: '#111B35',
        brand: {
          primary: '#2563EB',
          electric: '#3B82F6',
          cyan: '#22D3EE',
        },
        fg: {
          DEFAULT: '#F8FAFC',
          secondary: '#A7B4CC',
          muted: '#7F8DA8',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
