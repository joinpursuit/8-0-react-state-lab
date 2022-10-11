import { useState } from "react";
import React from "react";
import "./App.css";
import GameOn from "./Components/GameOn";
import Winner from "./Components/Winner";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [incrementor, setIncrementor] = useState(1);

  return (
    <main>
      {currentScore < 100 ? (
        <>
          <GameOn
            currentScore={currentScore}
            setCurrentScore={setCurrentScore}
            incrementor={incrementor}
            setIncrementor={setIncrementor}
          />
        </>
      ) : (
        <>
          <Winner
            setCurrentScore={setCurrentScore}
            setIncrementor={setIncrementor}
          />
        </>
      )}
    </main>
  );
}

export default App;
