import React from 'react';
import PropTypes from 'prop-types';
// MUI
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
// Declare Styles
const useStyles = makeStyles((theme) => ({
  root: {
    // display: 'flex',
    // flexDirection: 'row',
    textAlign: 'center',
  },
  button: {
    // display: 'flex',
    // flexDirection: 'column',
    // alignContent: 'baseline',
    // textAlign: 'left',
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
  },
}));
/**
 * ExpToggle
 * @param {Object} props 
 * @returns {Component} Component to toggle exp between personal / professional
 */
const ExpToggle = (props: { exp: string, setExp: Function }) => {
  /**
   * Destructure Props:
   *  exp state value & set method
   */
  const {
    exp,
    setExp,
  } = props;
  const classes = useStyles();
  /**
   * Handle Exp State Toggle
   * @param {string} newExp new value to set exp state
   * @returns {Function}
   */
  // const handleExpToggle = (newExp: string) => setExp(newExp);
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setExp(newValue);
  }
  console.log('exp toggle exp: ', exp);
  console.log('exp === professional? ', exp === 'professional');
  return (
    <div data-testid="expToggle" className={classes.root}>
      <Tabs value={exp} onChange={handleChange}>
        <Tab label="Professional" value="professional" />
        <Tab label="Personal" value="personal" />
      </Tabs>
      {/* <Button
        onClick={() => handleExpToggle('professional')}
        variant="outlined"
        className={`${classes.button} ${exp === 'professional' ? classes.active : ''}`}
      >
        Professional
      </Button>
      <Button
        onClick={() => handleExpToggle('personal')}
        variant="outlined"
        className={`${classes.button} ${exp === 'personal' ? classes.active : ''}`}
      >
        Personal
      </Button> */}
    </div>
  );
};

ExpToggle.propTypes = {
  exp: PropTypes.string.isRequired,
  setExp: PropTypes.func.isRequired,
};

export default ExpToggle;
