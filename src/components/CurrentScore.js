import React from "react";
import LevelUp from "./LevelUp";

export default class CurrentScore extends React.Component {
  constructor() {
    super();
    this.state = {
      currentScore: 0,
      clicks: 0,
    };
  }

  //event handler
  handleIncrement = () => {
    this.setState({
      currentScore: this.state.currentScore + 1});
  };

  //event handler
  handlePayment = () => {
    //minus 10 from currentScore and increment button by 1
    this.setState({ currentScore: this.state.currentScore - 10 });
    this.setState({ clicks: this.state.clicks + 1 });
  };

  render() {
    //destructuring state
    let { currentScore } = this.state;

    // created a variable to reassign the correct component that should render depending on our current balance
    //   let atmOrOverdraft = <ATM handleDeposit={this.handleDeposit} handleWithdrawal={this.handleWithdrawal} />

    //   if(currentBalance <0){
    //       atmOrOverdraft =  <Overdraft balance={currentBalance} handleDeposit={this.handleDeposit}/>
    //   }

    return (
      <>
        <h1>Current Score: {currentScore}</h1>
        {currentScore < 0 &&
        (<LevelUp score={currentScore} handleIncrement={this.handleIncrement} handlePayment={this.handlePayment}/>)}

        {/* ******************************************** */}
        {/* Uses the ternary conditional to decide which component to render */}
        {/* {currentBalance < 0
            ? <Overdraft balance={currentBalance} handleDeposit={this.handleDeposit}/>
            : <ATM handleDeposit={this.handleDeposit} handleWithdrawal={this.handleWithdrawal} />
        } */}

        {/* *********************************************** */}
        {/* Will render ATM or Overdraft depending on the conditional handled in our render function above   */}
        {/* {atmOrOverdraft} */}
      </>
    );
  }
}
