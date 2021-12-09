import React from 'react';
import { useHistory } from 'react-router';
// MUI
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { makeStyles } from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  icon: {
    maxWidth: theme.spacing(5),
    paddingBottom: theme.spacing(1),
    marginLeft: theme.spacing(-1),
    '& :hover': {
      color: "#FFF",
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  const history = useHistory();
  /**
   * Handle Home Redirect
   * @returns {Function} push users back to home url
   */
  const handleHomeRedirect = () => history?.push(process.env.REACT_APP_HOME_URL);
  /**
   * Handle Opening Link in New Tab
   * @param {String} link the url you want to be opened in a new tab
   * @returns {null}
   */
  const handleOpenTab = (link) => {
    const win = window.open(link, "_blank");
    win.focus();
    return null;
  }
  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        icon={(
          <Tooltip title="Home">
            <HomeIcon />
          </Tooltip>
        )}
        className={classes.icon}
        onClick={handleHomeRedirect}
        id="Home"
      />
      <BottomNavigationAction
        icon={(
          <Tooltip title="LinkedIn">
            <LinkedInIcon />          
          </Tooltip>
        )}
        className={classes.icon}
        onClick={() => handleOpenTab(process.env.REACT_APP_LINKED_IN_URL)}
        id="LinkedIn"
      />
      <BottomNavigationAction
        icon={(
          <Tooltip title="GitHub">
            <GitHubIcon />
          </Tooltip>
        )}
        className={classes.icon}
        onClick={() => handleOpenTab(process.env.REACT_APP_GITHUB_URL)}
        id="GitHub"
      />
    </BottomNavigation>
  );
}

export default Footer;
