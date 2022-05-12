import { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    console.log('incrementing...');
    this.setState({ count: this.state.count + 1 });
  };

  plusincrement = () => {
    console.log('investing points...');
  };
  render() {
    return (
      <div>
        <h3> Current Score</h3>
        <div>
          <button onClick={this.increment}>+1</button>
        </div>
        <div>
          <button onClick={this.increment + 1}>
            Pay 10 points to change from +1 to +2
          </button>
        </div>
      </div>
    );
  }
}
export default Counter;
