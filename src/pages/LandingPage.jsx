import React, { useState } from 'react';
// MUI
import { makeStyles } from '@material-ui/core';
// Custom
import TLDR from '../components/TLDR';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TLDR />
    </div>
  );
}
export default LandingPage;
