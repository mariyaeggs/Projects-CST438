import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(event) {
    console.log('setting state')
    console.log(event)
    this.setState({ value: event.target.value});
  }

  handleSubmit(event) {
    console.log('You submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hangman</h1>
        </header>
        <p className="App-intro">
          To get started, guess a letter.
        </p>
        <form onSubmit={ this.handleSubmit} >
          <label>
            Letter:
            <input
              type="text"
              value={ this.state.value }
              onChange={ this.handleChange }
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
