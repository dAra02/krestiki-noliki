import { useSelector } from 'react-redux';
import { selectorCurrentPlayer, selectorIsGameEnded, selectorisDraw } from '../../../selectors';
import style from './info.module.css';

export const Info = () => {
	const isDraw = useSelector(selectorisDraw);
	const isGameEnded = useSelector(selectorIsGameEnded);
	const currentPlayer = useSelector(selectorCurrentPlayer);

	return <div className={style.winer}>{isDraw ? 'Ничья' : isGameEnded ? `Победа ${currentPlayer}` : `Ход ${currentPlayer}`}</div>;
};
