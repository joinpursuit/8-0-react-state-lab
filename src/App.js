import React from "react";
import "./App.css";

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      currentScore: 0,
      increment: 1,
      payPoints: 2
    }
  }

  incrementClick = () => {
    const {currentScore, increment} = this.state

    this.setState({
      currentScore: currentScore + increment
    })
  }

  payClick = () => {
    const {currentScore, increment, payPoints} = this.state

    if (currentScore < 10) {
      alert("You can't afford that!")
    } else {
      this.setState({
        currentScore: currentScore - 10,
        increment: payPoints,
        payPoints: payPoints + 1
      })
    }
  }

  render() {
    const {currentScore, increment, payPoints} = this.state;
    const gamePlay = 
      <div className="gamePlay">
        <h1 className>Current Score: {currentScore}</h1>
        <button onClick={this.incrementClick}>+{increment}</button>
        <button onClick={this.payClick}>Pay 10 points to change from +{increment} to +{payPoints}</button>
      </div>

    return (
      <div >
        {gamePlay}
      </div>
    );
  }
}

export default App;
