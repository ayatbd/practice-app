/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#E6F4FE",
        secondary: "#E6F4FE",
        tertiary: "#E6F4FE",
        highlight: "#E6F4FE",
      },
    },
  },
  plugins: [],
};
