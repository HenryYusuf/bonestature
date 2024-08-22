/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0038ff",

          secondary: "#e02300",

          accent: "#009b5d",

          neutral: "#12131d",

          "base-100": "#1f2635",

          info: "#0085bc",

          success: "#44d15b",

          warning: "#ef9600",

          error: "#ff90a8",
        },
      },
      "light",
      "retro",
      "dracula",
      "cyberpunk",
    ],
  },
  plugins: [require("daisyui")],
};
