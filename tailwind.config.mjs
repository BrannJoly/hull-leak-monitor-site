/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#141414",
        "panel-black": "#1b1b18",
        mist: "#f4f7f5",
        copper: "#b36a2e",
        signal: "#36b05f",
        warning: "#e2a72d",
        danger: "#d5463f",
      },
      boxShadow: {
        instrument: "0 24px 70px rgba(20, 20, 20, 0.22)",
        lift: "0 18px 45px rgba(20, 20, 20, 0.1)",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
