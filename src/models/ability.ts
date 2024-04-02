import { Result } from "@src/models/result";

export interface Ability {
	ability: Result;
	is_hidden: boolean;
	slot: number;
}
