import { listPokemon } from "@src/models/listPokemon";
import { pokeApiUrls } from "@src/environment/environment";

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
}
