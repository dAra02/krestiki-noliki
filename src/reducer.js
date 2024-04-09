import { checkWin, checkDraw } from './GameLayout';

export const initialState = {
	field: ['', '', '', '', '', '', '', '', ''],
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'restartGame':
			return initialState;
		case 'setPlayer':
			if (state.isGameEnded) {
				return state;
			}
			if (state.field[payload]) {
				return state;
			} else {
				let updateField = [...state.field];
				updateField[payload] = state.currentPlayer;
				let updatedCurrentPlayer = state.currentPlayer === 'X' ? 'O' : 'X';

				if (checkWin(updateField, state.currentPlayer)) {
					return { ...state, field: updateField, isGameEnded: true };
				}

				if (checkDraw(updateField)) {
					return { ...state, field: updateField, isDraw: true };
				}

				return { ...state, field: updateField, currentPlayer: updatedCurrentPlayer };
			}
		default:
			return state;
	}
};
