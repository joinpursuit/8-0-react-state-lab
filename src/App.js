import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      increment: 1,
    };
  }

  handleClick = () => {

    this.setState({
      count: (this.state.count + this.state.increment)
    });
  };

  subtract = () => {
    if (this.state.count < 10) {
      window.alert("You can't afford that!");
    } else {
      this.setState({
        count: this.state.count - 10,
        increment: this.state.increment + 1,
      });
    }
  };

  restart = () => {
    this.setState({
      count: 0,
      increment: 1,
    });
  };

  render() {
    if (this.state.count < 100) {
      return (
        <div>
          <h1>Current Score: {this.state.count}</h1>
          <button onClick={this.handleClick}>+{this.state.increment}</button>
          <button onClick={this.subtract}>
            Pay 10 points to change from +{this.state.increment} to +{this.state.increment + 1}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Winning Score: {this.state.count}</h1>
          <h2>You Win!</h2>
          <button onClick={this.restart}>Play again?</button>
        </div>
      );
    }
  }
}

export default App;
