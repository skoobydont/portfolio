import React from 'react';
// MUI
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
// Custom
import ExpRow from '../ExpRow';
// Declare styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    padding: theme.spacing(1),
  },
}));

const PersonalHardwareExp = () => {
  const classes = useStyles();

  return (
    <div data-testid="personalHardware" className={classes.root}>
      <Typography>
        Personal Hardware Experience
      </Typography>
      {/*
        List of personal hardware exp
        1. Built self, parents, & others full desktop computers
        2. Assembled & maintains 3d printer.
          looking to upgrade auto-bed leveling & octopi integration
        3. Pi Cluster Configuration -> still working to expand k3s playbook & expose services
        4. Home Network adminsitrator: hardened router & added cat5e cabling
          looking to add nas drive soon
        
      */}
      <ExpRow
        tech={[]}
        title="PC Building"
      >
        <Typography>The first desktop computer I built was the much needed upgrade for my parents home system.</Typography>
        
      </ExpRow>
    </div>
  );
};

export default PersonalHardwareExp;
