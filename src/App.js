import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      x: 1,
      currentScore: 0,
    };
  }
  //increase score by current x value and check reaching 100
  xClick = () => {
    this.setState({ currentScore: this.state.currentScore + this.state.x });
    if (this.state.currentScore >= 100) {
      return (
        <>
          <h2>You Win!</h2>
          <button>Play again?</button>
        </>
      );
    }
  };

  //attempt to increase x-value if conditions met
  xIncrease = () => {
    if (this.state.currentScore >= 10) {
      this.setState({
        currentScore: this.state.currentScore - 10,
        x: this.state.x + 1,
      });
    } else {
      alert("You can't afford that!");
    }
  };

  playAgain = () => {
    this.setState({
      currentScore: 0,
      x: 1,
    });
  };
  render() {
    return (
      <main>
        {this.state.currentScore < 100 && (
          <div>
            <h1>Current Score: {this.state.currentScore}</h1>
            <button onClick={this.xClick}>+{this.state.x}</button>
            <p></p>
            <button onClick={this.xIncrease}>
              Pay 10 points to change from +{this.state.x} to +
              {this.state.x + 1}
            </button>
          </div>
        )}
        {this.state.currentScore >= 100 && (
          <div>
            <h2>You Win!</h2>
            <button onClick={this.playAgain}>Play again?</button>
          </div>
        )}
      </main>
    );
  }
}

export default App;
