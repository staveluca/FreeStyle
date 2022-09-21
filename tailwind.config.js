/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      // add font family
      fontFamily: {
        'betty': ['"Betty"']
      },

      // add custom colors
      colors: {
        'custom-pink': '#FAE0E4',
        'custom-black': '#202020',
        'custom-purple': '#A391E1'
      },

      // add custom spacing
      spacing: {
        '15': '15px',
        '18': '18px',
        '11c': '11px',
        '27': '27px',
        '30': '30px',
        '33': '33px',
        '48': '48px',
        '54': '54px',
        '56': '56px',
        '68': '68px',
        '75': '75px',
        '100': '100px',
        '114': '114px',
        '229': '229px'
      },

      // add custom shadow
      dropShadow: {
        'custom-shadow': '2px 4px 5px rgba(163, 145, 225, 0.5)',
      },

      // add custom borders
      borderWidth: {
        'custom':'0.5px'
      }
    },
  },
  plugins: [],
}
