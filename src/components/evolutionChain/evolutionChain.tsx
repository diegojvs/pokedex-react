import { EvolutionChainPokemon } from "@src/models/evolutionChainPokemon";
import CardPokemon from "@src/components/cardPokemon/cardPokemon";
import EvolutionDetails from "../evolutionDetails/evolutionDetails";

interface EvolutionChainProps {
	evolutionChainPokemon: EvolutionChainPokemon;
}

const EvolutionChain: React.FC<EvolutionChainProps> = ({
	evolutionChainPokemon,
}) => {
	return (
		<>
			<h3 className="text-xl font-extrabold">Evolution Chain</h3>
			<div
				className={`flex w-full items-start gap-4 overflow-x-auto p-4 2xl:justify-center 2xl:px-0 ${evolutionChainPokemon.evolves_to.length == 0 ? "justify-center" : "justify-start"}`}
			>
				<div className="flex items-center gap-4">
					{evolutionChainPokemon.pokemon != undefined ? (
						<CardPokemon pokemon={evolutionChainPokemon.pokemon} />
					) : (
						<h4 className="text-lg font-bold">
							{evolutionChainPokemon.species.name}
						</h4>
					)}
					<div className="flex flex-col gap-4">
						{evolutionChainPokemon.evolves_to?.map((evolution, index) => (
							<div key={index} className="flex items-center gap-4">
								<EvolutionDetails
									evolutionDetails={evolution.evolution_details || []}
								/>
								{evolution.pokemon != undefined ? (
									<CardPokemon pokemon={evolution.pokemon} />
								) : (
									<h4 className="text-lg font-bold">
										{evolution.species.name}
									</h4>
								)}
								<div className="flex flex-col gap-4">
									{evolution?.evolves_to?.map((evolution, index) => (
										<div key={index} className="flex items-center gap-4">
											<EvolutionDetails
												evolutionDetails={evolution.evolution_details || []}
											/>
											{evolution.pokemon != undefined ? (
												<CardPokemon pokemon={evolution.pokemon} />
											) : (
												<h4 className="text-lg font-bold">
													{evolution.species.name}
												</h4>
											)}
										</div>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default EvolutionChain;
