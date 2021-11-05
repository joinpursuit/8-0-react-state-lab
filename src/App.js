import React from "react";
import "./App.css";

class App extends React.Component {

  constructor() {

    super()


    this.state = {
      totalNum: 0,
      incrementor: 1
    }
  }


  handleClick = () => {
    const { totalNum, incrementor } = this.state

    this.setState({
      totalNum: totalNum + incrementor
    })

  }

  coinHandle = () => {

    const { totalNum, incrementor } = this.state

    if (totalNum < 10) {
      alert("You can't afford that!")
    } else {
      this.setState({
        totalNum: totalNum - 10,
        incrementor: incrementor + 1
      })
    }

  }

  playAgain = () => {
    this.setState ({
      totalNum: 0,
      incrementor: 1
    })
  }



  render() {
    const { totalNum, incrementor } = this.state
    if (totalNum < 100) {
      return (
        <main>
          <h1>Current Score: {totalNum}</h1>
          <button onClick={this.handleClick}>+{incrementor}</button>
          <button onClick={this.coinHandle}>Pay 10 points to change from +{incrementor} to +{incrementor + 1} </button>
        </main>
      )
    } else {
      return (
        <main>
          <h2>You Win!</h2>
          <button onClick={this.playAgain}>Play again?</button>
        </main>
      )
    }
  }


}



export default App;
