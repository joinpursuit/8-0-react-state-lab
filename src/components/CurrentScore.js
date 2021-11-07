import React from "react";
import LevelUp from "./LevelUp";

class CurrentScore extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      clicks: 1,
    };
  }

  //event handler
  handleIncrement = () => {
    this.setState({
      currentScore: this.state.currentScore + this.state.clicks});
  };

  //event handler
  handlePayment = () => {
    const { currentScore, clicks } = this.state;
    //minus 10 from currentScore and increment button by 1
    if (currentScore >= 10) {
      this.setState({
          currentScore: currentScore - 10,
          clicks: clicks + 1
      });
    } else {
      alert("You can't afford that!")
    }
  }

  //event handler
  resetGame = () => {
    this.setState({
      currentScore: 0,
      clicks: 1
    })
  }


  render() {
    //destructuring state
    let { currentScore , clicks } = this.state;

    if(currentScore < 100) {
      return (
        <>
          <h1>Current Score: {currentScore} </h1>
          <LevelUp score={currentScore} handleIncrement={this.handleIncrement} handlePayment={this.handlePayment} clicks={clicks}/>
        </>
      )
    } else {
      return (
        <>
          <h2>You Win!</h2>
          <button onClick={this.resetGame}> Play again? </button>
        </>
      )
    }
    
  }
}

export default CurrentScore;