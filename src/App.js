import React from "react";
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
    const { scoreCount, plusCount } = this.state;
    return (
      <main>
        {scoreCount < 100 ? (
          <div>
            <h1> Current Score: {scoreCount}</h1>
            <button onClick={this.incrementScore}>+{plusCount}</button>
            <button onClick={this.payButton}>
              Pay 10 points to change from +{plusCount} to +{plusCount + 1}
            </button>
          </div>
        ) : (
          <div>
            <h2>You Win!</h2>
            <button onClick={this.resetGame}>Play again?</button>
          </div>
        )}
      </main>
    );
  }
}

export default App;
