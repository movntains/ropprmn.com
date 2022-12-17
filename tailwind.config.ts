/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.vue',
    './layouts/**/*.vue',
    './nuxt.config.{js,ts}',
    './plugins/**/*.{js,ts}',
    './components/**/*.{js,vue,ts}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        brand: {
          black: '#030305',
          charcoal: '#131314',
          orange: '#FF9E64',
          purple: '#bb9af7',
          teal: '#0DB9D7',
          slate: '#8892b0',
          'slate-light': '#a8b2d1',
          'slate-lighter': '#ccd6f6',
          'slate-lightest': '#dce7ff',
        },
      },
      fontFamily: {
        body: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
