/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,svelte, ts,js}',
    ],
    purge: ["./src/app.html",'./src/**/*.{svelte,js,ts}'],

  theme: {
    colors: {
      'blue': '#0000ff',
      'red': '#ff0000',
      'green': '#00ff00',
      'yellow': '#ffff00',
      'white': '#ffffff',
      'black': '#000000',
      'dark-green': '#228b22',
      'light-gray': '#d2d2d2',
      'light-grey': '#d2d2d2',
      'dark-gray': '#333333',
      'dark-grey': '#333333',
      'h1-yellow': '#ffff00',
    },
    fontFamily: {
      sans: ['Monoton', 'cursive'],
      serif: ['Alfa Slab One', 'cursive'],
    },
    extend: {
    }
  },
  plugins: [],
}

