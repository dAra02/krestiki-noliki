import { lines } from './calculateWinner';

export const checkWin = (fields, currentPlayer) => {
	return lines.some((winComb) => winComb.every((ind) => fields[ind] === currentPlayer));
};

export const checkDraw = (fields) => {
	return fields.every((field) => field);
};
