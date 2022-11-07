import React, { useState } from "react";
import "./App.css";

function App() {
  const [sum, setSum] = useState(0);
  const [increment, setIncrement] = useState(1);
  // const [win, setWin] =

  function handleSumClick() {
    setSum(sum + increment);
    // if(sum >= 100) {

    // }
  }

  function handleIncrementClick() {
    if (sum >= 10) {
      setIncrement(increment + 1);
      setSum(sum - 10);
    } else {
      alert("You can't afford that!");
    }
  }

  function resetGame() {
    setSum(0);
    setIncrement(1);
  }

  return (
    <main>
      {sum >= 100 ? (
        <div>
          <p>You Win!</p>
          <button onClick={resetGame}>Play again?</button>
        </div>
      ) : (
        <div>
          <section>Current Score: {sum}</section>
          <button onClick={handleSumClick}>+{increment}</button>
          <button onClick={handleIncrementClick}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </div>
      )}
    </main>
  );
}

export default App;
