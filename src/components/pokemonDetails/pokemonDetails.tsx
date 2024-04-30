import { PokemonServices } from "@services/pokemonServices";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Pokemon } from "@models/pokemon";
import { Species } from "@models/species";
import Loader from "@components/loader/loader";
import { EvolutionChainPokemon } from "@models/evolutionChainPokemon";
import BaseStats from "@components/baseStats/baseStats";
import EvolutionChain from "@components/evolutionChain/evolutionChain";
import InformationPokemon from "@components/informationPokemon/informationPokemon";

const PokemonDetails = () => {
	const { pokemonName } = useParams<{ pokemonName: string }>();
	const [pokemon, setPokemon] = useState<Pokemon>();
	const [species, setSpecies] = useState<Species>();
	const [evolutionChainPokemon, setEvolutionChainPokemon] =
		useState<EvolutionChainPokemon>();
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<Boolean>(false);
	const pokemonServices = new PokemonServices();

	const getPokemon = async (name: string | number) => {
		const pokemonResponse = await pokemonServices.getPokemon(name);
		if (!pokemonResponse) {
			setLoading(false);
			setError(true);
			return;
		}
		setPokemon(pokemonResponse);
		document.title = `${pokemonResponse.name} - Pokédex`;
		const speciesResponse = await pokemonServices.getSpecies(
			pokemonResponse.species.url,
		);
		if (!speciesResponse) {
			setLoading(false);
			setError(true);
			return;
		}
		setSpecies(speciesResponse);
		const evolutionChainResponse = await pokemonServices.getEvolutionChain(
			speciesResponse.evolution_chain.url,
		);
		if (!evolutionChainResponse) {
			setLoading(false);
			setError(true);
			return;
		}
		const evolutionChainPokemonObject: EvolutionChainPokemon = {
			species: evolutionChainResponse.chain.species,
			evolves_to: evolutionChainResponse.chain.evolves_to.map((evolution) => ({
				species: evolution.species,
				evolves_to: evolution.evolves_to.map((evolution) => ({
					species: evolution.species,
					evolves_to: evolution.evolves_to.map((evolution) => ({
						species: evolution.species,
						evolves_to: [],
						evolution_details: evolution.evolution_details,
						pokemon: undefined,
					})),
					evolution_details: evolution.evolution_details,
					pokemon: undefined,
				})),
				evolution_details: evolution.evolution_details,
				pokemon: undefined,
			})),
			evolution_details: evolutionChainResponse.chain.evolution_details,
			pokemon: undefined,
		};

		if (evolutionChainPokemonObject.evolves_to.length === 0) {
			evolutionChainPokemonObject.pokemon = pokemonResponse;
			setEvolutionChainPokemon(evolutionChainPokemonObject);
		} else {
			const firstPokemon = await pokemonServices.getPokemon(
				evolutionChainPokemonObject.species.name,
			);

			if (!firstPokemon) {
				setLoading(false);
				setError(true);
				return;
			}
			evolutionChainPokemonObject.pokemon = firstPokemon;

			for (let i = 0; i < evolutionChainPokemonObject.evolves_to.length; i++) {
				const evolution = evolutionChainPokemonObject.evolves_to[i];
				const response = await pokemonServices.getPokemon(
					evolution.species.name,
				);
				if (!response) return;
				evolution.pokemon = response;
				for (let j = 0; j < evolution.evolves_to.length; j++) {
					const evolution =
						evolutionChainPokemonObject.evolves_to[i].evolves_to[j];
					const response = await pokemonServices.getPokemon(
						evolution.species.name,
					);
					if (!response) return;
					evolution.pokemon = response;
					for (let k = 0; k < evolution.evolves_to.length; k++) {
						const evolution =
							evolutionChainPokemonObject.evolves_to[i].evolves_to[j]
								.evolves_to[k];
						const response = await pokemonServices.getPokemon(
							evolution.species.name,
						);
						if (!response) return;
						evolution.pokemon = response;
					}
				}
			}
		}
		setEvolutionChainPokemon(evolutionChainPokemonObject);
		setLoading(false);
		window.scrollTo(0, 0);
	};

	useEffect(() => {
		if (!pokemonName) return;
		getPokemon(pokemonName.toLowerCase());
	}, []);

	useEffect(() => {
		if (!pokemonName) return;
		getPokemon(pokemonName.toLowerCase());
	}, [pokemonName]);

	return (
		<div className="mx-auto flex min-h-dvh w-4/5 flex-col items-center justify-center pt-24">
			{loading && !error ? (
				<Loader />
			) : error ? (
				<div className="m-4 flex min-h-48 w-full items-center justify-center rounded-2xl bg-[#f5f5f5] p-4">
					<h2 className="lg:5xl text-pretty text-center text-4xl font-black">
						Pokemon not found
					</h2>
				</div>
			) : (
				<div className="m-4 w-full rounded-2xl bg-[#f5f5f5] p-4">
					<h2 className="lg:5xl text-center text-4xl font-black">
						N°{pokemon?.id} {pokemon?.name}
					</h2>
					<div className="flex flex-col justify-center gap-4 md:mt-4 md:flex-row">
						<div className="flex w-full justify-center md:w-1/2">
							<img
								src={pokemon?.sprites.other?.home.front_default}
								alt={`imgage of ${pokemon?.name}`}
								className="inline-block aspect-square h-fit w-full md:max-w-[512px]"
							/>
						</div>
						<section className="flex flex-col justify-start gap-4 p-4 md:w-1/2">
							{pokemon && species && (
								<InformationPokemon pokemon={pokemon} species={species} />
							)}
						</section>
					</div>
					<section className="flex w-full flex-col items-start gap-4 p-4 sm:items-center">
						<BaseStats stats={pokemon?.stats || []} />
					</section>
					{evolutionChainPokemon ? (
						<section className="flex flex-col items-start gap-4 overflow-auto p-4 sm:items-center">
							<EvolutionChain evolutionChainPokemon={evolutionChainPokemon} />
						</section>
					) : null}
				</div>
			)}
		</div>
	);
};

export default PokemonDetails;
