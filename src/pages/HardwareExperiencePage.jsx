import React from 'react';
import { useHistory } from 'react-router';
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginRight: theme.spacing(1),
  },
}));

const HardwareExperiencePage = () => {
  const classes = useStyles();
  const history = useHistory();
  /**
   * Handle Go Back to /porfolio
   * @fires history.push
   * @returns {null}
   */
  const handleGoBack = () => {
    history.push({
      pathname: '/portfolio',
      state: {
        ...history.location.state,
        hardware: true,
      },
    });
    return null;
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Button
          onClick={() => handleGoBack()}
          variant="contained"
          className={classes.button}
        >
          &#60;
        </Button>
        <Typography>
          Learn More About Hardware Experience on this page        
        </Typography>
      </div>
    </div>
  );
};

export default HardwareExperiencePage;
