import { Result } from "@src/models/result";

export interface listPokemon {
  count: number;
  next: string;
  previous: null;
  results: Result[];
}
