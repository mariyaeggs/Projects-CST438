import wordArray from './wordlist';

/**
 * Get list of words from wordlist.js
 *
 * If modified to parse text, this where parser would be called
 * @return {array} The array with words from wordlist.js
 */
const parseText = () => wordArray;

/**
 * Select a word from the textArray
 *
 * @param {array} an arry to select a word from
 * @return {string} the selected word
 */
const pickAWord = textArray => textArray[Math.floor(Math.random() * textArray.length)];

/**
 * Return a word from the array of words
 *
 * This is called in App.js
 * @return {string} The random word from wordlist.js
 */
const getWord = () =>
  pickAWord(parseText());

export default getWord;
