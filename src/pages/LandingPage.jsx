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
import CardActionArea from '@mui/material/CardActionArea';
// Custom
import TLDR from '../components/TLDR';
// Images
import hardwarePic from '../img/hardware-tile.png';
import softwarePic from '../img/sample-code.png';
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
    flexDirection: 'column',
    marginTop: theme.spacing(1),
  },
  expCard: {
    marginBottom: theme.spacing(1),
  },
  imgBlur: {
    filter: 'blur(2px)',
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();
  // Handle Page Clicks
  const handleSoftwarePageClick = () => history.push(`${process.env.REACT_APP_HOME_URL}/software`);
  const handleHardwarePageClick = () => history.push(`${process.env.REACT_APP_HOME_URL}/hardware`);
  // const handleOtherPageClick = () => history.push(`${process.env.REACT_APP_HOME_URL}/other`);
  
  return (
    <div className={classes.root}>
      <TLDR />
      <div className={classes.buttonRow}>
        <Card
          onClick={() => handleSoftwarePageClick()}
          className={classes.expCard}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={softwarePic}
              alt="Software"
              className={classes.imgBlur}
            />
            <Typography>
              Software
            </Typography>
          </CardActionArea>
        </Card>
        <Card
          onClick={() => handleHardwarePageClick()}
          className={classes.expCard}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              image={hardwarePic}
              alt="Hardware"
              className={classes.imgBlur}
            />
            <Typography>
              Hardware
            </Typography>
          </CardActionArea>
        </Card>
        {/* TODO: use this or remove. idk if we need more than the above two */}
        {/* <Card
          onClick={() => handleOtherPageClick()}
          className={classes.expCard}
        >
          Other
        </Card> */}
      </div>
    </div>
  );
};

export default LandingPage;
