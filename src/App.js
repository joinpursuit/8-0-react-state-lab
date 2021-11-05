import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      count: 0,
      one: 1,
    }
  }

  addOne = () => {
    const { count, one } = this.state

    this.setState({
      count: count + 1
    })
  }

  increaseCount = () => {
    const { count, one } = this.state

    if(count >= 10) {
      this.setState ({
        count: count - 10,
        one: one + 1,
      })
    } else {
      window.alert("You can't afford that!")
    }
  }

  // resetCount = () => {
  //   this.setState ({
  //     count: 0,
  //   })
  // }
  
  render() {
    const { count, one } = this.state

    return (
      <main>
        <h2>Current Score: {count}</h2>
          <div>
            <button type="submit" onClick={this.addOne}> +{one} </button>
          </div>
          <div>
            <button type="submit" onClick={this.increaseCount}>Pay 10 points to change from +{one} to +{one + 1}</button>
          </div>
      </main>
    );
  }
}

export default App;
