import { red } from "@mui/material/colors"
import { createTheme } from "@mui/material/styles"

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  typography: {
    subtitle1: {
      color: "#7D7987",
    },
    h4: {
      fontSize: "2.125rem",
      "@media (max-width:600px)": {
        fontSize: "1.5rem",
      },
    },
    h5: {
      fontSize: "1.5rem",
      "@media (max-width:600px)": {
        fontSize: "1.25rem",
      },
    },
    h6: {
      fontSize: "1.25rem",
      "@media (max-width:600px)": {
        fontSize: "1.125rem",
      },
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#458FF6",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#000",
      secondary: "#7D7987",
      disabled: "#CCC",
    },
  },
  shape: {
    borderRadius: 20,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "@media (max-width:600px)": {
            fontSize: "0.875rem",
            padding: "8px 16px",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          "@media (max-width:600px)": {
            margin: "8px",
          },
        },
      },
    },
  },
})

export default theme
