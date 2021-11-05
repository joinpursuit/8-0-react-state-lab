import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state={
      score:0,
      increment:1,
      acutalClass:"black"
    }
  }
  handleIncrementScore=()=>{
    this.setState({
      score:this.state.score+this.state.increment,
      acutalClass:"blue"
    })
  }
  handlePay10=()=>{
    this.setState({
      acutalClass:"blue"
    })
    if(this.state.score<10) alert("You can't afford that!");
    else {
      this.setState({
        score:this.state.score-10,
        increment:this.state.increment +1,
        
      })
    }
  }
  handleReset=()=>{
    this.setState({
      score:0,
      increment:1,
      acutalClass:"black"
    })
  }
  handleBack=()=>{
    this.setState({
      acutalClass:"black"
    })
  }
  
  render() {
    if(this.state.score<100) {
      return (
        <main>
          
            <h1>Current Score: {this.state.score}</h1>
            <button className={this.state.acutalClass} onMouseDown={this.handleIncrementScore} onMouseUp={this.handleBack} style={{width:"50px"}}>+{this.state.increment}</button>
            <button className={this.state.acutalClass} onMouseDown={this.handlePay10} onMouseUp={this.handleBack} style={{width:"250px"}}>Pay 10 points to change from +{this.state.increment} to +{this.state.increment+1}</button>
          
        </main>
      );

    } else {
      return(
        <main>
          
            {/* <h1>Current Score: {this.state.score}</h1> */}
            <h2>You Win!</h2>
            <button className={this.state.acutalClass} onMouseDown={this.handleReset} onMouseUp={this.handleBack} style={{width:"100px"}}>Play again?</button>
         
        </main>

      )
    }
    
  }
}

export default App;
