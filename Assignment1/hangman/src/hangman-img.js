import React from 'react';
import PropTypes from 'prop-types';
import './App.css';

const imageMap = [
  'https://farm5.staticflickr.com/4608/38850375390_1223991b0e_q.jpg',
  'https://farm5.staticflickr.com/4706/40660406731_3da5ac4a05_m.jpg',
  'https://farm5.staticflickr.com/4760/39950506254_b7a0efeb3b_m.jpg',
  'https://farm5.staticflickr.com/4778/38850202300_74b7d0ddfd_m.jpg',
  'https://farm5.staticflickr.com/4602/40618431742_fc4d2fd219_m.jpg',
  'https://farm5.staticflickr.com/4696/39950503344_c8d197a085_m.jpg',
  'https://farm5.staticflickr.com/4696/38850202060_b8b78dbe76_m.jpg',
  'https://farm5.staticflickr.com/4706/40618431642_9b3c9a40ba_m.jpg',
];
const HangmanImages = (props) => {
  // Destructure answerValue from this.props
  const { invalidInputCount } = props;
  const tries = `You have ${7 - invalidInputCount} guesses left.`;
  return (
    <div>
      <h4>
        {tries}
      </h4>
      <img src={imageMap[invalidInputCount]} alt="" />
    </div>
  );
};

HangmanImages.propTypes = {
  invalidInputCount: PropTypes.number.isRequired,
};


export default HangmanImages;
