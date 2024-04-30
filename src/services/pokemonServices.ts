import { listPokemon } from "@models/listPokemon";
import { Pokemon } from "@models/pokemon";
import { pokeApiUrls } from "@src/environment/environment";
import { Species } from "@models/species";
import { EvolutionChain } from "@models/evolutionChain";

export class PokemonServices {
	constructor() {}

	async getListPokemon(
		offset: number,
		limit: number,
	): Promise<listPokemon | undefined> {
		try {
			const response = await fetch(pokeApiUrls.listPokemon(offset, limit));
			return response.json();
		} catch (error) {
			console.error("Error: ", error);
		}
	}

	async getPokemon(name: string | number): Promise<Pokemon | undefined> {
		try {
			const response = await fetch(pokeApiUrls.getPokemon(name));

			if (response.status === 404) return;

			return response.json();
		} catch (error) {
			console.error("Error: ", error);
		}
	}

	async getSpecies(url: string): Promise<Species | undefined> {
		try {
			const response = await fetch(url);

			if (response.status === 404) return;

			return response.json();
		} catch (error) {
			console.error("Error: ", error);
		}
	}

	async getEvolutionChain(url: string): Promise<EvolutionChain | undefined> {
		try {
			const response = await fetch(url);

			if (response.status === 404) return;

			return response.json();
		} catch (error) {
			console.error("Error: ", error);
		}
	}
}
