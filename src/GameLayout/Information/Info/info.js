import style from './info.module.css';

export const Info = ({ isDraw, isGameEnded, currentPlayer }) => {
	return <div className={style.winer}>{isDraw ? 'Ничья' : isGameEnded ? `Победа ${currentPlayer}` : `Ход ${currentPlayer}`}</div>;
};
