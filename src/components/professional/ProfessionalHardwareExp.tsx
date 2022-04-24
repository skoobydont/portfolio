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

const ProfessionalHardwareExp = () => {
  const classes = useStyles();

  return (
    <div data-testid="professionalHardware" className={classes.root}>
      <Typography>
        Professional Hardware Experience        
      </Typography>
      <ExpRow
        title=""
        tech={[]}
      >
        <Typography>While I have not had professional hardware-specific roles, I have debugged various hardware &amp; networking issues with my devices.</Typography>
        <Typography>I would love to gain more experience working with hardware!</Typography>
      </ExpRow>
    </div>
  );
};

export default ProfessionalHardwareExp;
