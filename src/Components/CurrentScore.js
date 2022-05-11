import React from 'react'

class CurrentScore extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0,
      add: 1,
    }
  }

  increment = () => {
    this.setState({
      count: this.state.count + this.state.add,
    })
  }

  decrement = () => {
    this.state.count >= 10
      ? this.setState({ count: this.state.count - 10, add: this.state.add + 1 })
      : alert("You can't afford that!")
  }

  playbutton = () => {
    this.setState({
      count: 0,
      add: 1,
    })
  }

  render() {
    if (this.state.count < 100) {
      return (
        <div>
          <h2>Current Score: {this.state.count}</h2>
          <button onClick={this.increment}>+{this.state.add}</button>
          <br />
          <br />
          <button onClick={this.decrement}>
            Pay 10 points to change from +{this.state.add} to +
            {this.state.add + 1}
          </button>
        </div>
      )
    } else {
      return (
        <div>
          <h2>CurrentScore: {this.state.count}!</h2>
          <h2>You Win!</h2>
          <button onClick={this.playbutton}>Play again?</button>
        </div>
      )
    }
  }
}

export default CurrentScore

//pay 10 deduct 10 increase by 2
//hint count change and the increment change
// when pay 10 increase the +1 to +2 and +2 to +3 ?
// if -10 add 1 and keep increasing and chaning the button on the current score?
