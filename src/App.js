import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      incrementor: 1,
    };
  }
  increment = () => {
    this.setState({
      currentScore: this.state.currentScore + this.state.incrementor - 10,
    });
  };

  incrementby1 = () => {
    this.setState({ incrementor: this.state.incrementor + 1 });
  };
  render() {
    return (
      <main>
        <p>Current Score: {this.state.currentScore}</p>
        <button onClick={this.increment}> +{this.state.incrementor}</button>
        <button onClick={this.incrementby1}>
          Pay 10 points to change from +{this.state.incrementor} to +
          {this.state.incrementor + 1}
        </button>
      </main>
    );
  }
}

export default App;

// //event handler

// //event handler
// handleDeposit = () => {
//   this.setState({ currentBalance: this.state.currentBalance + 5 });
// };
