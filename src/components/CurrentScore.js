import React from "react";
import './CurrentScore.css'
import GameButtons from "./GameButtons";
import NewGame from "./NewGame"


class CurrentScore extends React.Component {

    constructor () {
        super()
        this.state = {
            score: 0,
            increment: 1,
        }
    }

    addScore = () => {
        this.setState ({
            score: this.state.score + this.state.increment
        });
    }

    incrementByOne = () => {
        this.setState ({
            score: this.state.score - 10,
            increment: this.state.increment + 1,
        });

        if (this.state.score < 10) {
            alert("You can't afford that!")
            this.setState ({
                score: this.state.score,
                increment: this.state.increment,
            });

        }
    }

    reset = () => {
        this.setState ({
            score: 0,
            increment: 1,
        });
    }

    render () {
    const {score, increment} = this.state

    return (
        <div>
        {score < 100 && <h1>Current Score: {score}</h1>}
        
           { score < 100 ? 
           <GameButtons 
            score = {score} addScore = {this.addScore} increment ={increment} incrementByOne = {this.incrementByOne}
            /> : <NewGame reset = {this.reset}/>
           }
        </div>  
    )
    }
}


export default CurrentScore;