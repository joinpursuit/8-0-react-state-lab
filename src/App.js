import React from "react";
import "./App.css";

class App extends React.Component {
  constructor(){
    super()

    this.state = {
      pointCount: 0,
      amount: 1
    }
  }


totalPoints = () => {
  const { pointCount, amount } = this.state
  this.setState({
    pointCount: pointCount + amount,

  });
};

increasePoints = () => {
  const{pointCount, amount} = this.state
  
  if (pointCount >= 10){
    
    this.setState({
      amount: (amount+1),
      pointCount: pointCount - 10,
    })
  }else{
   alert("You can't afford that!")
  }
}

reset = () =>{
  this.setState({
    pointCount: 0,
    amount: 1
  })
}

  render() {

  const { pointCount, amount } = this.state;

    if (pointCount < 100){
      return (
          <main>
            <h1>Current Score: {pointCount}</h1>
            <div className="addButton">
              <button onClick={this.totalPoints}>+{amount}</button>
            </div>
            <div className="payButton">
              <button onClick={this.increasePoints}>Pay 10 points to change from +{amount} to +{amount + 1}</button>
            </div>
          </main>
        )
      } else {
      return(
        <main>
          <h2>You Win!</h2>
          <button onClick={this.reset}>Play again?</button>
        </main>
      )

    }
  }
}

export default App;
