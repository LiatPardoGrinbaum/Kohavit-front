import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    common: {
      black: "#000",
      white: "#fff",
    },
    primary: {
      // main: "#72574a",
      // main: "#703b39",
      // main: "#ad608c", //dark pink
      // light: "#cc7c9f", //light pink
      main: "#bba296",
      dark: "#72574a",
    },
    secondary: {
      main: "#cc7c9f",
      dark: "#ad608c",
    },

    error: {
      main: "#rttr",
    },
  },
  typography: {
    fontFamily: ["Assistant", "sans-serif"].join(","),
    fontSize: 20,
  },
});

/* import { createTheme } from "@mui/material";
export const theme = createTheme({
  palette: {
    primary: {
      // main: "#72574a",
      main: "#703b39",
      light: "#bba296",
    },
    secondary: {
      main: "#a85856",
      light: "#df9e9e",
    },

    error: {
      main: "#rttr",
    },
  },
  typography: {
    fontFamily: ["Assistant", "sans-serif"].join(","),
    fontSize: 20,
  },
});
 */
