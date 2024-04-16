import { useSelector } from 'react-redux';
import { selectorField } from '../../selectors';
import style from './FieldLayout.module.css';

export const Field = ({ onSquareClick }) => {
	const field = useSelector(selectorField);
	return (
		<>
			{field.map((field, index) => {
				return (
					<button key={index} className={style.kletka} onClick={() => onSquareClick(index)}>
						{field}
					</button>
				);
			})}
		</>
	);
};
