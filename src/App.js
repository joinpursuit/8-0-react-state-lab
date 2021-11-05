import React from "react";
import "./App.css";
import CurrentScore from "./components/CurrentScore";
// import LevelUp from "./components/LevelUp";
// import ErrorMsg from "./components/ErrorMsg";

class App extends React.Component {
  render() {
    return (
      <main>
        <CurrentScore />
        {/* <LevelUp /> */}
        {/* <ErrorMsg /> */}
      </main>
    );
  }
}

export default App;
