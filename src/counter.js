import  { Component } from 'react'

export default class counter extends Component {

    constructor () {
        super();
        this.state = {
            count : 0
        }
    }
   increment = () => {
        count: this.state.count + 1
        
    }
   
    decrement = () => {
        count: this.state.count - 1
    }
  render() {
      const {count} = this.state;
    return (
        <div>
        <p><strong>Current Score : {count} </strong></p>
      <button onClick={this.increment}> +1</button>
      <button onClick = {this.decrement}>Pay 10 points to change from +1 to +2</button>
      </div>

    )
  }
  changeClick = () => {
    this.setState({
        count: this.state.count + 1
    })
}
}
