import React, { Component } from 'react';
import UserInput from './user-input';
import UserAnswer from './user-answer';
import LettersGuessed from './letters-guessed';
import validateInputCharacter from './validation';
import ResetButton from './reset-button';
import HangmanImages from './hangman-img';
import getWord from './parse';
import './App.css';


const initialState = {
  value: '',
  submittedLetters: [],
  answer: '',
  invalidInputCount: 0,
  isGameLost: false,
  isGameWon: false,
  userAnswer: [],
  validationMessages: [],
};

class App extends Component {
  constructor(props) {
    super(props);
    // Creates a stringified list of component states
    this.state = JSON.parse(JSON.stringify(initialState));
  }
  componentWillMount() {
    this.setState({ answer: getWord() });
  }

  componentDidMount() {
    // Create initial array of "_" the same length as the secret game word
    const answerLength = this.state.answer.length;
    const answerArray = new Array(answerLength);
    for (let i = 0; i < answerArray.length; i += 1) { answerArray[i] = '_'; }
    this.setState({ userAnswer: answerArray });
  }

  componentDidUpdate() {
    this.winGameIfWordGuessed();
    this.loseGameIfExceededGuesses();
  }
  /**
   * Reset game state to initial state
   *
   */
  handleReset = () => {
    this.setState(initialState);
    this.setState({ answer: getWord() });
  }
  /**
   * Handle user input
   *
   * @param {object} an event to handle the user input
   */
  handleChange = (event) => {
    const input = event.target.value.trim();
    this.setState({ value: input });
  }
  /**
   * Handle user submission of a character
   * Validate user's input and display error messages
   *
   * @param {object} an event to handle user submission of a character
   */
  handleSubmit = (event) => {
    const { value, submittedLetters } = this.state;
    const lowerCaseValue = value.toLowerCase(); // Change value to lower case
    const validation = validateInputCharacter(lowerCaseValue, submittedLetters);
    if (!validation.isResultValid) { // If the result is valid
      this.setState({ validationMessages: validation.validationMessages });
    } else {
      this.state.submittedLetters.push(lowerCaseValue);
      this.isUserInputCorrect(lowerCaseValue);
      this.setState({ validationMessages: [] });
    }
    // Clear the userInput and validationMessages
    this.setState({ value: '' });
    event.preventDefault();
  }

  /**
   * Set game to lost when user exceeds valid guesses
   *
   * @param {boolean} a true/false value to track users' game status
   */
  loseGameIfExceededGuesses = () => {
    if (this.state.isGameLost === false && this.state.invalidInputCount >= 7) {
      this.setState({ isGameLost: true });
    }
  }
  /**
   * Set game to won when user answers the game's valid word
   *
   * @param {boolean} a true/false value to track users' game status
   */
  winGameIfWordGuessed = () => {
    const gameIsNotWon = this.state.isGameWon === false;
    const correctAnswer = this.state.userAnswer.join('') === this.state.answer;
    if (gameIsNotWon && correctAnswer) { this.setState({ isGameWon: true }); }
  }
  /**
   * Check if user input string matches a letter in the secret word
   * Track user's invalid input count
   *
   * @param {string} a string that matches a letter in the game's secret word
   */
  isUserInputCorrect = (letter) => {
    const answerArray = this.state.answer.split('');
    let foundALetterMatch = false;
    const userAnswerCopy = this.state.userAnswer.slice();
    for (let i = 0; i < answerArray.length; i += 1) {
      if (letter === answerArray[i]) {
        userAnswerCopy[i] = letter;
        this.setState({ userAnswer: userAnswerCopy });
        foundALetterMatch = true;
      }
    }

    if (!foundALetterMatch) {
      let count = this.state.invalidInputCount;
      count += 1;
      this.setState({ invalidInputCount: count });
    }
  }

  render() {
    const {
      isGameWon,
      isGameLost,
      userAnswer,
      submittedLetters,
      invalidInputCount,
      validationMessages,
      value,
    } = this.state;
    let resetButton;
    const disableGame = isGameWon || isGameLost;
    if (disableGame) { resetButton = <ResetButton resetGame={this.handleReset} />; }
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hangman</h1>
        </header>
        <p className="App-gameStatus">
          { !isGameWon || 'You Won!' }
          { !isGameLost || 'You Lost' }
        </p>
        <HangmanImages
          invalidInputCount={invalidInputCount}
        />
        <UserInput
          className="App-userinput"
          userInputHandler={this.handleChange}
          userSubmitHandler={this.handleSubmit}
          inputValue={value}
          disableInput={disableGame}
        />
        <UserAnswer
          answerValue={userAnswer}
        />
        <LettersGuessed
          lettersGuessed={submittedLetters}
        />
        {resetButton}
        { validationMessages.toString() }
      </div>
    );
  }
}

export default App;
