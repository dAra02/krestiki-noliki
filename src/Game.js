import { Component } from 'react';
import { connect } from 'react-redux';
import { Field, Info } from './GameLayout';

class OldAppContainer extends Component {
	render() {
		return (
			<>
				<Info />
				<div className="flex flex-wrap text-center width-margin">
					<Field onSquareClick={this.props.handleClick} />
					<button
						className="text-center p-6 bg-black text-white rounded-3xl cursor-pointer button-mf"
						onClick={this.props.resettingTheGame}
					>
						Начать заново
					</button>
				</div>
			</>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	resettingTheGame: () => {
		dispatch({ type: 'restartGame' });
	},
	handleClick: (i) => {
		dispatch({ type: 'setPlayer', payload: i });
	},
});

export const App = connect(null, mapDispatchToProps)(OldAppContainer);
