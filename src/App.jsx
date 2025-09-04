import { useEffect, useState, useRef } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Cards from './Cards';
import Score from './Score';
import './index.css';
import Home from './Home';

function App() {
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

  let nextRandom;

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        `${import.meta.env.BASE_URL}science_tech_quiz_real_100.json`
      );
      const getData = await response.json();
      console.log(getData.questions);
      setData(getData.questions);
    };
    getData();
  }, []);

  const checkAnswer = (rN, n) => {
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
            <Score score={score} correct={correct} incorrect={incorrect} />
          </>
        }
      />
      <Route
        path="/results"
        element={
          <Score score={score} correct={correct} incorrect={incorrect} />
        }
      />
    </Routes>
  );
}

export default App;
