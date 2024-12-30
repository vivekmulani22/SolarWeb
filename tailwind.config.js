module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/index.html", // Include your HTML files if necessary
  ],
  darkMode: false,
  theme: {
    extend: {
      transitionDuration: ["hover", "focus"],
      fontSize: {
        sm: ["15px"],
        base: ["16px", "24px"],
        lg: ["25px", "28px"],
        xl: "40px",
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen sm": { maxWidth: "600px" },
          "@screen md": { maxWidth: "765px" },
          "@screen lg": { maxWidth: "1320px" },
          "@screen xl": { maxWidth: "1320px" },
        },
      });
    },
  ],
};
