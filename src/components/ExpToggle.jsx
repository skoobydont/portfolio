import React from 'react';
import PropTypes from 'prop-types';
// MUI
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const useStyles = makeStyles((theme) => ({
  active: {
    color: theme.palette.secondary.main,
  },
}));
/**
 * ExpToggle
 * @param {Object} props 
 * @returns {Component} Component to toggle exp between personal / professional
 */
const ExpToggle = (props) => {
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
  const handleExpToggle = (newExp) => setExp(newExp);

  return (
    <div data-testid="expToggle">
      <Button
        onClick={() => handleExpToggle(
          exp === 'professional' ? 'personal' : 'professional'
        )}
      >
        <Typography className={exp === 'professional' ? classes.active : ''}>Professional</Typography>
        <Typography>/</Typography>
        <Typography className={exp === 'personal' ? classes.active : ''}>Personal</Typography>
      </Button>
    </div>
  );
};

ExpToggle.propTypes = {
  exp: PropTypes.string.isRequired,
  setExp: PropTypes.func.isRequired,
};

export default ExpToggle;
