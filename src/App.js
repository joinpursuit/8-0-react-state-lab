import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      increCounter: 1,
    };
  }

  increButton = () => {
    this.setState({
      count: this.state.count + this.state.increCounter,
    });
  };

  decreButton = () => {
    if (this.state.count < 10) {
      alert("You can't afford that!");
      return;
    }
    this.setState({
      count: this.state.count - 10,
      increCounter: this.state.increCounter + 1,
    });
  };

  win = () => {
    this.setState({
      count: 0,
      increCounter: 1,
    });
  };

  render() {
    const { count, increCounter } = this.state;

    return this.state.count >= 100 ? (
      <div>
        <h2>You Win!</h2>
        <button onClick={this.win}>Play again?</button>
      </div>
    ) : (
      <main>
        <h1>Current Score: {count}</h1>

        <button onClick={this.increButton}>+{increCounter}</button>
        <button onClick={this.decreButton}>
          Pay 10 points to change from +{increCounter} to +{increCounter + 1}
        </button>
        <p>Clicked {count} times</p>
      </main>
    );
  }
}

export default App;
