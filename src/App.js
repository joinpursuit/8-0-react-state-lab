import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      current: 0,
      plus: 1,
      complete: false,
    };
  }

  addHandle = () => {
    if (this.state.current < 100) {
      this.setState({
        current: this.state.current + this.state.plus,
      });
    } else if (this.state.current >= 100) {
      this.setState({
        complete: true,
      });
    }
  };

  bonusHandle = () => {
    if (this.state.current >= 10) {
      this.setState({
        current: this.state.current - 10,
        plus: this.state.plus + 1,
      });
    } else {
      window.alert("You can't afford that!");
    }
  };

  reset = () => {
    this.setState({
      current: 0,
      plus: 1,
      complete: false,
    });
  };

  render() {
    const { current, plus, complete } = this.state;

    if (complete || current >= 100) {
      return (
        <main>
          {/* <h2>Current Score: {current}</h2> */}
          <br />
          <br />
          <br />
          <div>
            <h2>You Win!</h2>
            <button onClick={this.reset}>Play again?</button>
          </div>
        </main>
      );
    } else {
      return (
        <main>
          <h2>Current Score: {current}</h2>
          <div>
            <button id="add" onClick={this.addHandle}>
              +{plus}
            </button>
          </div>
          <div>
            <button id="bonus" onClick={this.bonusHandle}>
              Pay 10 points to change from +{plus} to +{plus + 1}
            </button>
          </div>
        </main>
      );
    }
  }
}

export default App;
