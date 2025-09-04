import React from 'react';
import Answer from './Answer';
import Question from './Question';
import './index.css';

const Cards = ({
  randomNumnber,
  data,
  checkAnswer,
  isRevealed,
  selectedIndex,
  correctIndex,
}) => {
  return (
    <div className="card">
      <Question randomNumnber={randomNumnber} data={data} />
      <Answer
        randomNumnber={randomNumnber}
        number={0}
        data={data}
        checkAnswer={checkAnswer}
        isRevealed={isRevealed}
        selectedIndex={selectedIndex}
        correctIndex={correctIndex}
      />
      <Answer
        randomNumnber={randomNumnber}
        number={1}
        data={data}
        checkAnswer={checkAnswer}
        isRevealed={isRevealed}
        selectedIndex={selectedIndex}
        correctIndex={correctIndex}
      />
      <Answer
        randomNumnber={randomNumnber}
        number={2}
        data={data}
        checkAnswer={checkAnswer}
        isRevealed={isRevealed}
        selectedIndex={selectedIndex}
        correctIndex={correctIndex}
      />
      <Answer
        randomNumnber={randomNumnber}
        number={3}
        data={data}
        checkAnswer={checkAnswer}
        isRevealed={isRevealed}
        selectedIndex={selectedIndex}
        correctIndex={correctIndex}
      />
    </div>
  );
};

export default Cards;
