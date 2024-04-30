import Header from "@components/header/header.tsx";
import ContainerCardsPokemon from "@src/components/containerCardsPokemon/containerCardsPokemon";
import { FilterProvider } from "@src/context/filters";
import { PokemonProvider } from "@src/context/pokemon";

const Home = () => {
	document.title = "Pokédex";
	return (
		<>
			<PokemonProvider>
				<FilterProvider>
					<Header />
					<ContainerCardsPokemon />
				</FilterProvider>
			</PokemonProvider>
		</>
	);
};

export default Home;
