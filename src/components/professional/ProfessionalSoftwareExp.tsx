import React from 'react';
// MUI
import { makeStyles } from '@mui/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
// Declare Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));

const ProfessionalSoftwareExp = () => {
  /*/ Important details to cover:
    1. Project overview
    2. Technologies Used
    3. Growth area(s)

  */
  const classes = useStyles();
  return (
    <div
      data-testid="professionalSoftware"
      className={classes.root}
    >
      <Typography>
        Professional Software Experience        
      </Typography>
    </div>
  )
};

export default ProfessionalSoftwareExp;
