import React from 'react';
import { useHistory } from 'react-router';
// MUI
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Box from '@mui/material/Box';
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
    marginBottom: theme.spacing(2),
  },
  imgBlur: {
    filter: 'blur(2px)',
    height: '150px',
  },
  topBox: {
    position: 'relative',
  },
  innerBox: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: theme.spacing(1),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));


const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();
  // Handle Page Clicks
  const handleSoftwarePageClick = () => history.push(`${process.env.REACT_APP_HOME_URL}/software`);
  const handleHardwarePageClick = () => history.push(`${process.env.REACT_APP_HOME_URL}/hardware`);
  
  return (
    <div className={classes.root}>
      <TLDR />
      <div className={classes.buttonRow}>
        <Card
          onClick={() => handleSoftwarePageClick()}
          className={classes.expCard}
        >
          <Box className={classes.topBox}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={softwarePic}
                alt="Software"
                className={classes.imgBlur}
              />
              <Box className={classes.innerBox}>
                <Typography variant="h4">
                  Software
                </Typography>
              </Box>
            </CardActionArea>
          </Box>
        </Card>
        <Card
          onClick={() => handleHardwarePageClick()}
          className={classes.expCard}
        >
          <Box className={classes.topBox}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={hardwarePic}
                alt="Hardware"
                className={classes.imgBlur}
              />
              <Box className={classes.innerBox}>
                <Typography variant="h4">
                  Hardware
                </Typography>
              </Box>
            </CardActionArea>
          </Box>
        </Card>
      </div>
    </div>
  );
};

export default LandingPage;
