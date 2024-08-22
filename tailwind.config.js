/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Manrope", "sans-serif"],
    },

    fontWeight: {
      normal: "500",
      bold: "800",
    },

    colors: {
      "light-cyan": "hsl(193, 38%, 86%)",
      "neon-green": "hsl(150, 100%, 66%)",

      "grayish-blue": "hsl(217, 19%, 38%)",
      "dark-grayish-blue": "hsl(217, 19%, 24%)",
      "dark-blue": "hsl(218, 23%, 16%)",
    },

    screens: {
      sm: "570px",
    },

    extend: {
      dropShadow: {
        custom: "0 25px 25px rgb(0 0 0 / 0.1)",
      },

      boxShadow: {
        green: "0 0 40px 0 hsl(150, 100%, 66%)",
        disabled: "0 0 40px 0 hsl(193, 38%, 86%)",
      },
    },
  },
  plugins: [],
};
