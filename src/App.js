import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0,
      incrementor: 1,
    }
  }

  
  increaseCount = () => {
    const { count, incrementor } = this.state
    
    if(count >= 10) {
      this.setState ({
        count: count - 10,
        incrementor: incrementor + 1,
      })
    } else {
      window.alert("You can't afford that!")
    }
  }
  
  addOne = () => {
    const { count, incrementor } = this.state

    this.setState({
      count: count + incrementor
    })
  }
  
  resetCount = () => {
    this.setState ({
      count: 0,
      incrementor: 1,
    })
  }
  
  render() {
    const { count, incrementor} = this.state

    if (count < 100) {
        return (
        <main>
          <h2>Current Score: {count}</h2>
          <button type="submit" onClick={this.addOne} style={count >= 100 ? {display:"none"} : null }> +{incrementor} </button>
          <br /><br />
          <button type="submit" onClick={this.increaseCount} style={count >= 100 ? {display: "none"} : null}>Pay 10 points to change from +{incrementor} to +{incrementor + 1}</button>
        </main>
        )
    }
   else {
    return (
      <main>
        <h2>You Win!</h2>
        <button onClick={this.resetCount}>Play again?</button>
      </main>
    )
   }
  }
}

export default App;
