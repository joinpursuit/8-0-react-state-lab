import React from "react";
import "./App.css";


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      number: 0,
      plusNumber: 1,
    }
  }
    
  addNumber = () => {
    const {number, plusNumber} = this.state
    this.setState ({
      number: number + plusNumber
    })
  }

  permission = () => {
    const {number, plusNumber} = this.state
    if(number < 10) {
      alert("You can't afford that!");
    } else {
      this.setState ({
        number: number - 10,
        plusNumber: plusNumber +1
      })
    }
  }

  reset = () => {
    this.setState = {
      number: 0,
      plusNumber: 1,
    }
  }

  render() {
    const {number, plusNumber} = this.state;

    if(number < 100) {
      return (  
        <main>
          <p>Current Score: {number}</p>
            <button onClick={this.addNumber}>+{plusNumber}</button>{" "}
            <button onClick={this.permission}>Pay 10 points to change from +{plusNumber} to +{plusNumber+1}</button>
        </main> 
      ) 
    } else {
       return (
        <main>
          <h2>You Win!</h2>
          <button onClick={this.reset}>Play again?</button>
        </main>
       )
    }
  }
}

export default App;
