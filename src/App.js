import React from "react";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      btn1Count: 1,
    };
  }

  handleClick = () => {
    this.setState({
      count: this.state.count + this.state.btn1Count,
    });
  };


  handleClick2 = () => {
    if (this.state.count >= 10) {
      this.setState({
        btn1Count: this.state.btn1Count + 1,
        count: this.state.count -10,
      });
    } else {
      alert("You can't afford that!");
    }

  };

  handleClick3 = () => {
    this.setState((prevState) => {
      window.location.reload(prevState);
    });
  };

  render() {
    const { count, btn1Count } = this.state;
   if (count >= 100) {
     return (
       <React.Fragment>
         <h1>Final Score: {count}</h1>
         <br />
         <br />
         <h2>You Win!</h2>
         <button onClick={this.handleClick3}>Play again</button>
       </React.Fragment>
     );
   } else {
    return (
      <main>
        <h1>Current Score: {count}</h1>
        <button onClick={this.handleClick}> +{btn1Count}</button>
        <br />
        <br />
        <button onClick={this.handleClick2}>Pay 10 points to change from +{btn1Count} to +{btn1Count + 1}</button>
      </main>
    );
  }
 }
}
export default App;
