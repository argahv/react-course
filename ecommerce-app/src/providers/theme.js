import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
} from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "light",
  },
});

export default function ThemeProvider({ children }) {
  return (
    <MUIThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
