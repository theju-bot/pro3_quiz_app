import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Score = ({ score, correct, incorrect, allTimeScore }) => {
  return (
    <>
      <div className="score">Current Score: {String(score)}</div>
      <div className="correct">Correct Answers: {String(correct)}</div>
      <div className="incorrect">Incorrect Answers: {String(incorrect)}</div>
      <div className="allTimeScore">All Time Score: {String(allTimeScore)}</div>
      <div className="plagain"><Link to="/quiz">Play Quiz</Link></div>
      <div className="home1">
        <Link to="/">Home</Link>
      </div>
    </>
  );
};

export default Score;
