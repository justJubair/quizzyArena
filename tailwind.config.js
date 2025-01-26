/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "grid-shift": {
          "0%": { transform: "translateX(0) translateY(0)" },
          "100%": { transform: "translateX(-52px) translateY(-52px)" },
        },
      },
      animation: {
        "grid-shift": "grid-shift 5s linear infinite",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {},
    },
  },
  plugins: [require("tailwindcss-animate")],
};
