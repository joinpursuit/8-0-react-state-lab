import React from "react";
import CurrentScore from "./CurrentScore";
// import {handleIncrement} from "./CurrentScore"
// import {handlePayment} from "./CurrentScore"


class LevelUp extends React.Component {
    render() {
        // const { currentScore } = this.state;
        // const { clicks } = this.state;

        return (
            <>
              <button onClick={this.CurrentScore.handleIncrement}> +{this.clicks} </button>
              <button onClick={this.CurrentScore.handlePayment}>Pay 10 points to change from + {this.clicks} to + {this.clicks + 1}
              </button>
            </>
          );
    }
    
  
};

export default LevelUp;
