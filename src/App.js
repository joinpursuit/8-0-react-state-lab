
import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  let [index, setIndex] = useState(+1);

  const countUp = () => {
    setCounter((counter += index));
  };

  const pointsIndex = () => {
    if (counter < 10) {
      alert("You can't afford that!");
    } else {
      setIndex(index + 1);
      setCounter(counter - 10);
    }
  };

  const playAgain = () => {
    setCounter(0);
    setIndex(1);
  };

  if (counter >= 100) {
    return (
      <div>
        <h2>You Win!</h2>
        <button onClick={playAgain}>Play again?</button>
      </div>
    );
  }

  return (
    <div>
      <main>
        <div>
          <h1 className={counter} style={{ display: "block" }}>
            Current Score: {counter}
          </h1>
        </div>
        <div>
          <button onClick={countUp}>+{index}</button>
        </div>
        <div>
          <button onClick={pointsIndex}>
            Pay 10 points to change from +{index} to +{index + 1}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;