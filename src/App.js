import React from "react";
import "./App.css";
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      totalNum: 0,
      increment: 1,
    };
  }
  handleClick = () => {
    this.setState({
      totalNum: this.state.totalNum + this.state.increment,
    });
  };
  alert = () => {
    if (this.state.totalNum < 10) {
      alert("You can't afford that!");
    } else {
      this.setState({
        totalNum: this.state.totalNum - 10,
        increment: this.state.increment + 1,
      });
    }
  };
  newGame = () => {
    this.setState({
      totalNum: 0,
      increment: 1,
    })
  }
  render() {
    const { totalNum, increment } = this.state;
    if (totalNum < 100) {
      return (
        <div>
          <h2>Current Score: {totalNum}</h2>
          <button onClick={this.handleClick}>+{increment}</button>
          <button onClick={this.alert}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </div>
      );
    } else {
      return(
      <div>
        <h2>{totalNum}</h2>
        <h2>You Win!</h2>
        <button onClick={this.newGame}>Play again?</button>
        </div>
      )
    }
  }
}
export default App;













