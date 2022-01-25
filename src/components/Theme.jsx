import React from 'react';
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from "@mui/material/CssBaseline";


const MainTheme = ({ children }) => {
  const darkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    }
  });
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MainTheme;
