/** @type {import('tailwindcss').Config} */
// import './src/app/index.tsx'
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/app/_layout.tsx", "./src/app/index.tsx" , "./App.tsx", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}