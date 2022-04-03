import React from 'react';
import {
  createTheme,
  ThemeProvider,
  StyledEngineProvider,
  Theme,
} from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from "@mui/material/CssBaseline";
/* Make theme.spacing/palette available to default theme
  https://stackoverflow.com/questions/70697666/material-ui-v5-property-spacing-does-not-exist-on-type-defaulttheme-when-u
*/
declare module '@mui/styles/defaultTheme' {
  interface DefaultTheme extends Theme {}
}
// Theme Props interface
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
