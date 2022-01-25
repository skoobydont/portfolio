import React from 'react';
import { useHistory } from 'react-router';
// MUI
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

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

const SoftwareExperiencePage = () => {
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
        software: true,
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
          Learn More About Software Experience on this page
        </Typography>
      </div>
    </div>
  );
};

export default SoftwareExperiencePage;
