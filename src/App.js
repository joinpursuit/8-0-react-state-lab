import React from "react";
import "./App.css";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      currentScore: 0,
    }
  }

  render() {
    const {currentScore} = this.state;
    
    return (
      <div className="gamePlay">
        <h1 className>Current Score: {currentScore}</h1>
      </div>
    );
  }
}

export default App;
