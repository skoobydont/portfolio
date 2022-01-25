import React, { useState } from 'react';
import { useHistory } from 'react-router';
// MUI
import { makeStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Collapse from '@material-ui/core/Collapse';
// Custom
import TLDR from '../components/TLDR';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    alignItems: 'center',
  },
  buttonRow: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    maxWidth: theme.spacing(15),
    marginRight: theme.spacing(1),
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
      <div className={classes.buttonRow}>
        <Button
          onClick={() => handleExperienceExpand('software', !experienceExpand.software)}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Software
        </Button>
        <Button
          onClick={() => handleExperienceExpand('hardware', !experienceExpand.hardware)}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Hardware
        </Button>
        <Button
          onClick={() => handleExperienceExpand('other', !experienceExpand.other)}
          variant="outlined"
          color="primary"
          className={classes.button}
        >
          Other
        </Button>
      </div>
      {/* <TLDR /> */}
      <Collapse
        in={experienceExpand?.software}
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
      <Collapse
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
      </Collapse>
    </div>
  );
}
export default LandingPage;
