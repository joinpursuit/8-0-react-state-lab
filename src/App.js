import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentCount: 0,
      xvalue: 1
    }
  }

  increaseScore = () => {
    const { currentCount, xvalue } = this.state;

    if(currentCount >= 10){
      this.setState({
        currentCount: currentCount - 10,
        xvalue: xvalue + 1,
      })
    }else{
      alert("You can't afford that!")
    }
  }

  pointsSum = () => {
    const { currentCount, xvalue } = this.state;
    this.setState({
      currentCount: currentCount + xvalue,
    })
  }

  continue = () => {
    this.setState({
      currentCount: 0,
      xvalue: 1,
    })
  }

  render() {
    const { currentCount, xvalue } = this.state;

    if(currentCount < 100){
      return (
        <main>
          <h1 className="title">Current Score: <span className="currentCount">{currentCount}</span></h1>
          <button onClick={this.pointsSum}>+{xvalue}</button>
          <button onClick={this.increaseScore}>Pay 10 points to change from +{xvalue} to +{xvalue + 1}</button>
        </main>
      )
    }else{
      return (
        <main>
          <h2>You Win!</h2>
          <button onClick={this.continue}>Play again?</button>
        </main>
      )
    }
  }
}

export default App;
