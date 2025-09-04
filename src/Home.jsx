import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Link to="/quiz">Start the Quiz</Link>
    </div>
  );
};

export default Home;
