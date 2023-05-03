import nations from './nations'
import '../node_modules/flag-icon-css/css/flag-icons.css';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

  const [country, setCountry] = useState([]);
  const [flagCountry, setFlagCountry] = useState({});

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
      alert('Correct Answer');
    } else {
      alert('Incorrect');
    }
    generateRandomNations();
  }

  useEffect(() => {
    generateRandomNations();
  }, []);

  return (
    <div className="App">
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
    </div>
  );
}

export default App;
