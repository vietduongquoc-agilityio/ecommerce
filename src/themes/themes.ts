import { colors, fonts } from ".";

export const theme = {
  ...colors,
  ...fonts,
  styles: {
    global: {
      "html, body": {
        fontFamily: "body",
        bg: "white",
      },
    },
  },
};

export default theme;
