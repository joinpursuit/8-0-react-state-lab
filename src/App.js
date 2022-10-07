import React from "react";
import { useState } from "react";
import "./App.css";

function App() {
  const [points, setPoints] = useState(0);
  const [incrementor, setIncrementor] = useState(1);
  // const [visibility, setVisibility] = useState(`hidden`);

  const increasePoints = () => {
    setPoints(points + incrementor);
    // if (points > 99) {
    // }
  };

  const updateIncrementor = () => {
    if (points > 9) {
      setIncrementor(incrementor + 1);
      setPoints(points - 10);
    } else {
      alert(`You can't afford that!`);
    }
  };

  return (
    <main>
      <h1>Current Score: {points}</h1>
      <button onClick={increasePoints}>+{incrementor}</button>
      <br />
      <button onClick={updateIncrementor}>
        Pay 10 points to change from +{incrementor} to +{incrementor + 1}
      </button>
    </main>
  );
}

export default App;
