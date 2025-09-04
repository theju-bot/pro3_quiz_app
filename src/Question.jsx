import React from 'react';
import './index.css';

const Question = ({ randomNumnber, data, class1 }) => {
  return (
    <div className={class1}>
      {data.map((item) => item.id === randomNumnber && item.question)}
    </div>
  );
};

export default Question;
