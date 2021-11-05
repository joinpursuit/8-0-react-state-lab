import React from "react";
import "./App.css";
import GamePlay from "./Components/GamePlay";
import WinResult from "./Components/WinResult";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      increment: 1,
      payPoints: 2
    }
  }

  incrementClick = () => {
    this.setState({
      currentScore: this.state.currentScore + this.state.increment,
    })
  }

  payClick = () => {
    if (this.state.currentScore < 10) {
      alert("You can't afford that!") 
    } else {
      this.setState({
        currentScore: this.state.currentScore - 10,
        increment: this.state.payPoints,
        payPoints: this.state.payPoints + 1
      })
    }
  }

  replayClick = () => {
    this.setState({
      currentScore: 0,
      increment: 1,
      payPoints: 2
    })
  }

  
  render() {
    const { currentScore, increment, payPoints } = this.state;
    // const other = 
    //   <div className="gamePlay">
    //     <h1>Current Score: { currentScore }</h1>
    //     <button onClick={this.incrementClick}> +{ increment }</button>
    //     <button onClick={this.payClick}>Pay 10 points to change from +{increment } to +{ payPoints }</button>
    //   </div>
    // const winResult = 
    //   <div className="winResult">
    //     <h2>You Win!</h2>
    //     <button onClick={this.replayClick}>Play again?</button>
    //   </div>
  
    return (
      <div className="container">
        {currentScore >= 100 ? <WinResult replayClick={this.replayClick}/> : <GamePlay currentScore={currentScore} increment={increment} payPoints={payPoints} incrementClick={this.incrementClick} payClick={this.payClick} /> }
      </div>
    );
  }
}

export default App;
