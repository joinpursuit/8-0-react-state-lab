import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      currentScore : 0,
      incrementer: 1,
    };
  }

  handleIncrement=()=>{
    this.setState({
      currentScore: this.state.currentScore + 1,
      
    });
  }
  handlePay10Points=()=>{
    if(this.state.currentScore < 10) {alert("You can't afford that!");

  }else {
      this.setState({
        currentScore: this.state.currentScore - 10,
        incrementer: this.state.incrementer + 1,

      })
    }
  }
  handleReset=()=>{
    this.setState({
      score:0,
      increment:1,
    })
  }
  


  render() {
    const {currentScore, incrementer} = this.state;
 if (currentScore < 100){
    return(
      <main>

          <h2>Current Score: {this.state.currentScore}</h2>
          <p>You Win!</p>
          <button onClick={this.handleIncrement} >+1</button>
          <button onClick={this.handlePay10Points}>Pay 10 points to change from +{this.state.incrementer} to +{this.state.incrementer + 1}</button>
         
          </main>
    );
  }else { 
    <div>
      <h2> Score: {currentScore} </h2>
      <h2>You Win!</h2>
      <button  onClick={this.handleReset}>Play Again?</button>
    </div>
    return
  
  }
}
}


export default App;
