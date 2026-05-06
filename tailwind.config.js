/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#0a0a0f',
          800: '#0f0f1a',
          700: '#111827',
          600: '#1f2937',
        },
        cyan: { DEFAULT: '#00d4ff' },
        blue: { DEFAULT: '#0080ff' },
        purple: { DEFAULT: '#8b5cf6' },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
};
