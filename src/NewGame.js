import React from 'react';

class NewGame extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <h2>You Win!</h2>
        <button onClick={() => this.props.resetGame()}>Play again?</button>
      </>
    );
  }
}

export default NewGame;
