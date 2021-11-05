import React from "react";
import "./App.css";

class App extends React.Component {

  constructor() {

    super()


    this.state = {
      totalNum: 0
    }
  }

  handleClick = () => {
    this.totalNum += 1


    this.setState({
      totalNum: this.state.totalNum + 1
    })

  }


  render() {
    return (
      <main>
      <h1>Your Current Score: {this.state.totalNum}</h1>
        <button onClick = {this.handleClick}>Add 1</button>
      </main>
    );
  }
}

export default App;
