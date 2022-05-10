import React from "react";

class ClickerGame extends React.Component {
  constructor(props) {
    super(props);
    //state created here for score and the button = 1 at first
    this.state = { score: 0, button1: 1 };
  }
  //to increment everytime the button is clicked when score is <100 then we re set state to the score being incremented by keep click and the current score
  increment = () => {
    const { score, button1 } = this.state;
    if (score < 100) {
      this.setState({ score: score + button1 });
    }
  };

  decreaseByTen = () => {
    const { score, button1 } = this.state;
    if (score >= 10) {
      this.setState({ score: score - 10, button1: button1 + 1 });
    } else {
      alert("You can't afford that!");
    }
  };
  //playAgain should have a button with another onClick? when player reaches >100 you win and play again bttn should appear and reset the game.
  playAgain = () => {
    const { score, button1 } = this.state;
    this.setState({ score: 0, button1: 1 });
  };
  render() {
    const { score, button1 } = this.state;
    if (score <= 100) {
      return (
        <div>
          <h1>Current Score: {score}</h1>
          <button onClick={this.increment}>+{button1}</button>
          <button onClick={this.decreaseByTen}>
            Pay 10 points to change from +{button1} to +{button1 + 1}
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Current Score: {score}</h1>
          <h1>You Win!</h1>
          <button onClick={this.playAgain}>Play again?</button>
        </div>
      );
    }
  }
}
export default ClickerGame;
