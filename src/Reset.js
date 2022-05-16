import React from "react";

class Reset extends React.Component {
  render() {
    return (
      <div>
        <h2>You Win!</h2>
        <button onClick={this.props.resetGame}>Play again?</button>
      </div>
    );
  }
}

export default Reset;
