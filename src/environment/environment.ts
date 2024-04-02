export const pokeApiUrls = {
	listPokemon: (offset: number, limit: number) =>
		`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
	getPokemon: (name: string | number) =>
		`https://pokeapi.co/api/v2/pokemon/${name}`,
};
