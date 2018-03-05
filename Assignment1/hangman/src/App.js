import React, { Component } from 'react';
import UserInput from './user-input';
import UserAnswer from './user-answer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      submittedLetters: [],
      answer: 'rr',
      invalidInputCount: 0,
      isGameLost: false,
      isGameWon: false,
      userAnswer: []
    };
  }
  componentWillMount() {
    const answerLength = this.state.answer.length;
    const answerArray = new Array(answerLength)
    for (let i =0; i < answerArray.length; i++) {
      answerArray[i] = '_';
    }
    this.setState({ userAnswer: answerArray});
  }
  componentDidUpdate() {
    this.checkIfWonGame()
    this.checkIfLostGame()
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value});
  }

  handleSubmit = (event) => {
    this.state.submittedLetters.push(this.state.value)
    this.setState({ value: ''}) // Clear the userInput
    event.preventDefault();
    this.isUserInputValid(this.state.value)
  }
  checkIfLostGame = () => {
    if(this.state.isGameLost === false && this.state.invalidInputCount >= 7)
      this.setState({ isGameLost: true });
  }
  checkIfWonGame = () => {
    if(this.state.isGameWon === false && this.state.userAnswer.join('') === this.state.answer)
      this.setState({isGameWon: true});
  }

  isUserInputValid = (letter) => {
    const answerArray = this.state.answer.split('')
    let foundOne = false;
    const userAnswerCopy = this.state.userAnswer.slice()
    for(let i=0; i<answerArray.length; i++) {
      if(letter === answerArray[i]) {
        userAnswerCopy[i] = letter;
        this.setState({ userAnswer: userAnswerCopy })
        foundOne = true;
      }
    }
    if (!foundOne) {
      let count = this.state.invalidInputCount;
      count += 1;
      this.setState({ invalidInputCount: count });
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hangman</h1>
        </header>
        <p className="App-gameStatus">
          { !this.state.isGameWon || 'You Won!' }
          { !this.state.isGameLost || 'You Lost' }
        </p>
        <UserInput
          userInputHandler={ this.handleChange }
          userSubmitHandler={ this.handleSubmit }
          inputValue={ this.state.value }
        />
        <UserAnswer
          answerValue={ this.state.userAnswer }
        />
      </div>
    );
  }
}

export default App;
