import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const UserInput = props => (
  <form onSubmit={props.userSubmitHandler} >
    <label>
      <input
        type="text"
        value={props.inputValue}
        onChange={props.userInputHandler}
      />
    </label>
    <input type="submit" value="Guess" disabled={props.disableInput} />
  </form>
);

UserInput.propTypes = {
  userSubmitHandler: PropTypes.func.isRequired,
  inputValue: PropTypes.string.isRequired,
  userInputHandler: PropTypes.func.isRequired,
  disableInput: PropTypes.func.isRequired,
};

export default UserInput;
