import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      /* main: '#167cba', */
      main: "#56449e",
      dark: "#45367e",
      contrastText: "#fff",
    },
    secondary: {
      main: "#45367e",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
        textTransform: "none",
        fontSize: 16,
        height: 40,
        fontWeight: 700,
      },
      textPrimary: {
        paddingLeft: 20,
        paddingRight: 20,
      },
      outlinedPrimary: {
        borderColor: "#56449e",
      },
    }
  },
});
