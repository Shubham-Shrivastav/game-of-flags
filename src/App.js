import nations from './nations'
import '../node_modules/flag-icon-css/css/flag-icons.css';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [country, setCountry] = useState([]);
  const [flagCountry, setFlagCountry] = useState({});
  const [score, setScore] = useState({ total: 0, correct: 0, incorrect: 0 });
  const [showAnswer, setShowAnswer] = useState(false);

  const generateRandomNations = () => {
    let ct = [];
    for (let i = 0; i < 4; i++) {
      const r = Math.floor(Math.random() * nations.length);
      ct.push(nations[r]);
    }

    setCountry(ct);
    const index = Math.floor(Math.random() * 4);
    setFlagCountry(ct[index]);
  };

  const checkAnswer = (c) => {
    if (c.name === flagCountry.name) {
      setScore({ ...score, correct: score.correct + 1, total: score.total + 1 })
    } else {
      setScore({ ...score, incorrect: score.incorrect + 1, total: score.total + 1 })
    }
    setShowAnswer(true);
    setTimeout(() => {
      setShowAnswer(false);
      nextQuestion();
    }, 3000)

  };
  const nextQuestion = () => {
    generateRandomNations();
  }

  useEffect(() => {
    generateRandomNations();
  }, []);

  return (
    <div className="App">
      <div>
        <h4>Total : {score.total}/ Correct: {score.correct}/ Incorrect: {score.incorrect}
        </h4>
      </div>
      {flagCountry.name ? (
        <span className={`flag-icon flag-icon-${flagCountry['alpha-2'].toLowerCase()}`}>

        </span>) : null}

      <div>
        {
          country.map(c => <button key={c.name} onClick={() => checkAnswer(c)}>
            {c.name}
          </button>)
        }
      </div>
      <div>
        {showAnswer ? <h2>Correct Option : {flagCountry.name}</h2> : null}
      </div>
    </div>
  );
}

export default App;
