import React from "react";
import "./Score.css";

class Score extends React.Component{
    constructor(){
        super()
        this.state = {
            count: 0,
            addPoints: 1
        }
    }

addOne =() =>{
    this.setState({
        count: this.state.count + this.state.addPoints
    })
}
increaseAddPoints =()=>{
    if(this.state.count >= 10){
        this.setState({
            addPoints: this.state.addPoints + 1,
            count: this.state.count - 10
        })
    } else {
        alert("You can't afford that!")
    }
}
playAgain =()=>{
    this.setState({
        count: 0,
        addPoints: 1
    })
}


    render(){
        if (this.state.count < 100){
            return (
                <div id="score">
                    <h1 className = "current-score">Current Score: {this.state.count} </h1>
                    <button onClick={this.addOne}> + {this.state.addPoints} </button>
                    <button onClick={this.increaseAddPoints}>Pay 10 points to change from +{this.state.addPoints} to +{this.state.addPoints + 1}</button>
                </div>
            )
        } else if (this.state.count >= 100){
            return (
                <div>
                    <h2> You Win!</h2>
                    <button onClick={this.playAgain}>Play again?</button>
                </div>
                
            )     
        }
    }
}

export default Score