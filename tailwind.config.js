/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        40: "40px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "",
          foreground: "var(--secondary-foreground)",
        },
        border: "var(--primary)",
        input: "var(--input)",
        ring: "var(--ring)",
        gray: {
          DEFAULT: "var(--gray)",
          light: "var(--light-gray)",
          dark: "var(--dark-gray)",
        },
        red: {
          DEFAULT: "var(--red)",
        },
        green: "var(--green)",
      },
      fontFamily: {
        estedad: ["estedad", "system-ui"],
        pelak: ["pelak", "system-ui"],
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("tailwindcss-animate")],
};
