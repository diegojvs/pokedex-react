import { useContext } from "react";
import { PokemonContext, PokemonContextType } from "@src/context/pokemon";

const usePokemon = () => {
	const {
		pokemon,
		setPokemon,
		generationPokemonFetched,
		setGenerationPokemonFetched,
		loading,
		setLoading,
		error,
		setError,
	} = useContext(PokemonContext) as PokemonContextType;

	return {
		pokemon,
		setPokemon,
		generationPokemonFetched,
		setGenerationPokemonFetched,
		loading,
		setLoading,
		error,
		setError,
	};
};

export default usePokemon;
