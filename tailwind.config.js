/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        maurenTrial: ["Mauren"],
        maurenThin: ["Mauren-Thin"],
        focus: ["Focus"],
        focusItalic: ["Focus-Italic"],
        Mogra: ["Mogra"],
      },
      colors: {
        turqoise: "#019785",
        orange: "#FE8B3C",
        blue: "#3673A2",
        lightPink: "#FFE6E6",
      },
    },
  },
  plugins: [],
}

