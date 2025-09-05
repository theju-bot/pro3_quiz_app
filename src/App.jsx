import { useEffect, useState, useRef } from 'react';
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom';
import Cards from './Cards';
import Score from './Score';
import './index.css';
import Home from './Home';

function App() {
  const info = localStorage.getItem('info');
  const details = JSON.parse(info) ?? null;

  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [randomNumnber, setRandomNumnber] = useState(
    Math.floor(Math.random() * 100 + 1)
  );
  const [isRevealed, setIsRevealed] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [correctIndex, setCorrectIndex] = useState(null);
  const lastRef = useRef(randomNumnber);
  const [count, setCount] = useState(0);
  const [allTimeScore, setAllTimeScore] = useState(
    details ? details.allTimeScore : 0
  );

  const timerRef = useRef(null);

  const navigate = useNavigate();
  const location = useLocation();

  let nextRandom;

  useEffect(() => {
    localStorage.setItem(
      'info',
      JSON.stringify({ allTimeScore: allTimeScore ?? 0 })
    );
  }, [allTimeScore]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `${import.meta.env.BASE_URL}science_tech_quiz_real_100.json`
      );
      const getData = await response.json();
      console.log(getData.questions);
      setData(getData.questions);
    };
    if (window.location.hash !== '#/') {
      window.location.hash = '#/';
    }

    getData();
  }, []);

  useEffect(() => {
    if (location.pathname === '/quiz') {
      quizBegins();
    }
    return () => clearTimeout(timerRef.current);
  }, [location.pathname, isRevealed]);

  const quizBegins = () => {
    clearTimeout(timerRef.current);

    timerRef.current = setTimeout(() => {
      if (isRevealed) return;
      do {
        nextRandom = Math.floor(Math.random() * 100 + 1);
      } while (nextRandom === lastRef.current);
      lastRef.current = nextRandom;
      setRandomNumnber(nextRandom);
      setScore((prev) => Math.max(0, prev - 1));
      setIncorrect((prev) => prev + 1);
      setCount((prev) => prev + 1);
    }, 60000);
  };

  const quizFinsished = () => {
    navigate('/results');
    setAllTimeScore(score);
  };

  const checkAnswer = (rN, n) => {
    if (count === 10) return quizFinsished();
    if (isRevealed) return;
    const item = data.find((item) => item.id === rN);
    const cIndex = item.options.findIndex((a) => a === item.answer);
    setSelectedIndex(n);
    setCorrectIndex(cIndex);
    setIsRevealed(true);

    const correct = item.answer === item.options[n];

    setTimeout(() => {
      setScore((prev) => (correct ? prev + 1 : Math.max(0, prev - 1)));
      setCorrect((prev) => (correct ? prev + 1 : prev));
      setIncorrect((prev) => (!correct ? prev + 1 : prev));
      do {
        nextRandom = Math.floor(Math.random() * 100 + 1);
      } while (nextRandom === lastRef.current);
      lastRef.current = nextRandom;
      setRandomNumnber(nextRandom);
      setIsRevealed(false);
      setSelectedIndex(null);
      setCorrectIndex(null);
      setCount(count + 1);
    }, 1000);
    console.log(rN, n);
  };

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route
        path="/quiz"
        element={
          <>
            <Cards
              data={data}
              randomNumnber={randomNumnber}
              checkAnswer={checkAnswer}
              isRevealed={isRevealed}
              selectedIndex={selectedIndex}
              correctIndex={correctIndex}
            />
            <div className="fra">
              <div className="score1">Current Score: {String(score)}</div>
              <div className="correct1">
                All time Score: {String(allTimeScore)}
              </div>
            </div>
          </>
        }
      />
      <Route
        path="/results"
        element={
          <Score
            score={score}
            correct={correct}
            incorrect={incorrect}
            allTimeScore={allTimeScore}
          />
        }
      />
    </Routes>
  );
}

export default App;
