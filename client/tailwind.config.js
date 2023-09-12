module.exports = {
  mode: 'jit',
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'], // remove unused styles in production
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-1fr': 'auto 1fr',
      },
      gridTemplateRows: {
        layout: '100px auto 100px',
        layoutMobile: '0.5fr 2fr 1.5fr 1fr',
        content: '1fr 3fr',
      },
      fontSize: {
        xxs: '0.625rem',
        xs: '0.75rem',
        sm: '0.8rem',
        md: '0.9rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
