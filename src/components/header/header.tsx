import Filter from "../filter/filter";

const Header = () => {
	return (
		<header className="fixed z-10 flex h-24 w-full items-center justify-between bg-red-500 p-4 md:justify-center">
			<h1 className="text-center text-4xl font-black text-slate-50 md:grow">
				Pokédex
			</h1>
			<Filter />
		</header>
	);
};

export default Header;
