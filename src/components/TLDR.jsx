import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
/**
 * TLDR Component. Basically the About Me portion of portfolio
 * @returns {Component}
 */
const TLDR = () => {
  const classes = useStyles();
  return (
    <div id="tldr" className={classes.root}>
      {/* TODO: more thorough about me stuff after the tldr */}
      <Typography>Welcome to my portfolio website!</Typography>
      <Typography sx={{ mt: 1 }}>
        Built with React.js, MUI, &amp; deployed to GitHub Pages.
      </Typography>
      <Typography sx={{ mt: 1, mb: 1 }}>
        Check out some of the projects I have worked on during my IT journey:
      </Typography>
    </div>
  );
};

export default TLDR;
