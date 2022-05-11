import React from "react";
import "./App.css";
import CountingGame from "./CountingGame";
import PlayAgain from "./PlayAgain";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      incrementValue: 1,
    };
  }

  incrementor() {
    const { counter, incrementValue } = this.state;
    this.setState({
      counter: counter + incrementValue,
    });
  }

  upgradeIncrementValue() {
    let { counter, incrementValue } = this.state;
    if (counter >= 10) {
      counter -= 10;
      incrementValue += 1;
      this.setState({
        counter: counter,
        incrementValue: incrementValue,
      });
    } else {
      alert("You can't afford that!");
    }
  }

  playAgain() {
    this.setState({
      counter: 0,
      incrementValue: 1,
    });
  }

  render() {
    return (
      <main>
        {this.state.counter < 100 ? (
          <CountingGame
            counter={this.state.counter}
            incrementValue={this.state.incrementValue}
            incrementHandler={() => this.incrementor()}
            upgradeIncrementValueHandler={() => {
              this.upgradeIncrementValue();
            }}
          />
        ) : (
          <PlayAgain
            playAgainHandler={() => {
              this.playAgain();
            }}
          />
        )}
      </main>
    );
  }
}

export default App;
