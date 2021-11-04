import React from 'react';

class GameButtons extends React.Component {
  constructor(props) {
    super(props);
  }
  //   function addScore(s, i) {
  //     setState({
  //       score: s + i,
  //     });
  //   }

  //   function addIncrement(s, i) {
  //     setState({
  //       score: s - 10,
  //       increment: i + 1,
  //     });
  //   }
  render() {
    const { score, increment } = this.props.state;
    return (
      <>
        <button onClick={() => this.props.addScore(score, increment)}>
          +{increment}
        </button>
        <button
          onClick={() =>
            score >= 10
              ? this.props.addIncrement(score, increment)
              : alert(`You can't afford that!`)
          }
        >
          Pay 10 points to change from +{increment} to +{increment + 1}
        </button>
      </>
    );
  }
}
export default GameButtons;
