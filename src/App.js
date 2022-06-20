import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {  //state is set
    super();
    this.state = {
      countX: 1,
      currentScore: 0,
    };
  }
  handleClickX = () => { //handleClickX handles incrementing the currentScore
    this.setState({
      currentScore: ++this.state.currentScore,
    });
  };
  handleClickPayTen = () => {  //handles players payment of 10 when clicked
    if (this.state.currentScore >= 10) {
      this.setState({
        currentScore: this.state.currentScore - 10,
        countX: ++this.state.countX,
      });
    } else {
      alert("You can't afford that!");
    }
  };
  handleClickReset = () => { //resets if cure
    this.setState({
      currentScore: 0,
      countX: 1,
    });
  };
  render() {
    const { currentScore } = this.state;
    const { countX } = this.state;
    let youWin = "hidden";
    let hideWin = "winHide";
    if (currentScore > 100) {
      youWin = " youWin ";
      hideWin = " hidden ";
    }

    return (
      <main>
        Current Score: {currentScore}
        <div className={hideWin}>
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