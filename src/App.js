import React from 'react';
import { useState } from 'react';
// import Victory from './Victory';
import './App.css';

function App() {
  let [count, setCount] = useState(0);
  let [ticker, setTicker] = useState(+1);

  let addCount = () => {
    setCount((count += ticker));
  };

  let updatedCount = () => {
    if (count < 10) {
      alert(`You can't afford that!`);
    } else {
      setCount(count - 10);
      setTicker(ticker + 1);
    }
  };
  const WannaPlay = () => {
    setCount(0);
    setTicker(1);
  };
  // function Victory() {}
  if (count >= 100) {
    return (
      <div>
        <h2>You Win!</h2>
        <button onClick={WannaPlay}>Play again?</button>
      </div>
    );
  }
  return (
    <div>
      <main>
        <div>
          <h1>Current Score: {count}</h1>
        </div>
        <div>
          <button onClick={addCount}>+{ticker}</button>
        </div>

        <div>
          <button onClick={updatedCount}>
            Pay 10 points to change from +{ticker} to +{ticker + 1}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
