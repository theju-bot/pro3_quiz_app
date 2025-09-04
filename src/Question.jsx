import React from 'react';

const Question = ({ randomNumnber, data }) => {
  return (
    <div>{data.map((item) => item.id === randomNumnber && item.question)}</div>
  );
};

export default Question;
