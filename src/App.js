import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state={
      score:0,
      increment:1
    }
  }
  handleIncrementScore=()=>{
    this.setState({
      score:this.state.score+this.state.increment
    })
  }
  handlePay10=()=>{
    if(this.state.score<10) alert("You can't afford that!");
    else {
      this.setState({
        score:this.state.score-10,
        increment:this.state.increment +1
      })
    }
  }
  handleReset=()=>{
    this.setState({
      score:0,
      increment:1
    })
  }
  render() {
    if(this.state.score<100) {
      return (
        <main>
          
            <h1>Current Score: {this.state.score}</h1>
            <button onClick={this.handleIncrementScore} style={{width:"50px"}}>+{this.state.increment}</button>
            <button onClick={this.handlePay10} style={{width:"250px"}}>Pay 10 points to change from +{this.state.increment} to +{this.state.increment+1}</button>
          
        </main>
      );

    } else {
      return(
        <main>
          
            {/* <h1>Current Score: {this.state.score}</h1> */}
            <h2>You Win!</h2>
            <button onClick={this.handleReset} style={{width:"100px"}}>Play again?</button>
         
        </main>

      )
    }
    
  }
}

export default App;
