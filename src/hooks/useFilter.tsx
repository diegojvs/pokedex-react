import { useContext } from "react";
import { FilterContext, FilterContextType } from "@src/context/filters";
import { Pokemon } from "@src/models/pokemon";
import { genPokemon } from "@src/utils/const";

const useFilter = () => {
	const { filter, setFilter } = useContext(FilterContext) as FilterContextType;

	const filterPokemon = (listPokemon: Pokemon[]) => {
		return listPokemon.filter((pokemon) => {
			return (
				filter.types.includes(
					pokemon.types[0].type.name || pokemon?.types[1].type.name,
				) &&
				genPokemon.some((gen, index) => {
					if (filter.generations.includes(index)) {
						return pokemon.id >= gen.start && pokemon.id <= gen.end;
					}
					return false;
				})
			);
		});
	};

	return { filter, setFilter, filterPokemon };
};

export default useFilter;
