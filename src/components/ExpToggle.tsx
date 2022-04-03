import React from 'react';
import PropTypes from 'prop-types';
// MUI
import makeStyles from '@mui/styles/makeStyles';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
// Declare Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
}));
interface ExpToggleProps {
  exp: string;
  setExp: Function;
  personalComponent: React.ReactElement;
  professionalComponent: React.ReactElement;
}
/**
 * ExpToggle
 * @param {Object} props 
 * @returns {Component} Component to toggle exp between personal / professional
 */
const ExpToggle = (props: ExpToggleProps) => {
  /**
   * Destructure Props:
   *  exp state value & set method
   *  + desired component to render
   */
  const {
    exp,
    setExp,
    personalComponent,
    professionalComponent,
  } = props;
  const classes = useStyles();
  /**
   * Handle Tab Change
   * @param {Object} event standard event
   * @param {string} newExp new value to set exp state
   * @fires setExp with updated value
   */
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setExp(newValue);
  }

  return (
    <Card data-testid="expToggle" className={classes.root}>
      <Tabs variant="fullWidth" value={exp} onChange={handleChange}>
        <Tab label="Professional" value="professional" />
        <Tab label="Personal" value="personal" />
      </Tabs>
      {exp === 'professional'
        ? professionalComponent
        : personalComponent}
    </Card>
  );
};

ExpToggle.propTypes = {
  exp: PropTypes.string.isRequired,
  setExp: PropTypes.func.isRequired,
};

export default ExpToggle;
