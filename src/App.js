import React from "react";
import "./App.css"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      points: 0,
      incrementor: 1,
    };
  }

  addPoints = () => {
    this.setState({
      points: this.state.points + this.state.incrementor,
    });
  };

  payButton = () => {
    if (this.state.points >= 10) {
      this.setState({
        points: this.state.points - 10,
        incrementor: this.state.incrementor + 1,
      });
    } else {
      alert("You can't afford that!");
    }
  };

  playAgain = () => {
    this.setState({
      points: 0,
      incrementor: 1,
    });
  };

  render() {
    const { points, incrementor } = this.state;
    if (this.state.points < 100) {
      return (
        <>
          <div>
            <h1>Current Score: {this.state.points}</h1>
          </div>
          <div>
            <button onClick={this.addPoints}>+{this.state.incrementor}</button>
          </div>
          <div>
            <button onClick={this.payButton}>
              Pay 10 points to change from +{this.state.incrementor} to +{this.state.incrementor + 1}
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div>
            <h1>{this.state.points}!</h1>
            <h2>You Win!</h2>
            <button onClick={this.playAgain}>Play again?</button>
        </div>
      );
    }
  }
}

export default App;
