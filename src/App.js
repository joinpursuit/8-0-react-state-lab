import { React, useState } from "react";

import "./App.css";
import Game from "./components/Game";
import Restart from "./components/Restart";

function App() {
  const [win, setWin] = useState(false);
  const [score, setScore] = useState(0);
  const [inc, setInc] = useState(1);

  return (
    <main>
      <p>React State Lab</p>
      {!win ? (
        <Game
          setWin={setWin}
          win={win}
          setInc={setInc}
          setScore={setScore}
          score={score}
          inc={inc}
        />
      ) : null}
      {win ? (
        <Restart
          setWin={setWin}
          win={win}
          setInc={setInc}
          setScore={setScore}
        />
      ) : null}
    </main>
  );
}

export default App;
