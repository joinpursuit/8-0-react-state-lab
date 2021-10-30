import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = { score: 0, currInc: 1, hasWon: false };
    this.incrementScore = this.incrementScore.bind(this);
    this.incrementButtonPlus = this.incrementButtonPlus.bind(this);
    this.reset = this.reset.bind(this);
  }

  incrementScore() {
    this.setState(({ score, currInc }) => {
      return { score: score + currInc };
    });

    this.setState(({ score }) => {
      return { hasWon: score >= 100 };
    });
  }

  incrementButtonPlus() {
    if (this.state.score >= 10) {
      this.setState(({ score, currInc }) => {
        return {
          score: score - 10,
          currInc: currInc + 1,
        };
      });
    } else {
      alert("You can't afford that!");
    }
  }

  reset() {
    this.setState(() => {
      return { score: 0, currInc: 1, hasWon: false };
    });
  }

  render() {
    const result = this.state.hasWon ? (
      <main>
        <h2>You Win!</h2>
        <button onClick={this.reset}>Play again?</button>
      </main>
    ) : (
      <main>
        <p>Current Score: {this.state.score}</p>
        <button onClick={this.incrementScore}>+{this.state.currInc}</button>
        <button onClick={this.incrementButtonPlus}>
          Pay 10 points to change from +{this.state.currInc} to +
          {this.state.currInc + 1}
        </button>
      </main>
    );

    return <div>{result}</div>;
  }
}

export default App;
