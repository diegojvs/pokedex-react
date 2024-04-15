import React, { ReactNode, createContext, useState } from "react";
import { Pokemon } from "@src/models/pokemon";

export interface PokemonContextType {
	pokemon: Pokemon[];
	setPokemon: (pokemon: Pokemon[]) => void;
	generationPokemonFetched: number[];
	setGenerationPokemonFetched: (generationPokemonFetched: number[]) => void;
	loading: boolean;
	setLoading: (loading: boolean) => void;
	error: boolean;
	setError: (error: boolean) => void;
}

export const PokemonContext = createContext<PokemonContextType | null>(null);

export const PokemonProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [pokemon, setPokemon] = useState<Pokemon[]>([]);
	const [generationPokemonFetched, setGenerationPokemonFetched] = useState<
		number[]
	>([0]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	return (
		<PokemonContext.Provider
			value={{
				pokemon,
				setPokemon,
				generationPokemonFetched,
				setGenerationPokemonFetched,
				loading,
				setLoading,
				error,
				setError,
			}}
		>
			{children}
		</PokemonContext.Provider>
	);
};
