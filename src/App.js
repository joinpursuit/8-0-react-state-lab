import React from "react";
import "./App.css";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			counter: 0,
			addScore: 1,
			firstCount: 10,
			firstAdd: 1,
			secondAdd: 2,
		};
	}

	increaseAmount = () => {
		this.setState({
			counter: this.state.counter + this.state.addScore,
		});
	};
	pointBoost = () => {
		const { counter, firstCount, addScore, firstAdd, secondAdd } = this.state;
		if (counter < firstCount) {
			alert("You can't afford that!");
		} else {
			this.setState({
				addScore: addScore + 1,
				counter: counter - firstCount,
				firstAdd: firstAdd + 1,
				secondAdd: secondAdd + 1,
			});
		}
	};
	refresh = () => {
		this.setState({
			counter: 0,
			addScore: 1,
			firstCount: 10,
			firstAdd: 1,
			secondAdd: 1,
		});
	};

	render() {
		const { counter, addScore, firstAdd, secondAdd } = this.state;

		if (counter >= 100) {
			return (
				<div>
					<div>
						<b>Current Score:{counter}</b>
					</div>
					<h2>You Win!</h2>
					<button onClick={this.refresh}>Play again?</button>
				</div>
			);
		} else {
			return (
				<main>
					<div>Current Score:{counter}</div>
					<button onClick={this.increaseAmount}>+{addScore} </button>
					<button onClick={this.pointBoost}>
						Pay 10 points to change from +{firstAdd} to +{secondAdd}
					</button>
				</main>
			);
		}
	}
}

export default App;
