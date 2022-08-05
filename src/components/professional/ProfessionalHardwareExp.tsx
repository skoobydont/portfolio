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
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    margin: 'auto',
  },
}));

const ProfessionalHardwareExp = () => {
  const classes = useStyles();

  return (
    <div data-testid="professionalHardware" className={classes.root}>
      <Typography mb={ 1 }>
        Professional Hardware Experience        
      </Typography>
      <ExpRow
        title=""
        tech={[]}
      >
        <Typography>While I have not had professional hardware-specific roles, I have debugged various hardware &amp; networking issues with my devices.</Typography>
        <Typography mt={ 2 } mb={ 2 }>I would love to gain more experience working with hardware!</Typography>
      </ExpRow>
    </div>
  );
};

export default ProfessionalHardwareExp;
