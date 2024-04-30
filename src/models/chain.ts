import { Result } from "./result";
import { EvolutionDetail } from "./evolutionDetail";

export interface Chain {
	evolution_details: EvolutionDetail[];
	evolves_to: Chain[];
	is_baby: boolean;
	species: Result;
}
