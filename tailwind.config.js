export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fff7ed',
          100: '#ffedd5',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
          900: '#7c2d12',
        },
      },
      fontFamily: {
        sans: ['JetBrains Mono', 'IBM Plex Mono', 'Fira Code', 'SFMono-Regular', 'Consolas', 'monospace'],
        mono: ['JetBrains Mono', 'IBM Plex Mono', 'Fira Code', 'SFMono-Regular', 'Consolas', 'monospace'],
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '6px',
        md: '8px',
        lg: '10px',
        xl: '14px',
      },
      boxShadow: {
        xs: '0 1px 0 rgba(0, 0, 0, 0.4)',
        sm: '0 1px 2px rgba(0, 0, 0, 0.5)',
        md: '0 4px 16px rgba(0, 0, 0, 0.55)',
        lg: '0 24px 60px rgba(0, 0, 0, 0.7)',
      },
    },
  },
  plugins: [],
}
