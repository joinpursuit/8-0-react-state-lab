import React from "react";
import "./App.css";

function App () {
  const [score, setScore] = useState(0);
  const [adder, setAdder] = useState(1);

  const upgrade = () => {
    if (score < 10) return alert("You can't afford that!");
    setAdder(adder + 1);
    setScore(score - 10);
  };

  const reset = () => {
    setScore(0);
    setAdder(1);
  };

  const addScore = () => setScore(score + adder);

  const renderResult = () => {
    return (
      <>
        <h1>You Win!</h1>
        <button onClick={reset}>Play again?</button>
      </>
    );
  };

  const renderControls = () => {
    return (
      <>
        <button onClick={addScore}>+{adder}</button>
        <div>
          <button onClick={upgrade}>
            Pay 10 points to change from +{adder} to +{adder + 1}
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <main>
        {score < 100 && <h2>Current Score: {score}</h2>}
        {score >= 100 ? renderResult() : renderControls()}
      </main>
    </>
  );
}

export default App;
