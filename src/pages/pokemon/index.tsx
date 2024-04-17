import Header from "@src/components/header/header";
import { FilterProvider } from "@src/context/filters";
import { PokemonProvider } from "@src/context/pokemon";

const Pokemon = () => {
	return (
		<>
			<PokemonProvider>
				<FilterProvider>
					<Header />
				</FilterProvider>
			</PokemonProvider>
		</>
	);
};

export default Pokemon;
