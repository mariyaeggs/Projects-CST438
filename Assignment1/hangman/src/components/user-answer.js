import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';

const UserAnswer = (props) => {
// Destructure answerValue from this.props
  const { answerValue } = props;
  const displayedAnswer = answerValue.join(' ');
  return (
    <div>
      <h2>
        { displayedAnswer }
      </h2>
    </div>
  );
};
UserAnswer.propTypes = {
  answerValue: PropTypes.string.isRequired,
};

export default UserAnswer;

