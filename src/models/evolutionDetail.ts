import { Result } from "./result";

export interface EvolutionDetail {
	gender: null | number;
	held_item: null | Result;
	item: null | Result;
	known_move: null | Result;
	known_move_type: null | Result;
	location: null | Result;
	min_affection: null | number;
	min_beauty: null | number;
	min_happiness: null | number;
	min_level: number | null;
	needs_overworld_rain: boolean;
	party_species: null | Result;
	party_type: null | Result;
	relative_physical_stats: null | number;
	time_of_day: string;
	trade_species: null | Result;
	trigger: Result;
	turn_upside_down: boolean;
}
