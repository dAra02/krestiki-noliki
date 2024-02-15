import style from './FieldLayout.module.css';

export const Field = ({ fields, onSquareClick }) => {
	return (
		<>
			{fields.map((field, index) => {
				return (
					<button key={index} className={style.kletka} onClick={() => onSquareClick(index)}>
						{field}
					</button>
				);
			})}
		</>
	);
};
