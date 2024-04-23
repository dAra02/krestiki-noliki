import { Component } from 'react';
import { connect } from 'react-redux';

class FieldContainer extends Component {
	render() {
		return (
			<>
				{this.props.field.map((field, index) => {
					return (
						<button
							key={index}
							className="field-wh border border-gray-600 border-solid cursor-pointer text-6xl"
							onClick={() => this.props.onSquareClick(index)}
						>
							{field}
						</button>
					);
				})}
			</>
		);
	}
}

const mapStateToProps = (state) => ({
	field: state.field,
});

export const Field = connect(mapStateToProps)(FieldContainer);
