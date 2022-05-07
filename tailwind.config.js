const theme = require("./src/themes/");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    colors: {
      ...theme.colors,
      ...defaultTheme.colors,
    },
    fontFamily: {
      ...theme.fonts,
    },
    fontSize: {
      ...theme.fontSize,
    },
    borderWidth: {
      ...theme.borders,
      ...defaultTheme.borderWidth,
    },
    borderRadius: {
      ...theme.borderRadius,
      ...defaultTheme.borderRadius,
    },
    spacing: {
      ...theme.spacings,
      ...defaultTheme.spacing,
    },
    fontWeight: {
      ...theme.fontWeight,
    },
  },
  plugins: [],
};
