import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      buttonCount: 1,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + this.state.buttonCount });
  };

  pay = () => {
    if (this.state.count >= 10) {
      this.setState({ count: this.state.count - 10 });
      this.setState({ buttonCount: this.state.buttonCount + 1 });
    } else {
      alert("You can't afford that!");
    }
  };

  win = () => {
    this.setState({ count: 0, buttonCount: 1 });
  };

  render() {
    if (this.state.count < 100) {
      return (
        <>
          <h1>Current Score: {this.state.count}</h1>
          <button onClick={this.increment}>+{this.state.buttonCount}</button>
          <br />
          <button onClick={this.pay}>
            Pay 10 points to change from +{this.state.buttonCount} to +
            {this.state.buttonCount + 1}
          </button>
        </>
      );
    } else {
      return (
        <>
          <h1>Score: {this.state.count}</h1>
          <h2>You Win!</h2>
          <button onClick={this.win}>Play again?</button>
        </>
      );
    }
  }
}

export default App;
