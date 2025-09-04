import { useEffect, useState } from 'react';
import Cards from './Cards';
import Score from './Score';
import './index.css';

function App() {
  const [data, setData] = useState([]);
  const [score, setScore] = useState(0);
  const [randomNumnber, setRandomNumnber] = useState(Math.floor(Math.random() * 100));

  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        '/pro3_quiz_app/science_tech_quiz_real_100.json'
      );
      const getData = await response.json();
      console.log(getData.questions);
      setData(getData.questions);
    };
    getData();
  }, []);

  const checkAnswer = (rN, n) => {
    const item = data.find((item) => item.id === rN);
    if (item.answer === item.options[n]) {
      alert('Correct');
      setRandomNumnber(Math.floor(Math.random() * 100));
      setScore(score + 1);
    } else {
      alert('Wrong');
      setRandomNumnber(Math.floor(Math.random() * 100));
      score > 0 ? setScore(score - 1) : 0 ;
    }
    console.log(rN, n);
  };

  return (
    <>
      <Cards
        data={data}
        randomNumnber={randomNumnber}
        checkAnswer={checkAnswer}
      />
      <Score score={score}/>
    </>
  );
}

export default App;
