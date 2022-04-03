import React from 'react';
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from "@mui/material/CssBaseline";

interface ThemeProps {
  children: boolean |
    React.ReactChild |
    React.ReactFragment |
    React.ReactPortal |
    null |
    undefined;
}

const MainTheme = (props: ThemeProps) => {
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
        {props.children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MainTheme;
