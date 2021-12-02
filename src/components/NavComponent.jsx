import React, { useState } from 'react';
import { useHistory } from 'react-router';
// MUI
import { makeStyles } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Home';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const useStyles = makeStyles((theme) => ({
  bar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const Nav = () => {
  // css
  const classes = useStyles();
  // to redirect
  const history = useHistory();
  // menu item anchor element state
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  // handlers
  const handleMenu = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);
  // redirect handlers
  const handleHomeRedirect = () => history.push('/portfolio');
  const handleProfileRedirect = () => history.replace('/profile');
  const handleAccountRedirect = () => history.replace('/account');
  return (
    <AppBar position="static" className={classes.bar}>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="home"
        onClick={handleHomeRedirect}
      >
        <HomeIcon />
      </IconButton>
    </AppBar>
  )
};

export default Nav;
