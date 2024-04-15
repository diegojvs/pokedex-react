import { useEffect } from "react";
import { PokemonServices } from "@src/services/pokemonServices";
import { genPokemon } from "@src/utils/const";
import { Pokemon } from "@src/models/pokemon";
import Loader from "../loader/loader";
import CardPokemon from "../cardPokemon/cardPokemon";
import useFilter from "@src/hooks/useFilter";
import usePokemon from "@src/hooks/usePokemon";

const ContainerCardsPokemon = () => {
	const pokemonServices = new PokemonServices();
	const startAndEndGeneration = genPokemon;
	const { filterPokemon } = useFilter();
	const { pokemon, setPokemon, loading, setLoading } = usePokemon();

	const getPokemon = async (name: string | number) => {
		const pokemon = await pokemonServices.getPokemon(name);

		return pokemon;
	};

	const getListPokemon = async () => {
		try {
			const pokemonList: Pokemon[] = [];

			// create array of n numbers from 0 to startAndEndGeneration[0].end

			const numbers = Array.from(
				{
					length:
						startAndEndGeneration[0].end - startAndEndGeneration[0].start + 1,
				},
				(_, index) => index + startAndEndGeneration[0].start,
			);

			const response = await Promise.all(
				numbers.map((number) => {
					return getPokemon(number);
				}),
			);

			if (!response) {
				return;
			}

			response.forEach((pokemon) => {
				if (!pokemon) {
					return;
				}
				pokemonList.push(pokemon);
			});

			setPokemon(pokemonList);
			setLoading(false);
		} catch (error) {
			console.error("Error: ", error);
		}
	};

	useEffect(() => {
		getListPokemon();
	}, []);

	return (
		<div className="mx-auto flex min-h-dvh w-[80%] items-center justify-center pt-24">
			{loading ? (
				<div className="flex h-full w-full items-center justify-center">
					<Loader />
				</div>
			) : (
				<div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
					{filterPokemon(pokemon).map((pokemon) => (
						<CardPokemon key={pokemon.id} {...pokemon} />
					))}
				</div>
			)}
		</div>
	);
};

export default ContainerCardsPokemon;
