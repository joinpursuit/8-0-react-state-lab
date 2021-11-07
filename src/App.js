import React from "react";
import "./App.css";
import CurrentScore from "./Components/CurrentScore";

class App extends React.Component {
  render() {
    return (
      <main>
        <CurrentScore />
      </main>
    );
  }
}

export default App;