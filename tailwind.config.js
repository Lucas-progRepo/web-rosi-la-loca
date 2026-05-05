/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        bg: '#f4ecdf',
        surface: '#fbf6ec',
        ink: '#1f1410',
        'ink-soft': 'rgba(31, 20, 16, 0.65)',
        accent: '#a83828',
        'accent-soft': '#e8c9b8',
        line: 'rgba(31, 20, 16, 0.12)'
      },
      fontFamily: {
        display: ['var(--font-fraunces)', 'serif'],
        body: ['var(--font-manrope)', 'system-ui', 'sans-serif']
      },
      transitionTimingFunction: {
        'out-strong': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-out-strong': 'cubic-bezier(0.77, 0, 0.175, 1)'
      }
    }
  },
  plugins: []
};
