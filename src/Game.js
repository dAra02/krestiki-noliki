import { useState } from 'react';
import style from './app.module.css';
import { Field, Info } from './GameLayout';
import { store } from './store';

export const App = () => {
	const [storeState, setStoreState] = useState(store.getState());
	const { field, currentPlayer, isGameEnded, isDraw } = storeState;

	const resettingTheGame = () => {
		store.dispatch({ type: 'restartGame' });

		store.subscribe(() => setStoreState(() => store.getState()));
	};

	const handleClick = (i) => {
		store.dispatch({ type: 'setPlayer', payload: i });

		store.subscribe(() => setStoreState(() => store.getState()));
	};

	return (
		<>
			<Info isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer} />
			<div className={style.App}>
				<Field fields={field} onSquareClick={handleClick} />
				<button className={style.button} onClick={resettingTheGame}>
					Начать заново
				</button>
			</div>
		</>
	);
};
