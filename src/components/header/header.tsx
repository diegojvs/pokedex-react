import Filter from "../filter/filter";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
	return (
		<header className="fixed z-10 flex min-h-24 w-full flex-wrap items-center justify-between bg-red-500 p-4 md:justify-center">
			<Link
				to={"/"}
				className="text-center text-4xl font-black text-slate-50 md:grow"
			>
				<h1>Pokédex</h1>
			</Link>
			{useLocation().pathname === "/" ? <Filter /> : null}
		</header>
	);
};

export default Header;
