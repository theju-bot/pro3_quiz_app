import React from 'react';
import './index.css';

const Question = ({ randomNumnber, data,  }) => {
  return (
    <div className='question'>
      {data.map((item) => item.id === randomNumnber && item.question)}
    </div>
  );
};

export default Question;
