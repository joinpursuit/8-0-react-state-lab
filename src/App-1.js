import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      countX: 1,
      currentScore: 0,
      payTen: 2,
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
        countX: ++this.state.countX,
        currentScore: this.state.currentScore - 10,
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
    let youWin = "button";
    let winHide = "win-hide";
    if (this.state.currentScore > 100) {
      youWin += " youWin ";
      winHide += " winHide ";
    }
    return (
      <div>
      <main>
        <h1>Current Score: {currentScore}</h1>
        </main>
        <div id="win-button" className={winHide}>
          <p>
            <button onClick={this.handleClickX}> +{countX}</button>
          </p>
          <p>
            <button onClick={this.handleClickPayTen}>
              Pay 10 points to change from +{countX} to +{countX + 1}
            </button>
          </p>
        </div>
        <div id="button" className={youWin}>
          <h2>You Win!</h2>
          <button onClick={this.handleClickReset}>Play again?</button>
        </div>
        </div>
     
    );
  }
}

export default App;
