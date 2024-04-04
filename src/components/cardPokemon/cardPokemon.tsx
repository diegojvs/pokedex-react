import { Pokemon } from "@src/models/pokemon";
import TypeLabel from "@src/components/typeLabel/typeLabel";

const CardPokemon = (pokemon: Pokemon) => {
	return (
		<div
			key={pokemon.id}
			className="hover:shadow-3 flex transform flex-col gap-4 rounded-2xl bg-[#f5f5f5] p-4 shadow-xl transition-transform duration-300 ease-in-out hover:scale-[102%] hover:cursor-pointer"
		>
			<span className="text-left text-base font-bold">{`${pokemon.id}`}</span>
			<img
				src={pokemon.sprites.other?.home["front_default"]}
				alt={pokemon.name}
				className="mx-auto"
			/>
			<h2 className="text-center text-2xl font-bold">{pokemon.name}</h2>
			<div className="flex justify-center">
				{pokemon.types.map((type, index) => (
					<TypeLabel key={index} {...type} />
				))}
			</div>
		</div>
	);
};

export default CardPokemon;
