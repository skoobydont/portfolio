import React from 'react';
import { useHistory } from 'react-router';
// MUI
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  bar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
  text: {
    textTransform: 'none',
    '& span.MuiButton-label': {
      color: 'rgba(255, 255, 255, 0.7)',
    },
  },
}));

const Nav = () => {
  // css
  const classes = useStyles();
  // to redirect
  const history = useHistory();
  // redirect handlers
  const handleHomeRedirect = () => history.push(process.env.REACT_APP_HOME_URL);
  return (
    <AppBar position="static" className={classes.bar}>
      <Button
        variant="text"
        onClick={handleHomeRedirect}
        className={classes.text}
      >
        Skubak.AJ
      </Button>
    </AppBar>
  )
};

export default Nav;
