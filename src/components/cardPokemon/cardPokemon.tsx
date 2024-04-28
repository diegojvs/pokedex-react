import { Pokemon } from "@src/models/pokemon";
import TypeLabel from "@src/components/typeLabel/typeLabel";
import { Link } from "react-router-dom";

interface CardPokemonProps {
	pokemon: Pokemon;
}

const CardPokemon: React.FC<CardPokemonProps> = ({ pokemon }) => {
	return (
		<Link to={`/${pokemon.name}`}>
			<div
				key={pokemon.id}
				className="hover:shadow-3 flex transform flex-col gap-4 rounded-2xl bg-[#f5f5f5] p-4 shadow-xl transition-transform duration-300 ease-in-out hover:scale-[102%] hover:cursor-pointer"
			>
				<span className="text-left text-base font-bold">{`${pokemon.id}`}</span>
				<img
					src={pokemon.sprites.other?.home["front_default"]}
					alt={pokemon.name}
					className="mx-auto aspect-square max-h-64 max-w-64 max-[420px]:max-h-40 max-[420px]:max-w-40 max-[300px]:max-h-20 max-[300px]:max-w-20"
					loading="lazy"
				/>
				<h2 className="text-center text-2xl font-bold">{pokemon.name}</h2>
				<div className="flex justify-center">
					{pokemon.types.map((type, index) => (
						<TypeLabel key={index} {...type} />
					))}
				</div>
			</div>
		</Link>
	);
};

export default CardPokemon;
