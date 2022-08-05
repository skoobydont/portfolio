import React from 'react';
import { useHistory } from 'react-router';
// MUI
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import makeStyles from '@mui/styles/makeStyles';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
// Icons
import HomeIcon from '@mui/icons-material/Home';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
  const handleOpenTab = (link: string) => {
    const win = window.open(link, "_blank");
    win?.focus();
    return null;
  }
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation className={classes.root} data-testid="footer">
        <BottomNavigationAction
          icon={(
            <Tooltip title="Home">
              <HomeIcon />
            </Tooltip>
          )}
          className={classes.icon}
          onClick={handleHomeRedirect}
          id="Home"
          data-testid="Home"
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
          data-testid="LinkedIn"
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
          data-testid="GitHub"
        />
      </BottomNavigation>
    </Paper>
  );
}

export default Footer;
