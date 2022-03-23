import React from 'react';
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '75%',
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
      <Typography>Welcome to my portfolio website!</Typography>
      <Typography sx={{ mt: 1 }}>
        I have recently earned my CompTIA Security+ certification and am actively looking to join a team
        in need of a security-focused full-stack developer / analyst.
      </Typography>
      <Typography sx={{ mt: 1, mb: 1 }}>
        Check out some of the projects I have worked on during my IT journey:
      </Typography>
    </div>
  );
};

export default TLDR;
