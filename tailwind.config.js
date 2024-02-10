/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {},
    screens: {
      'ss': '480px',
      'sm': '600px',
      'md': '840px',
      'lg': '960px',
      'xl': '1280px',
      'hd': '1440px',
      'fhd': '1600px',
    },
  },
  plugins: [],
}

