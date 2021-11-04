import React from "react";
import "./App.css";
import CurrentScore from "./components/CurrentScore";
import LevelUp from "./components/LevelUp";

class App extends React.Component {
  render() {
    return (
      <main>
        <CurrentScore />
        <LevelUp />
      </main>
    );
  }
}

export default App;
