import React from 'react';
import './index.css';

const Answer = ({
  randomNumnber,
  data,
  number,
  checkAnswer,
  isRevealed,
  selectedIndex,
  correctIndex,
}) => {
  let cls = `answer ${
    !isRevealed
      ? ''
      : number === correctIndex
      ? 'correct'
      : number === selectedIndex
      ? 'incorrect'
      : 'disabled'
  }`;

  return (
    <div
      className={cls}
      onClick={() => {
        checkAnswer(randomNumnber, number);
      }}
    >
      {data.map((item) => item.id === randomNumnber && item.options[number])}
    </div>
  );
};

export default Answer;
