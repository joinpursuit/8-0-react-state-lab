import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      count:0,
      pointNum: 1,
    }
  }

  increaseCount = () => {
    const {count, pointNum} = this.state;
    if(count >= 10){
      this.setState({
        pointNum: pointNum + 1,
        count: count - 10,
      })
    }else{
      alert("You can't afford that!");
    }
  }

  pointUp = () => {
    const {count, pointNum} = this.state;
    this.setState({
      count: count + pointNum
    })
  }

  handleReset = () => {
    this.setState({
      count:0,
      pointNum: 1,
    })
  }

  render() {
    const {count, pointNum} = this.state;
    if(count < 100){
      return (
        <main>
          <h1 className='title'>Current Score:<span className='currentScore'> {count}</span></h1>
          <button onClick={this.pointUp}> +{pointNum} </button>
          <button onClick={this.increaseCount}>Pay 10 points to change from +{pointNum} to +{pointNum+1}</button>
        </main>
      );
    }else {
      return(
        <main>
          <h2>You Win!</h2>
          <button onClick={this.handleReset}>Play again?</button>
        </main>

      )
    }
  }
}

export default App;
