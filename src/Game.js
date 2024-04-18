import { useDispatch } from 'react-redux';
import { Field, Info } from './GameLayout';
import style from './app.module.css';

export const App = () => {
	const dispatch = useDispatch();

	const resettingTheGame = () => {
		dispatch({ type: 'restartGame' });
	};

	const handleClick = (i) => {
		dispatch({ type: 'setPlayer', payload: i });
	};

	return (
		<>
			<Info />
			<div className={style.App}>
				<Field onSquareClick={handleClick} />
				<button className={style.button} onClick={resettingTheGame}>
					Начать заново
				</button>
			</div>
		</>
	);
};
