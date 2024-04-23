import { Component } from 'react';
import { connect } from 'react-redux';

class InfoContainer extends Component {
	render() {
		return (
			<div className="text-center mb-5 text-xl/none underline decoration-gray-500 underline-offset-4">
				{this.props.isDraw ? 'Ничья' : this.props.isGameEnded ? `Победа ${this.props.currentPlayer}` : `Ход ${this.props.currentPlayer}`}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const Info = connect(mapStateToProps)(InfoContainer);
