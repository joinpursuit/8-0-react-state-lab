import React from 'react';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			score: 0,
			plusX: 1,
		};
	}

	addScore = () => {
		this.setState({
			score: this.state.score + this.state.plusX,
		});
	};

	payUpFoolButton = () => {
		if (this.state.score >= 10) {
			this.setState({
				score: this.state.score - 10,
				plusX: this.state.plusX + 1,
			});
		} else {
			alert("You can't afford that!");
		}
	};

	playAgain = () => {
		this.setState({
			score: 0,
			plusX: 1,
		});
	};
	render() {
		if (this.state.score < 100) {
			return (
				<>
					<div>
						<h1>
							<em>Current Score:</em> {this.state.score}
						</h1>
					</div>

					<div>
						<button className='addScore' onClick={this.addScore}>
							+{this.state.plusX}
						</button>
					</div>
					<br></br>
					<div>
						<button className='payUpFool' onClick={this.payUpFoolButton}>
							<em> Pay 10 points to change from </em>+{this.state.plusX}
							<em> to </em>+{this.state.plusX + 1}
						</button>
					</div>
				</>
			);
		} else {
			return (
				<div>
					<h1>{this.state.score}!</h1>
					<h2 className='youWin'>
						<em>You Win!</em>
					</h2>
					<button className='playAgain' onClick={this.playAgain}>
						<em>Play again?</em>
					</button>
				</div>
			);
		}
	}
}

export default App;
