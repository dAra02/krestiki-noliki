import { useState } from 'react';
import style from './app.module.css';
import { Field, checkWin, checkDraw, Info } from './GameLayout';

export const App = () => {
	const field = ['', '', '', '', '', '', '', '', ''];

	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [fields, setFields] = useState(field);

	const resettingTheGame = () => {
		setFields(field);
		setIsGameEnded(false);
		setCurrentPlayer('X');
		setIsDraw(false);
	};

	const handleClick = (i) => {
		if (isGameEnded) {
			return;
		}

		if (fields[i]) {
			return;
		} else {
			let updatedFields = [...fields];
			updatedFields[i] = currentPlayer;
			setFields(updatedFields);

			if (checkWin(updatedFields, currentPlayer)) {
				setIsGameEnded(true);
				return;
			}

			if (checkDraw(updatedFields)) {
				setIsDraw(true);
				return;
			}

			let updatedCurrentPlayer = currentPlayer === 'X' ? 'O' : 'X';
			setCurrentPlayer(updatedCurrentPlayer);
		}
	};

	return (
		<>
			<Info isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer} />
			<div className={style.App}>
				<Field fields={fields} onSquareClick={handleClick} />
				<button className={style.button} onClick={resettingTheGame}>
					Начать заново
				</button>
			</div>
		</>
	);
};
