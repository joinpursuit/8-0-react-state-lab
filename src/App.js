import React from "react";
import "./App.css";
import Increment from "./src./Increment";
// import Score from "./Score";
// import playAgain from ".playAgain";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
    };
  }

  //event handler
  changeScore = () => {
    this.setState({ currentScore: this.state.currentScore + 1 });
  };
  render() {
    return (
      <main>
        <h2>Current Score: {currentScore}</h2>
      </main>
      {if(currentScore >= 10){
        currentScore += 1;
      }}
      

    );
  }
}

export default App;



