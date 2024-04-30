import { Chain } from "./chain";
import { Result } from "./result";

export interface EvolutionChain {
	baby_trigger_item: null | Result;
	chain: Chain;
	id: number;
}
