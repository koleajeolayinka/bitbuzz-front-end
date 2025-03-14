/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "space-mono": "Space Mono",
        "darker-grotesque": "Darker Grotesque"
      },
      colors: {
        "primary-purple": "#5C006A",
        "app-black": "#191919"
      },
      backgroundImage: {
        "login-img": "url('/images/bit-buzz-signin.svg')",
      }
    },
  },
  plugins: [],
}