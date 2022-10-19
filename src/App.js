import React, { useState } from "react";
import "./App.css";
import Score from "./components/Score";
import Buttons from "./components/Buttons";

function App() {
  const [score, setScore] = useState(0);
  const [increment, setIncrement] = useState(1);

  const reset = () => {
    setScore(0);
    setIncrement(1);
  };
  const incrementScore = () => setScore(score + increment);
  const incrementIncrement = () => {
    if (score >= 10) {
      setIncrement(increment + 1);
      setScore(score - 10);
    } else {
      window.alert("You can't afford that!");
    }
  };

  return (
    <div className="clicker">
      <Score score={score} incrementScore={incrementScore} />
      <Buttons
        increment={increment}
        incrementScore={incrementScore}
        incrementIncrement={incrementIncrement}
        score={score}
        reset = {reset}
      />
    </div>
  );
}

export default App;
