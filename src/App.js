import React from "react";
import "./App.css";

// state should be here only, try and get it outta current and put it here

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      incrementor: 1,
    };
  }

  //event handler
  //this is your current score
  increase = () => {
    this.setState({
      currentScore: (this.state.currentScore +=
        this.state.incrementor) /**how much the button has is what it's increased by. */,
    });
  };

  decreasePoints = () => {
    if (this.state.currentScore < 10) {
      alert("You can't afford that!");
    } else {
      this.setState({
        currentScore: this.state.currentScore - 10,
      });
      this.setState({ incrementor: (this.state.incrementor += 1) });
    }
  };

  youWin = () => {
    this.setState({ currentScore: 0, incrementor: 1 });
  };

  render() {
    let { currentScore, incrementor } = this.state;

    const active =
      currentScore < 100 ? (
        <>
          <div>Current Score: {currentScore}</div>
          <button onClick={this.increase}>+{incrementor}</button>
          <button onClick={this.decreasePoints}>
            {" "}
            Pay 10 points to change from +{incrementor} to +{incrementor + 1}
          </button>
        </>
      ) : (
        <>
          <h2>You Win!</h2>
          <button onClick={this.youWin}>Play again?</button>
        </>
      );

    return (
      <main>{active}</main>
      /* 
          -current score: {} 
          -button for click to add points by however many is on the button
          -another button to pay 10 points to increase the first button to the next number (add an alert if you dont have enough points to pay the ten to increase)
          - when you get to 101, you replace the two buttons with "You WIN!" and a "play again?" button that resets the game 
        */
    );
  }
}

export default App;
