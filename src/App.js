import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      add: 1,
      // result: false,
    };
  }
  //EVENT HANDLER TO INCREASE COUNT, STATE CHANGES TO SET.STATE 
  handleIncrement = () => {
    this.setState({
      //SET.STATE IS THE CURRENT COUNT PLUS THE ADDITIONAL INCREASE
      count: this.state.count + this.state.add,
    });
    // if (this.state.count >= 100) {
    //   this.setState({
    //     result: true,
    //   });
    // }
  };
  //EVENT HANDLER TO PAY 10 POINTS IF COUNT IS GREATER THAN OR EQUAL TO 10, SET IS NOW SET.STATE
  handleDecrementTen = () => {
    if (this.state.count >= 10) {
      this.setState(({ count, add }) => {
        return { count: count - 10, add: add + 1 };
      });
    } else {
      alert("You can't afford that!");
    }
  };
  resetGame = () => {
    this.setState({
      count: 0,
      add: 1,
      // result: false,
    });
  };
  render() {
    const { count } = this.state;
    const { add } = this.state;
    // const { result } = this.state;
    
    // if (!result) {
    if (count < 100) {
      // console.log(result)
      return (
        <main>
          <h2>Current Score: {count}</h2>
          <button onClick={this.handleIncrement}>+{add}</button>
          <button onClick={this.handleDecrementTen}>
            Pay 10 points to change from +{add} to +{add + 1}
          </button>
        </main>
        
      );
    } else {
      // console.log(result)
      return (
        <main>
          <h2>You Win!</h2>
          <button onClick={this.resetGame}>Play again?</button>
        </main>
      );
    }
  }
}

export default App;
