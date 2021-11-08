import React from "react";
import "./App.css";
import Button from "./components/Button";
import PayTenpoints from "./components/PayTenpoints";
// import CurrentValue from "./components/CurrentValue"
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentValue: 0,
      increaseScore: 1,
    };
  }
 // Increment event handler
  handleIncrement = () => {
  // currentValue = currentValue + increaseScore;
  this.setState({ currentValue: this.state.currentValue + this.state.increaseScore });
};
//Ten point pay event handler
 handleTenPoint = () => {
  if (this.state.currentValue >= 10) {
    this.setState({
      currentValue: this.state.currentValue - 10,
      increaseScore: this.state.increaseScore + 1,
    });
  }
  if (this.state.currentValue < 10) {
    alert("You can't afford that!");
  }
  
};

 handleWin = () => {
  this.setState({
   currentScore: 0,
   increaseScore: 1 
   }) 
 }

  render() {
  
    //destructuring state
    let { currentValue, increaseScore } = this.state;

     if(currentValue >= 100){
    return (
      <main>
          <div>{currentValue}</div>
          <h2>You Win!</h2>
          <button onClick={this.handleWin}>Play again?</button>
        </main>
    ) }else {
    return (
      <main className="app-main">
        <div>Current Score: {currentValue}</div>
        <Button onClick={this.handleIncrement} start={increaseScore} />
        <PayTenpoints
          onClick={this.handleTenPoint}
          start={increaseScore}
          next={increaseScore + 1}
        />
      </main>
    );
  }
}
}
export default App;
