import React, { useState } from 'react';
import { useHistory } from 'react-router';
// MUI
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Collapse from '@mui/material/Collapse';
// Custom
import TLDR from '../components/TLDR';
// Declare Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(1),
    alignItems: 'center',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: theme.spacing(1),
  },
  button: {
    maxWidth: theme.spacing(15),
    marginRight: theme.spacing(1),
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();
  // Handle Page Clicks
  const handleSoftwarePageClick = () => history.push(`${process.env.REACT_APP_HOME_URL}/software`);
  const handleHardwarePageClick = () => history.push(`${process.env.REACT_APP_HOME_URL}/hardware`);
  const handleOtherPageClick = () => history.push(`${process.env.REACT_APP_HOME_URL}/other`);
  
  return (
    <div className={classes.root}>
      <TLDR />
      <div className={classes.buttonRow}>
        <Card
          component={Button}
          onClick={() => handleSoftwarePageClick()}
          variant="outlined"
          className={classes.button}
        >
          Software
        </Card>
        <Card
          component={Button}
          onClick={() => handleHardwarePageClick()}
          variant="outlined"
          className={classes.button}
        >
          Hardware
        </Card>
        <Card
          component={Button}
          onClick={() => handleOtherPageClick()}
          variant="outlined"
          className={classes.button}
        >
          Other
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
