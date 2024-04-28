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
	const { filter, setFilter, filterPokemon } = useFilter();
	const {
		pokemon,
		setPokemon,
		loading,
		setLoading,
		error,
		setError,
		generationPokemonFetched,
		setGenerationPokemonFetched,
	} = usePokemon();

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
				setLoading(false);
				setError(true);
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

	const loadMorePokemon = async () => {
		let maxGeneration = 0;
		filter.generations.forEach((gen) => {
			if (gen > maxGeneration) {
				maxGeneration = gen;
			}
		});

		if (!generationPokemonFetched.includes(maxGeneration + 1)) {
			const generation = startAndEndGeneration[maxGeneration + 1];
			const numbers = Array.from(
				{
					length: generation.end - generation.start + 1,
				},
				(_, index) => index + generation.start,
			);

			const response = await Promise.all(
				numbers.map(async (number) => {
					return getPokemon(number);
				}),
			);

			if (!response) {
				return;
			}

			const listPokemon: Pokemon[] = [];

			response.forEach((pokemon) => {
				if (!pokemon) {
					return;
				}

				listPokemon.push(pokemon);
			});

			const pokemonListSorted = [...pokemon, ...listPokemon];

			pokemonListSorted.sort((a, b) => a.id - b.id);

			setPokemon(pokemonListSorted);
			setGenerationPokemonFetched([
				...generationPokemonFetched,
				Number(generation.value),
			]);
			setFilter({
				...filter,
				generations: filter.generations.includes(Number(generation.value))
					? filter.generations.filter((gen) => gen !== Number(generation.value))
					: [...filter.generations, Number(generation.value)],
			});
		}
	};

	const tryAgain = () => {
		setError(false);
		setLoading(true);
		getListPokemon();
	};

	useEffect(() => {
		getListPokemon();
	}, []);

	return (
		<div className="mx-auto flex min-h-dvh w-4/5 flex-col items-center justify-center pt-24">
			{loading && !error ? (
				<div className="flex h-full w-full items-center justify-center">
					<Loader />
				</div>
			) : error ? (
				<div className="m-4 flex min-h-48 w-full flex-col items-center justify-center rounded-2xl bg-[#f5f5f5] p-4">
					<h2 className="lg:5xl text-pretty text-center text-4xl font-black">
						There was an error fetching the data
					</h2>
					<button
						className="my-8 rounded-lg border border-slate-50 bg-red-500 px-4 py-2 font-bold text-white hover:scale-[102%]"
						onClick={tryAgain}
					>
						Try again
					</button>
				</div>
			) : (
				<>
					<div className="grid grid-cols-1 gap-8 p-4 md:grid-cols-2 lg:grid-cols-3">
						{filterPokemon(pokemon).map((pokemon) => (
							<CardPokemon key={pokemon.id} pokemon={pokemon} />
						))}
					</div>
					{!generationPokemonFetched.some((gen) => gen === 8) ? (
						<button
							className="my-8 rounded-lg border border-slate-50 bg-red-500 px-4 py-2 font-bold text-white hover:scale-[102%]"
							onClick={loadMorePokemon}
						>
							Load more
						</button>
					) : null}
				</>
			)}
		</div>
	);
};

export default ContainerCardsPokemon;
