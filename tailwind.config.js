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
    },
  },
  plugins: [],
}

