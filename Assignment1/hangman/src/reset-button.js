import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const ResetButton = props =>
  <button onClick={props.resetGame}>Restart</button>;

ResetButton.propTypes = {
  resetGame: PropTypes.func.isRequired,
};

export default ResetButton;

