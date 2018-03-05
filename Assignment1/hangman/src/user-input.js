import React, { Component } from 'react';
import './App.css';

class UserInput extends Component {
    render() {
        return(
            <form onSubmit={ this.props.userSubmitHandler} >
              <label>
                <input
                  type="text"
                  value={ this.props.inputValue }
                  onChange={ this.props.userInputHandler }
                />
              </label>
              <input type="submit" value="Guess" />
            </form>
        )
    }
}

export default UserInput;