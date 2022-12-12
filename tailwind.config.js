/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    "screens": {
      "max-md-screen": {"max": "1140px"},
      "max-sm-screen": {"max": "581px"},
    },
  },
  plugins: [],
}
