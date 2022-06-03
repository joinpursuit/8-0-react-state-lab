import React, { useState } from "react";

const ClickerGame = () => {
  const [score, setScore] = useState(0);
  const [incrementor, setIncrementor] = useState(1);

  //state created here for score and the button = 1 at first
  //this.state = { score: 0, button1: 1 };

  //}
  //to increment everytime the button is clicked when score is <100 then we re set state to the score being incremented by keep click and the current score
  const increment = () => {
    //const { score, button1 } = this.state;
    if (score < 100) {
      setScore(score + incrementor);
      //this.setState({ score: score + button1 });
    }
  };

  const decreaseByTen = () => {
    //const { score, button1 } = this.state;
    if (score >= 10) {
      setScore(score - 10);
      setIncrementor(incrementor + 1);
      //this.setState({ score: score - 10, button1: button1 + 1 });
    } else {
      alert("You can't afford that!");
    }
  };
  //playAgain should have a button with another onClick? when player reaches >100 you win and play again bttn should appear and reset the game.
  const playAgain = () => {
    setScore(0);
    setIncrementor(1);
    //const { score, button1 } = this.state;
    //this.setState({ score: 0, button1: 1 });
  };

  /* //const { score, button1 } = this.state;
    //const [score, setScore] = useState(0) */

  /* //const [incrementor, setIncrementor] = useState(1) */

  if (score <= 99) {
    return (
      <div>
        <h1>Current Score: {score}</h1>
        <button onClick={increment}>+{incrementor}</button>
        <button onClick={decreaseByTen}>
          Pay 10 points to change from +{incrementor} to +{incrementor + 1}
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <h1>Current Score: {score}</h1>
        <h1>You Win!</h1>
        <button onClick={playAgain}>Play again?</button>
      </div>
    );
  }
};
export default ClickerGame;
