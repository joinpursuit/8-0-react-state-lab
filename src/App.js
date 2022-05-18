import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    //When an instance of a class is instanciated the constructor is the first thing to run.
    super()

    this.state = {
      //this.state is a special property that allows us to create a state on our react component
      //State is Reacts way of allowing us to store and handle data in a way that when we update our data it triggers a re-render
      count: 0,
      increment: 1
    };

  }
  handleClick = () => {
    if(this.state.count <= 100){
      this.setState({
        //functions that allows us to interact with state (update our state)
        count: (this.state.count + this.state.increment)
      });
    }else{
      window.alert('You Win!')
    }
  }
  
incrementor = () =>{
      if(this.state.count >= 10){
        this.setState({
          count: (this.state.count - 10),
          increment: (this.state.increment + 1)
        })
      }else{
        window.alert("You can't afford that!")
      }
}
playAgain = () => {
  this.setState({
    count:0,
    increment:1
  })
}




  render() {
    if(this.state.count < 100){
          return (
      <main>
        <h1>Current Score: {this.state.count}</h1>
        <button onClick = {this.handleClick}> +{this.state.increment}</button>
        <br/>
        <button onClick ={this.incrementor}>Pay 10 points to change from +{this.state.increment} to +{(this.state.increment + 1)}</button>
      </main>
    );
  }else{
    return (
      <main>
        <h1>Score: {this.state.count}</h1>
        <h1>You Win!</h1>
        <button onClick = {this.playAgain}>Play again? </button>

      </main>
    );
  }
 }
}

export default App;
