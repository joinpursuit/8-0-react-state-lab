import React from 'react';

class CurrentScore extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { score } = this.props.state;
    return <h1>Current Score: {score}</h1>;
  }
}

export default CurrentScore;
