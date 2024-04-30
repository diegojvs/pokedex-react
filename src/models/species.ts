import { Result } from "./result";
import { Url } from "./url";
import { FlavorTextEntry } from "./flavorTextEntry";
import { Variety } from "./variety";

export interface Species {
	base_happiness: number;
	capture_rate: number;
	color: Result;
	egg_groups: Result[];
	evolution_chain: Url;
	evolves_from_species: Result;
	flavor_text_entries: FlavorTextEntry[];
	form_descriptions: any[];
	forms_switchable: boolean;
	gender_rate: number;
	generation: Result;
	growth_rate: Result;
	habitat: Result;
	has_gender_differences: boolean;
	hatch_counter: number;
	id: number;
	is_baby: boolean;
	is_legendary: boolean;
	is_mythical: boolean;
	name: string;
	order: number;
	shape: Result;
	varieties: Variety[];
}
