import React from 'react'
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  background: "#1E1E1E",
  palette: {
    primary: {
      main: "#141B2F"
    },
    secondary: {
      main: "#ffffff"
    }
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: "#141B2F"
        }
      }
    }
  }
});


const ThemeProvide = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}

export default ThemeProvide