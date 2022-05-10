import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      incrementor: 1,
    };
  }

  addPoints = () => {
    this.setState({
      count: this.state.count + this.state.incrementor,
    });
  };

  payBtn = () => {
    if (this.state.count >= 10) {
      this.setState({
        count: this.state.count - 10,
        incrementor: this.state.incrementor + 1,
      });
    } else {
      alert("You can't afford that!");
    }
  };

  playAgainBtn = () => {
    this.setState({
      count: 0,
      incrementor: 1,
    });
  };

  render() {
    const { count, incrementor } = this.state;
    if (this.state.count < 100) {
      return (
        <>
          <div>
            <h1>Current Score: {this.state.count}</h1>
          </div>
          <div>
            <button onClick={this.addPoints}>+{this.state.incrementor}</button>
          </div>
          <div>
            <button onClick={this.payBtn}>
              Pay 10 points to change from +{this.state.incrementor} to +{this.state.incrementor + 1}
            </button>
          </div>
        </>
      );
    } else {
      return (
        <div>
            <h1>{this.state.count}!</h1>
            <h2>You Win!</h2>
            <button onClick={this.playAgainBtn}>Play again?</button>
        </div>
      );
    }
  }
}

export default App;
