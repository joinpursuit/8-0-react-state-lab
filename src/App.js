import React from "react";
import "./App.css";

class App extends React.Component {
  constructor () {
    super() 
    this.state = {
      currentScore: 0,
      incrementor: 1,
    }
    }
butButton = () => {
  const {currentScore, incrementor} = this.state;
    this.setState({
      currentScore: currentScore + incrementor
    })
}
    
payMe = () => {
  const {incrementor, currentScore} = this.state;
  if(currentScore < 10){
  alert("You can't afford that!")
  }else{
    this.setState({
    incrementor: incrementor + 1,
    currentScore: currentScore - 10
  })
}
}


handleReset = () => {
  this.setState({
    currentScore: 0,
    incrementor: 1,
  });
};






render() {
      const {currentScore,incrementor} = this.state;

      if (currentScore < 100) {
        return (
          <main>
            <h1 className="title"> Current Score: {currentScore} </h1> 
            <button onClick={this.butButton}>+{incrementor}</button>
            <br/>
            <button onClick={this.payMe}>Pay 10 points to change from +{incrementor} to +{incrementor+1}</button>
          </main>
          )
        } else{
          return (
            <main >
              <h2>You Win!</h2>
              <button onClick={this.handleReset}>Play again?</button>
           </main>
         )
       }
      
      }
    }



export default App;
