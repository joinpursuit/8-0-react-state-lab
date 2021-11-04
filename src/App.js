import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      increase: 1,
    };
  }

  handleClick = () => {
    this.setState({
      currentScore: this.state.currentScore + this.state.increase,
    });
  };

  showUser = () => {
    alert("You can't afford that!");
  };

  updatedScore = () => {
    this.state.increase = this.state.increase + 1;
    this.setState({ currentScore: this.state.currentScore - 10 });
  };

  playAgain = () => {
    this.state.increase = 1;
    this.setState({ currentScore: 0 });
  };

  render() {
    const { currentScore } = this.state;
    const { increase } = this.state;

    const playing =
      currentScore < 100 ? (
        <>
          <p>Current Score: {currentScore}</p>
          <button onClick={this.handleClick}>+{increase}</button>
          <button
            onClick={currentScore < 10 ? this.showUser : this.updatedScore}
          >
            Pay 10 points to change from +{increase} to +{increase + 1}{" "}
          </button>
        </>
      ) : (
        <>
          <p>You Win!</p>
          <button onClick={this.playAgain}>Play again?</button>
        </>
      );

    return <main>{playing}</main>;
  }
}

export default App;
