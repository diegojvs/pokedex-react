import Header from "@components/header/header.tsx";
import ContainerCardsPokemon from "@src/components/containerCardsPokemon/containerCardsPokemon";
import { FilterProvider } from "@src/context/filters";

const Home = () => {
	return (
		<>
			<FilterProvider>
				<Header />
				<ContainerCardsPokemon />
			</FilterProvider>
		</>
	);
};

export default Home;
