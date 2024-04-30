import Header from "@components/header/header";
import PokemonDetails from "@components/pokemonDetails/pokemonDetails";
import { FilterProvider } from "@src/context/filters";
import { PokemonProvider } from "@src/context/pokemon";

const Pokemon = () => {
	return (
		<>
			<PokemonProvider>
				<FilterProvider>
					<Header />
					<PokemonDetails />
				</FilterProvider>
			</PokemonProvider>
		</>
	);
};

export default Pokemon;
