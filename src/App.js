import React from "react";
import "./App.css";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      currentScore: 0,
      increment: 1,
    }
  }

  incrementClick = () => {
    const {currentScore, increment} = this.state

    this.setState({
      currentScore: currentScore + increment
    })
  }

  render() {
    const {currentScore, increment} = this.state;
    const gamePlay = 
      <div className="gamePlay">
        <h1 className>Current Score: {currentScore}</h1>
        <button onClick={this.incrementClick}>+{increment}</button>
      </div>

    return (
      <div >
        {gamePlay}
      </div>
    );
  }
}

export default App;
