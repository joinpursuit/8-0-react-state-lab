import React from "react";
import "./App.css";
class App extends React.Component {
constructor(){
  super()
  this.state = { 
    currentScore: 0,
    AddScore: 1,

  }
}

addNumber = () => {
  this.setState({
    currentScore: this.state.currentScore + this.state.AddScore
  })
}



payButton = ()=> {
  const {currentScore, AddScore}=this.state
  if (currentScore < 10){
    alert("You can't afford that!");
  } else {
    this.setState({
    currentScore: currentScore -10, 
    AddScore: AddScore +1
    })
  }
}

handlerReset = () => {
 this.setState({
   currentScore:0,
   AddScore:1,
 })
}


  render() {
   
    const{currentScore,AddScore} =this.state;
    if(currentScore>=100){
      return(
      <div>
      <h2>You Win!</h2>
      <button onClick={this.handlerReset}>Play again?</button>
      </div>
      )
    } else {
      
      return (
       
          <div>
          <h1>Current Score: {currentScore}</h1>
          <button onClick={this.addNumber}>+{AddScore}</button>
          <button onClick={this.payButton}> Pay 10 points to change from +{AddScore} to +{AddScore+1} </button>
          </div>
       
      );
      };
    
  }
}

export default App;
