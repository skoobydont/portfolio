import React from 'react';
// MUI
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
// Icons
import ArrowBack from '@mui/icons-material/ArrowBack';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
// Declare Styles
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'end',
    justifyContent: 'space-between',
  },
  tabs: {
    paddingTop: theme.spacing(1),
    paddingBottom: '0px',
  },
}));
interface ExpToggleProps {
  exp: string;
  setExp: Function;
  personalComponent: React.ReactElement;
  professionalComponent: React.ReactElement;
  order: string;
  setOrder: Function;
  goBack: Function;
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
    order,
    setOrder,
    goBack,
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
      <Box className={classes.header}>
        <IconButton onClick={() => goBack()}>
          <ArrowBack color="primary" />
        </IconButton>
        <Tabs variant="fullWidth" value={exp} onChange={handleChange}>
          <Tab label="Professional" value="professional" data-testid="professionalExp" className={classes.tabs} />
          <Tab label="Personal" value="personal" data-testid="personalExp" className={classes.tabs} />
        </Tabs>
        {/* <IconButton onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
          {order === 'asc'
            ? <ArrowCircleUpIcon color="primary" />
            : <ArrowCircleDownIcon color="primary" />}
        </IconButton> */}
        {/** placeholder box until order decision is finalized */}
        <Box />
      </Box>
      {exp === 'professional'
        ? professionalComponent
        : personalComponent}
    </Card>
  );
};

export default ExpToggle;
