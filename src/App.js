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

  render() {
    const { currentScore, points } = this.state;

    return (
      <main>
        <h1 className="title">Current Score:<span className="currentScore">{ currentScore }</span></h1>
        <button onClick={ this.sumOfPoints }>+{points}</button>
        <button onClick={ this.increaseScore }>Pay 10 points to change from +{points} to +{points + 1}</button>
      </main>
    );
  }
}

export default App;
