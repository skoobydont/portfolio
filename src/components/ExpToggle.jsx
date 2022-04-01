import React from 'react';
import PropTypes from 'prop-types';
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

  return <div data-testid="exptoggle">Exp Toggle</div>;
};

ExpToggle.propTypes = {
  exp: PropTypes.string.isRequired,
  setExp: PropTypes.func.isRequired,
};

export default ExpToggle;
