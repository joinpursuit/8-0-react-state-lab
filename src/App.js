import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      add: 1,
    };
  }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + this.state.add,
    });
  };

  handleDecrementTen = () => {
    if (this.state.count >= 10) {
      this.setState(({ count, add }) => {
        return { count: count - 10, add: add + 1 };
      });
    } else {
      alert("You can't afford that!");
    }
  };

  resetGame = () => {
    this.setState({
      count: 0,
      add: 1,
    });
  };

  render() {
    const { count } = this.state;
    const { add } = this.state;
    let game = (
      <main>
        <p>Current Score: {count}</p>
        <button onClick={this.handleIncrement}>+{add}</button>
        <button onClick={this.handleDecrementTen}>
          Pay 10 points to change from +{add} to +{add + 1}
        </button>
      </main>
    );

    let won = (
      <main>
        <p>You Win!</p>
        <button onClick={this.resetGame}>Play again?</button>
      </main>
    );
    return <>{count < 100 ? game : won}</>;
  }
}

export default App;
