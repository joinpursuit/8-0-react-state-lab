import React from "react";

class Game extends React.Component {
  constructor() {
		super();
		this.state = {
			score: 0,
			credit: 1,
		};
  }
    
	increment = () => {
		this.setState({
			score: this.state.score + this.state.credit,
		})
	};

	addCredit = () => {
		if(this.state.score < 10){
			alert('You can\'t afford that!');
		}else{
			this.setState({
				score: this.state.score - 10,
				credit: this.state.credit + 1,
			})
		}
	}

	resetGame = () => {
		this.setState({
			score: 0,
			credit: 1,
			hasWin: false,      
		})
	}

	render() {
		const hasWin = this.state.score < 100;
		// >> Validating if the winning score was reached out
		if(hasWin) {
			return (
				<>
					<h1 className="score" >Current Score: <b>{this.state.score}</b></h1>
					<section className="game-controls" >
						<span className="btn-wrap"><button onClick={this.increment} >+{this.state.credit}</button></span>
						<button onClick={this.addCredit}>Pay 10 points to change from +{this.state.credit} to +{this.state.credit + 1}</button>    
					</section>
				</>
			);
		}else{
			return (
				<>
					<h1 className="score" ><b>{this.state.score}</b></h1>
					<section className="game-result" >
						<h2>You Win!</h2>
						<button onClick={this.resetGame}>Play again?</button>    
					</section>
				</>
			);	
		}
	}
}

export default Game;