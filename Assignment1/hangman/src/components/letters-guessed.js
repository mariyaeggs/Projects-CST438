import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const LettersGuessed = (props) => {
  // Destructure answerValue from this.props
  const { lettersGuessed } = props;
  const displayedAnswer = lettersGuessed.join(' ');
  return (
    <div>
      <h4>
        Letters already guessed:
        <br />
        { displayedAnswer }
      </h4>
    </div>
  );
};
LettersGuessed.propTypes = {
  lettersGuessed: PropTypes.string.isRequired,
};

export default LettersGuessed;
