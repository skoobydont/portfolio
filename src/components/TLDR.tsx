import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
// Declare Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '75%',
    marginTop: theme.spacing(1),
  },
}));
/**
 * TLDR Component. Basically the About Me portion of portfolio
 * @returns {Component}
 */
const TLDR = () => {
  const classes = useStyles();
  return (
    <div id="tldr" className={classes.root} data-testid="tldr">
      {/* TODO: more thorough about me stuff after the tldr */}
      <Typography variant="h4">Welcome to my portfolio website!</Typography>
      <Typography sx={{ mt: 1 }}>
        I spend too much time behind a screen and keyboard...so I will always take an opportunity to be outdoors or rest my eyes.
      </Typography>
      <Typography sx={{ mt: 1, mb: 1 }}>
        Check out some of the projects I have worked on during my IT journey:
      </Typography>
    </div>
  );
};

export default TLDR;
