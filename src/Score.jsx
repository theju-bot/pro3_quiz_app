import React from 'react';
import './index.css';

const Score = ({ score, correct, incorrect }) => {
  return (
    <>
      <div className="score">Current Score: {String(score)}</div>
      <div className="correct">Correct Answers: {String(correct)}</div>
      <div className="incorrect">Incorrect Answers: {String(incorrect)}</div>
    </>
  );
};

export default Score;
