import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      currentInc: 1,
      nextInc: 2,
    };
  }
  clickIncrement = () => {
    this.setState({
      count: this.state.count < 100 ? this.state.count + this.state.currentInc : alert("You Win!! You reached 100 points!!!")
    });
  };
  clickNextIncrement = () => {
    this.setState({
      currentInc: this.state.currentInc + 1,
      nextInc: this.state.nextInc + 1,
      count: this.state.count > 10 ? this.state.count - 10 : alert("You can't afford that😭")
    });
  };
  render() {
    const { count, currentInc, nextInc } = this.state
    return (
      <main>
        <h1>React State Lab</h1>

        <div id="current_score">
          <h3>Current Score: {count}</h3>
        </div>

        <div id="increment">
          <button onClick={this.clickIncrement}>+ {currentInc}</button>
        </div>

        <div id="next_increment">
          <button onClick={this.clickNextIncrement}>Pay 10 points to change from +{currentInc} to +{nextInc}</button>
        </div>

      </main>
    );
  }
}

export default App;
