import { Component } from "react";
import "./KeepScore.css";

class KeepScore extends Component {
  constructor() {
    super();
    this.state = {
      score: 0,
      plusX: 1,
      wonGame: "",
    };
  }

  addToScore = () => {
    const { score } = this.state;

    if (score < 100) {
      this.setState({
        score: this.state.score + this.state.plusX,
      });
    } else {
      this.setState({
        wonGame: "wonGame",
      });
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
    const { score, plusX, wonGame } = this.state;

    if (score < 100) {
      return (
        <section className="currentScore-section">
          <header>Clicker Game</header>
          <h2>Current Score: {score}</h2>
          <button className={wonGame} onClick={this.addToScore}>
            +{plusX}
          </button>
          <button onClick={this.pay10Points} className={wonGame}>
            Pay 10 points to change from +{plusX} to +{plusX + 1}
          </button>
        </section>
      );
    } else {
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
