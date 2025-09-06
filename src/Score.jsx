import React from 'react';
import './index.css';
import { Link } from 'react-router-dom';

const Score = ({ score, correct, incorrect, allTimeScore }) => {
  return (
    <div className="scoreContainer">
      <div className="score">Current Score: {String(score)}</div>
      <div className="correct2">Correct Answers: {String(correct)}</div>
      <div className="incorrect1">Incorrect Answers: {String(incorrect)}</div>
      <div className="allTimeScore">All Time Score: {String(allTimeScore)}</div>
      <div className="link">
      <div className="link1"><Link to="/quiz">Play Quiz</Link></div>
      <div className="link2">
        <Link to="/">Home</Link>
      </div>
      </div>
    </div>
  );
};

export default Score;
