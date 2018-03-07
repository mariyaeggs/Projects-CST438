import { includes } from 'lodash';

const checkGuessForDuplicates = (char, lettersGuessed) =>
  includes(lettersGuessed, char);// Return true if valid argument

const checkForNonAlphanumericChar = (char) => {
  const letters = /^[A-Za-z]+$/;
  const result = !char.match(letters) || char.length < 1;
  return result;
};

const checkForMultipleChar = (char) => {
  if (char.length > 1) {
    return true;
  }
  return false;
};

const validateInputCharacter = (char, lettersGuessed) => {
  const validationMessages = [];
  const validationResult = { isResultValid: true, validationMessages };
  const duplicates = checkGuessForDuplicates(char, lettersGuessed);
  const nonAlphabeticChar = checkForNonAlphanumericChar(char, lettersGuessed);
  const multipleChar = checkForMultipleChar(char);

  if (duplicates) {
    validationMessages.push(`Letter ${char} already guessed.`);
    validationResult.isResultValid = false;
  }
  if (nonAlphabeticChar) {
    validationMessages.push(`Invalid input, ${char} is not a letter.`);
    validationResult.isResultValid = false;
  }
  if (multipleChar) {
    validationMessages.push('Guess one letter.');
    validationResult.isResultValid = false;
  }


  return validationResult;
};

export default validateInputCharacter;
