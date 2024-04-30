import { EvolutionDetail } from "./evolutionDetail";
import { Pokemon } from "./pokemon";
import { Result } from "./result";

export interface EvolutionChainPokemon {
	species: Result;
	evolves_to: EvolutionChainPokemon[];
	evolution_details: EvolutionDetail[];
	pokemon: Pokemon | undefined;
}
