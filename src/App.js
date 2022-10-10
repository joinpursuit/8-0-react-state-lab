import React from "react";
import { useState } from "react";
import StartGame from "./Components/StartGame";
import ResetGame from "./Components/ResetGame";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(1);

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      {count < 100 ? (
        <StartGame
          count={count}
          value={value}
          setCount={setCount}
          setValue={setValue}
        />
      ) : (
        <ResetGame setCount={setCount} setValue={setValue} />
      )}
    </Container>
  );
}

export default App;
