import { Ability } from "@src/models/ability";
import { Sprites } from "@src/models/sprites";
import { Stat } from "@src/models/stat";
import { Type } from "@src/models/type";

export interface Pokemon {
	abilities: Ability[];
	base_experience: number;
	height: number;
	id: number;
	name: string;
	sprites: Sprites;
	stats: Stat[];
	types: Type[];
	weight: number;
}
