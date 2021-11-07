import React from "react";


function LevelUp(props) {
        // const { currentScore } = this.state;
        // const { clicks } = this.state;
        console.log(props);
        return (
            <>
              <button onClick={props.handleIncrement}>+{props.clicks}</button>
              <button onClick={props.handlePayment}>Pay 10 points to change from +{props.clicks} to +{props.clicks + 1}
              </button>
            </>
        )  
};

export default LevelUp;