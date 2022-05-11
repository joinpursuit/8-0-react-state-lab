import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countX: 1,
      currentScore: 0,
    };
  }
  handleClickX = () => {
    this.setState({
      currentScore: ++this.state.currentScore,
    });
  };
  handleClickPayTen = () => {
    if (this.state.currentScore >= 10) {
      this.setState({
        currentScore: this.state.currentScore - 10,
        countX: ++this.state.countX,
      });
    } else {
      alert("You can't afford that!");
    }
  };
  handleClickReset = () => {
    this.setState({
      currentScore: 0,
      countX: 1,
    });
  };
  render() {
    const { currentScore } = this.state;
    const { countX } = this.state;
    let youWin = "hidden";
    let winHide = "winHide";
    if (currentScore > 100) {
      youWin = " youWin ";
      winHide = " hidden ";
    }

    return (
      <main>
        Current Score: {currentScore}
        <div className={winHide}>
          <p>
            <button onClick={this.handleClickX}> +{countX}</button>
          </p>
          <p>
            <button onClick={this.handleClickPayTen}>
              Pay 10 points to change from +{countX} to +{countX + 1}
            </button>
          </p>
        </div>
        <div className={youWin}>
          <h2>You Win!</h2>
          <button onClick={this.handleClickReset}>Play again?</button>
        </div>
      </main>
    );
  }
}

export default App;
