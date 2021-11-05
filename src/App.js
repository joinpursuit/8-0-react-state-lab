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

  coinHandle = () => {

    if (this.state.totalNum < 10){
      window.alert("You can't afford that!")
    } else {
      this.setState({
        totalNum: this.state.totalNum -10
      })
    }
  
}



render() {
  return (
    <main>
      <h1>Your Current Score: {this.state.totalNum}</h1>
      <button onClick={this.handleClick}>Add 1</button>
      <button onClick = {this.coinHandle}>Pay 10 points to change from</button>
    </main>
  );
}
}

export default App;
