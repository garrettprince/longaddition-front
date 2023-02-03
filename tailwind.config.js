/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Metro Sans", "sans-serif"],
        mono: ["Tronica Mono", "monospace"],
      },
      colors: {
        "cta-gradient-1": "#FF0049",
        "cta-gradient-2": "#E205FF",
        misc: "#0072FF",
        media: "#FD0000",
        travel: "#5B00FF",
        music: "#31FF00",
        health: "#FFFF00",
        tech: "#FF7700",
      },
      rotate: {
        270: "270deg",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
