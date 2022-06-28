import React from "react";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [scorePlus, setPlus] = useState(1);
  const [more, evenMore] = useState(2);
  const [win, setWin] = useState(false);
  const [visible, setVisible] = useState(false);

  const restartGame = () => {
    setVisible();
    setScore(0);
    setPlus(1);
    evenMore(2);
    setWin(false);
  };

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

  useEffect(() => {
    if (score >= 100) {
      setVisible(true);
    }
    return () => {};
  }, [score]);

  return (
    <main>
      {visible ? (
        <>
          <h2>You Win!</h2>
          <button onClick={restartGame}>Play again?</button>
        </>
      ) : null}
      {!visible ? (
        <>
          <h1>Current Score: {score}</h1>
          <button onClick={numberGoesUp}>+{scorePlus}</button>
          <br></br>
          <button onClick={morePower}>
            Pay 10 points to change from +{scorePlus} to +{more}
          </button>
        </>
      ) : null}
    </main>
  );
};

export default App;
