import React, { Component } from 'react';
import './App.css';

class UserAnswer extends Component {
  render() {
    // Destructure answerValue from this.props
    const { answerValue } = this.props
    const displayedAnswer = answerValue.join(' ')
    return(
      <div>
        <h2>
          { displayedAnswer }
        </h2>
      </div>
    )
  }
}

export default UserAnswer;
