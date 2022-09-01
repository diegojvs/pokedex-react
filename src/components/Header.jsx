import './header.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="Header">
			<Link to="/" className="Header-link">
				<h1 className="Header-title">Pokédex</h1>
			</Link>
		</header>
	);
};

export default Header;
