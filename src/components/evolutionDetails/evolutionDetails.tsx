import { EvolutionDetail } from "@models/evolutionDetail";

interface EvolutionDetailsProps {
	evolutionDetails: EvolutionDetail[];
}

const EvolutionDetails: React.FC<EvolutionDetailsProps> = ({
	evolutionDetails,
}) => {
	return (
		<div className="flex w-32 flex-col flex-wrap items-center gap-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1.5}
				stroke="currentColor"
				className="h-6 w-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
				/>
			</svg>
			{evolutionDetails.map((evolutionDetail, index) => (
				<section key={index} className="flex justify-center">
					{evolutionDetail.gender === 1 ? (
						<svg
							width="800px"
							height="800px"
							viewBox="0 0 64 64"
							xmlns="http://www.w3.org/2000/svg"
							strokeWidth="3"
							stroke="#000000"
							fill="none"
							className="h-6 w-6 text-black"
						>
							<circle cx="31.89" cy="20.3" r="13.42" />
							<line x1="32.51" y1="54.27" x2="32.51" y2="34.32" />
							<line x1="20.98" y1="43.18" x2="44.05" y2="43.18" />
						</svg>
					) : evolutionDetail.gender === 2 ? (
						<svg
							width="800px"
							height="800px"
							viewBox="0 0 1024 1024"
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-black"
						>
							<path
								fill="#000000"
								d="M399.5 849.5a225 225 0 1 0 0-450 225 225 0 0 0 0 450zm0 56.25a281.25 281.25 0 1 1 0-562.5 281.25 281.25 0 0 1 0 562.5zm253.125-787.5h225q28.125 0 28.125 28.125T877.625 174.5h-225q-28.125 0-28.125-28.125t28.125-28.125z"
							/>
							<path
								fill="#000000"
								d="M877.625 118.25q28.125 0 28.125 28.125v225q0 28.125-28.125 28.125T849.5 371.375v-225q0-28.125 28.125-28.125z"
							/>
							<path
								fill="#000000"
								d="M604.813 458.9 565.1 419.131l292.613-292.668 39.825 39.824z"
							/>
						</svg>
					) : null}

					<p className="text-pretty">
						{evolutionDetail.item != null
							? `Use ${evolutionDetail.item.name.replace(/-/g, " ")}`
							: evolutionDetail.min_level != null
								? `Level ${evolutionDetail.min_level}`
								: evolutionDetail.min_happiness != null
									? `Min happiness ${evolutionDetail.min_happiness}`
									: evolutionDetail.min_beauty != null
										? `Min beauty ${evolutionDetail.min_beauty}`
										: evolutionDetail.min_affection != null
											? `Min affection ${evolutionDetail.min_affection}`
											: evolutionDetail.known_move != null
												? `Known move: ${evolutionDetail.known_move.name.replace(/-/g, " ")}`
												: evolutionDetail.location != null
													? `Location: ${evolutionDetail.location.name.replace(/-/g, " ")}`
													: evolutionDetail.held_item != null
														? `Held item: ${evolutionDetail.held_item.name.replace(/-/g, " ")}`
														: evolutionDetail.party_species != null
															? `Party species: ${evolutionDetail.party_species.name}`
															: evolutionDetail.party_type != null
																? `Party type: ${evolutionDetail.party_type.name}`
																: evolutionDetail.trade_species != null
																	? `Trade species: ${evolutionDetail.trade_species.name}`
																	: evolutionDetail.trigger.name == "trade"
																		? `Trade`
																		: null}
						{evolutionDetail.relative_physical_stats != null
							? evolutionDetail.relative_physical_stats === -1
								? " with higher attack than defense"
								: evolutionDetail.relative_physical_stats === 1
									? " with higher defense than attack"
									: " with equal attack and defense"
							: null}
						{evolutionDetail.needs_overworld_rain ? " while raining" : null}
						{evolutionDetail.known_move_type != null
							? ` with a ${evolutionDetail.known_move_type.name} move`
							: null}
						{evolutionDetail.time_of_day != ""
							? ` during ${evolutionDetail.time_of_day}`
							: null}
						{evolutionDetail.turn_upside_down ? " while upside down" : null}{" "}
					</p>
				</section>
			))}
		</div>
	);
};

export default EvolutionDetails;
