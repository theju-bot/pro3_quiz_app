import React from 'react';

const Answer = ({ randomNumnber, data, number, checkAnswer }) => {
  return (
    <div onClick={() => {checkAnswer(randomNumnber, number)}}>
      {data.map((item) => item.id === randomNumnber && item.options[number]) }
    </div>
  );
};

export default Answer;
