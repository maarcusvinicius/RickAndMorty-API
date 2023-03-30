import dark from "./dark.ts";

const defaultTheme = {
  fontSizes: {
    small: "16px",
    medium: "18px",
    large: "20px",
  },
};

function combineTheme(theme) {
  return { ...defaultTheme, ...theme };
}

export { combineTheme, dark };