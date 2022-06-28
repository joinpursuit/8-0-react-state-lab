import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [scorePlus, setPlus] = useState(1);
  const [more, evenMore] = useState(2);

  const numberGoesUp = () => {
    return setScore((prev) => {
      return (prev += scorePlus);
    });
  };

  const morePower = () => {
    if (score < 10) {
      alert("You can't afford that!");
      return;
    }
    setScore((prevScore) => {
      return prevScore - 10;
    });
    evenMore((prevMore) => {
      return (prevMore += 1);
    });
    setPlus((prevPlus) => {
      return (prevPlus = more);
    });
  };

  return (
    <main>
      <h1>Current Score: {score}</h1>
      <button onClick={numberGoesUp}>+{scorePlus}</button>
      <br></br>
      <button onClick={morePower}>
        Pay 10 points to change from +{scorePlus} to +{more}
      </button>
    </main>
  );
};

export default App;
