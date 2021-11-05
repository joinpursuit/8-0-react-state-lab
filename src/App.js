import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentScore: 0,
      points: 1,
    }
  }

  increaseScore = () => {
    const { currentScore, points } = this.state;

    if(currentScore >= 10){
      this.setState({
        currentScore: currentScore - 10,
        points: points + 1,
      })
    } else {
      alert("You can't afford that!")
    }
  }

  sumOfPoints = () => {
    const { currentScore, points } = this.state;
    this.setState({
      currentScore: currentScore + points,
    })
  }

  reset = () => {
    this.setState({
      currentScore: 0,
      points: 1,
    })
  }

  render() {
    const { currentScore, points } = this.state;

    if (currentScore < 100){
      return (
        <main>
          <h1 className="title">Current Score: <span className="currentScore">{ currentScore }</span></h1>
          <button onClick={ this.sumOfPoints }>+{points}</button>
          <button onClick={ this.increaseScore }>Pay 10 points to change from +{points} to +{points + 1}</button>
        </main>
      )
    } else {
      return (
        <main>
          <h2>You Win!</h2>
          <button onClick={ this.reset }>Play again?</button>
        </main>
      )
    } 
  }
}

export default App;
