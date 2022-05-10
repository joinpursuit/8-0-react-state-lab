import { Component } from "react";
import "./KeepScore.css";

class KeepScore extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      plusX: 1,
    };
  }

  addToScore = () => {
    const { score } = this.state;

    if (score < 100) {
      this.setState({
        score: this.state.score + this.state.plusX,
      });
    } else {
      const pay10Points = document.querySelector(".pay10Points");
      const addToScoreButton = document.querySelector(".addToScoreButton");

      addToScoreButton.classList.add("wonGame");
      pay10Points.classList.add("wonGame");
    }
  };

  pay10Points = () => {
    const { score } = this.state;

    if (score >= 10) {
      this.setState({
        score: this.state.score - 10,
        plusX: this.state.plusX + 1,
      });
    } else {
      return alert(`You can't afford that!`);
    }
  };

  resetGame = () => {
    this.setState({
      score: 0,
      plusX: 1,
    });
  };

  render() {
    const { score, plusX } = this.state;

    if (score < 100) {
      console.log("under 100");
      return (
        <section className="currentScore-section">
          <header>Clicker Game</header>
          <h2>Current Score: {score}</h2>
          <button className="addToScoreButton" onClick={this.addToScore}>
            +{plusX}
          </button>
          <button onClick={this.pay10Points} className="pay10Points">
            Pay 10 points to change from +{plusX} to +{plusX + 1}
          </button>
        </section>
      );
    } else {
      console.log("inside else");
      return (
        <section className="currentScore-section">
          <header>Clicker Game</header>
          <h2>You Win!</h2>
          <button onClick={this.resetGame} className="resetGame">
            Play again?
          </button>
        </section>
      );
    }
  }
}

export default KeepScore;
