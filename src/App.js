// import logo from './logo.svg';

import nations from './nations'
import '../node_modules/flag-icon-css/css/flag-icons.css';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {

  const [country, setCountry] = useState([]);
  const generateRandomNations = () => {
    let ct = [];
    for (let i = 0; i < 4; i++) {
      const r = Math.floor(Math.random() * nations.length);
      ct.push(nations[r]);
    }
    console.log(country);
    setCountry(ct);
  }
  useEffect(() => {
    generateRandomNations();

  }, [])

  return (
    <div className="App">
      <span className="flag-icon flag-icon-gr"></span>
      <div>{
        country.map(c => <button key={c.alpha2Code}>{c.name}</button>)}</div>
    </div>
  );
}
export default App;