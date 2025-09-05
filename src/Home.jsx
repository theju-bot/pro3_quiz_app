import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <ul className="intro">
        <li>You have to answer 10 questions</li>
        <li>For every correct answer you will get 1 point</li>
        <li>For every incorrect answer you will lose 1 point</li>
        <li>
          You have 60 seconds to answer the question, if you fail to answe
          within 60 seconds you will lose 1 point{' '}
        </li>
      </ul>
      <div className="link">
        <Link to="/quiz">Start the Quiz</Link>
      </div>
    </div>
  );
};

export default Home;
