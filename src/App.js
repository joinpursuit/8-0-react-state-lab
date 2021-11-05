import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      increment: 1
    };
  }

  //event handler to increase counter
  countClick = () => {
    this.setState({ count: this.state.count + this.state.increment });
  };

  alertMessage = () => {
    alert("You can't afford that!")
  }

  //event handler to increase increment
  incrementClick = () => {
    this.setState({ count: this.state.count - 10 });
    this.setState({ increment: this.state.increment + 1 });
  }

  render() {
    const { count } = this.state;
    const { increment } = this.state;
    // const number = 1 + Number({ increment: increment })
    // console.log(number)


    if (count < 100) {
      return (
        <main>
          <p> Current Score: {count} </p>
          <button onClick={this.countClick}> +{increment}</button>
          <button onClick=
            {count < 10 ? this.alertMessage : this.incrementClick}
          >  Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </main >
      );
    } else {
      return (
        <main>
          <h1>You Win!</h1>
          <button onClick={() => this.setState({ count: 0, increment: 1 })}> Play again? </button>
        </main>
      )
    }
  }
}

export default App;
