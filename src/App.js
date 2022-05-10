// import React from react
import React from "react";
import "./App.css";

// CLASS COMPONENT - constructor() and super()
class App extends React.Component {
  constructor() {
    super();

    // create a current state - OBJECT
    this.state = {
      // current score starts at 0
      totalNum: 0,
      // increment plus 1
      increment: 1,
    };
  }

  // EVENT HANDLER - WHEN YOU CLICK THE BUTTON 
  handleClick = () => {

    // the current state - OBJECT key values will change
    this.setState({
      // current score: key value will be - current score plus 1 - CONCAT VALUES W/ THIS.
      totalNum: this.state.totalNum + this.state.increment,
    });
  };

  // EVET HANDLER - WHEN YOU CLICK THE BUTTON 
  alert = () => {

    // display alert with the words You cant afford that! if the current score is less than 10 - README 
    if (this.state.totalNum < 10) {
      alert("You can't afford that!");
    } else {
      // the current state - OBJECR key values  will change
      this.setState({
        // current score: key value will be minus 10
        totalNum: this.state.totalNum - 10,
        // increment : key value will add 1
        increment: this.state.increment + 1,
      });
    }
  };

// EVENT HANDLER - WHEN YOU CLICK THE BUTTON - starts the game over - README
  newGame = () => {

    // the curret state - OBJECT key values will change
    this.setState({

      // current score: value will be 0
      totalNum: 0,
      // incremet : value will be 1
      increment: 1,
    })
  }
  // RETURN UPDATED STATE AFTER SETSTATE EVENT HANDLERS
  render() {

    // create variables for the updated state
    const { totalNum, increment } = this.state;
    // if the updated score is less than 100 display the followning - RETURN 
    if (totalNum < 100) {
      return (
        <div>
          {/* - display current score starting at 0 - README -  */}
          <h2>Current Score: {totalNum}</h2>

          {/* - clicking the button increments the the score by 1 w/ this.handleClick - EVENT HANDLER - README */}
          {/* - button text should be plus 1 - CONCAT VALUE - README */}
          <button onClick={this.handleClick}>+{increment}</button>

          {/* - a button where the user can spend 10 and increment by 1 with this.alert - EVENT HANDLER _ README */}
          {/* - button should have the text Pay 10 points to change from +1 to +1 +1 CONCAT VALUE INTO TEXT - README */}
          <button onClick={this.alert}>
            Pay 10 points to change from +{increment} to +{increment + 1}
          </button>
        </div>
      );
      // - when the user has 100 points of more display victory screen - RETURN - README
    } else {
      return(
      <div>
        {/* - keeps the user score on the screen  - README*/}
        <h2>{totalNum}</h2>
        {/* - h2 element with the words You Win! - README */}
        <h2>You Win!</h2>
        {/* - there should be a button with the words Play again? - README */}
        <button onClick={this.newGame}>Play again?</button>
        </div>
      )
    }
  }
}
export default App;













