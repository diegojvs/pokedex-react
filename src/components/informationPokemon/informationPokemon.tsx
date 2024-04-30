import { Pokemon } from "@models/pokemon";
import { Species } from "@models/species";
import TypeLabel from "@components/typeLabel/typeLabel";

interface InformationPokemonProps {
	pokemon: Pokemon;
	species: Species;
}

const InformationPokemon: React.FC<InformationPokemonProps> = ({
	pokemon,
	species,
}) => {
	return (
		<>
			<h3 className="text-xl font-extrabold">Description</h3>
			<p className="text-lg">
				{species?.flavor_text_entries
					.find((entry) => entry.language.name === "en")
					?.flavor_text.replace("\f", " ")}
			</p>
			<h3 className="text-xl font-extrabold">
				{(pokemon?.types?.length || 0) > 1 ? "Types" : "Type"}
			</h3>
			<div className="flex justify-start">
				{pokemon?.types?.map((type, index) => (
					<TypeLabel key={index} {...type} />
				))}
			</div>
			<div className="flex flex-wrap gap-4">
				<div className="flex flex-col gap-4">
					<h3 className="text-xl font-extrabold">Height</h3>
					<p className="text-lg">{(pokemon?.height || 0) / 10}m</p>
				</div>
				<div className="flex flex-col gap-4">
					<h3 className="text-xl font-extrabold">Weight</h3>
					<p className="text-lg">{(pokemon?.weight || 0) / 10} kg</p>
				</div>
			</div>
			<section className="flex flex-col">
				<h3 className="text-xl font-extrabold">Abilities</h3>
				<div className="flex flex-col gap-4">
					{pokemon?.abilities?.map((ability, index) => (
						<div key={index}>
							{ability.is_hidden && (
								<p className="text-lg font-bold">Hidden Ability</p>
							)}
							<p className="text-lg">{ability.ability.name}</p>
						</div>
					))}
				</div>
			</section>
		</>
	);
};

export default InformationPokemon;
