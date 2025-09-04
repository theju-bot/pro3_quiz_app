import React from 'react';
import Answer from './Answer';
import Question from './Question';

const Cards = ({ randomNumnber, data, checkAnswer }) => {
  return (
    <div className="cards">
      <Question randomNumnber={randomNumnber} data={data} />
      <Answer
        randomNumnber={randomNumnber}
        number={0}
        data={data}
        checkAnswer={checkAnswer}
      />
      <Answer
        randomNumnber={randomNumnber}
        number={1}
        data={data}
        checkAnswer={checkAnswer}
      />
      <Answer
        randomNumnber={randomNumnber}
        number={2}
        data={data}
        checkAnswer={checkAnswer}
      />
      <Answer
        randomNumnber={randomNumnber}
        number={3}
        data={data}
        checkAnswer={checkAnswer}
      />
    </div>
  );
};

export default Cards;
