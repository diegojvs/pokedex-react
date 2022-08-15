import colours from '../../utils/colors';
import { Link } from 'react-router-dom';
import './card.css';

const Card = ({ id, name, img, types }) => {
	return (
		<>
			<div className="Card">
				<Link to={name} className="Card-link">
					<p className="Card-number">{id}</p>
					<img src={img} alt={name} className="Card-img" />
					<p className="Card-name">{name}</p>
					<div className="Card-types-container">
						{types.map((type) => (
							<p
								className="Card-types"
								style={{ backgroundColor: colours[type.type.name] }}
							>
								{type.type.name}
							</p>
						))}
					</div>
				</Link>
			</div>
		</>
	);
};

export default Card;
