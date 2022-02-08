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
  activeButton: {
    color: theme.palette.primary.main,
    border: `1px solid ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(1),
    // backgroundColor: 'transparent',
  },
  collapse: {
    width: '-webkit-fill-available',
    maxWidth: '85%',
    margin: theme.spacing(1),
    marginTop: 0,
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const history = useHistory();
  // Object of Collapse State
  const [experienceExpand, setExperienceExpand] = useState(
    history?.location?.state !== undefined
    // use history location state if exists
      ? history.location.state
      : {
        software: false,
        hardware: false,
        other: false,
      });
  /**
   * Handle Experience Expand
   * @fires setExperienceExpand
   * @param {String} exp experience collapse to modify
   * @param {Boolean} val open or nah
   */
  const handleExperienceExpand = (exp, val) => {
    setExperienceExpand({
      ...experienceExpand,
      [exp]: val,
    });
  };
  const handleSoftwarePageClick = () => history.push(`${process.env.REACT_APP_HOME_URL}/software`);
  const handleHardwarePageClick = () => history.push(`${process.env.REACT_APP_HOME_URL}/hardware`);
  const handleOtherPageClick = () => history.push(`${process.env.REACT_APP_HOME_URL}/other`);
  return (
    <div className={classes.root}>
      <TLDR />
      <div className={classes.buttonRow}>
        <Card
          component={Button}
          onClick={() => handleExperienceExpand('software', !experienceExpand.software)}
          variant="outlined"
          className={`${classes.button} ${experienceExpand?.software ? classes.activeButton : ''}`}
        >
          Software
        </Card>
        <Card
          component={Button}
          onClick={() => handleExperienceExpand('hardware', !experienceExpand.hardware)}
          variant="outlined"
          className={`${classes.button} ${experienceExpand?.hardware ? classes.activeButton : ''}`}
        >
          Hardware
        </Card>
        {/* <Button
          onClick={() => handleExperienceExpand('other', !experienceExpand.other)}
          variant="outlined"
          color={experienceExpand?.other ? "primary" : "inherit"}
          className={classes.button}
        >
          Other
        </Button> */}
      </div>
      {/* <TLDR /> */}
      <Collapse
        in={experienceExpand?.software}
        component={Card}
        timeout="auto"
        unmountOnExit
        className={classes.collapse}
      >
        <CardContent>
          <Typography>
            Software
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={handleSoftwarePageClick}
          >
            Learn More
          </Button>
        </CardActions>
      </Collapse>
      <Collapse
        in={experienceExpand?.hardware}
        component={Card}
        timeout="auto"
        unmountOnExit
        className={classes.collapse}
      >
        <CardContent>
          <Typography>
            Hardware
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={handleHardwarePageClick}
          >
            Learn More
          </Button>
        </CardActions>
      </Collapse>
      {/* <Collapse
        in={experienceExpand?.other}
        timeout="auto"
        unmountOnExit
        className={classes.collapse}
      >
        <CardContent>
          <Typography>
            Other Fun Projects
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={handleOtherPageClick}
          >
            Learn More
          </Button>
        </CardActions>
      </Collapse> */}
    </div>
  );
};

export default LandingPage;
