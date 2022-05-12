import React from "react";
import "./App.css";

class App extends React.Component {
constructor() {
  super();
  this.state = {
    scoreNow: 0,
    adding: 1,
  };
}

handleClick = () => {
  this.setState({
    scoreNow: this.state.scoreNow + this.state.adding,
  });
};

forUser = () => {
  alert("You can't afford that!");
};

newScore = () => {
  this.state.adding = this.state.adding + 1;
  this.setState({ scoreNow: this.state.scoreNow - 10 });
};

playAnother = () => {
  this.state.adding = 1;
  this.setState({ scoreNow: 0 });
};

render() {
  const { scoreNow } = this.state;
  const { adding } = this.state;

  const playing =
    scoreNow < 100 ? (
      <>
        <p>Current Score: {scoreNow}</p>
        <button onClick={this.handleClick}>+{adding}</button>
        <button
          onClick={scoreNow < 10 ? this.forUser : this.newScore}
        >
          Pay 10 points to change from +{adding} to +{adding + 1}{" "}
        </button>
      </>
    ) : (
      <>
        <p>You Win!</p>
        <button onClick={this.playAnother}>Play again?</button>
      </>
    );

  return <main>{playing}</main>;
}
}

export default App;
