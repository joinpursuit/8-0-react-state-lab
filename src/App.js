import React from "react";
import Reset from "./Reset";
import Game from "./Game";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      scoreCount: 0,
      plusCount: 1,
    };
  }

  incrementScore = () => {
    const { plusCount, scoreCount } = this.state;
    this.setState({
      scoreCount: scoreCount + plusCount,
    });
  };

  payButton = () => {
    const { plusCount, scoreCount } = this.state;
    if (scoreCount >= 10) {
      this.setState({
        plusCount: plusCount + 1,
        scoreCount: scoreCount - 10,
      });
    } else {
      alert("You can't afford that!");
    }
  };

  resetGame = () => {
    this.setState({
      plusCount: 1,
      scoreCount: 0,
    });
  };

  render() {
    return (
      <main>
        {this.state.scoreCount < 100 ? (
          <Game
            scoreCount={this.state.scoreCount}
            incrementScore={this.incrementScore}
            plusCount={this.state.plusCount}
            payButton={this.payButton}
          />
        ) : (
          <Reset resetGame={this.resetGame} />
        )}
      </main>
    );
  }
}

export default App;
