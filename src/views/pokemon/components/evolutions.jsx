import { useEffect, useState } from 'react';

const Evolutions = ({ evolution }) => {
	const [img, setImg] = useState([]);

	const getName = async (list) => {
		let newList = [];
		let p = list.map((pokemon) => {
			if (typeof pokemon === 'string') {
				newList.push(pokemon);
				return pokemon;
			} else {
				return pokemon.map((evo) => {
					newList.push(evo);
					return evo;
				});
			}
		});
		// console.log('p', p);
		console.log(p);
		try {
			let imgList = await Promise.all(
				p.map(async (pokemon) => {
					if (typeof pokemon === 'string') {
						// console.log(`if 1: ${pokemon}`);
						const res = await fetch(
							`https://pokeapi.co/api/v2/pokemon/${pokemon}`
						);
						const data = await res.json();
						return {
							name: pokemon,
							urlImg: data.sprites.other.home.front_default
						};
					} else {
						return pokemon.map(async (evo) => {
							// console.log('if 3:', evo);
							if (typeof evo === 'string') {
								const res = await fetch(
									`https://pokeapi.co/api/v2/pokemon/${evo}`
								);
								const data = await res.json();
								return {
									name: evo,
									urlImg: data.sprites.other.home.front_default
								};
							} else {
								console.log('if 2:', typeof evo);
								return evo.map(async (evo1) => {
									// console.log('if 4:', evo1);
									const res = await fetch(
										`https://pokeapi.co/api/v2/pokemon/${evo1}`
									);
									const data = await res.json();
									return {
										name: evo1,
										urlImg: data.sprites.other.home.front_default
									};
								});
							}
						});
					}
				})
			);
			console.log('imgList', imgList);
			setImg(imgList);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		let fase1 = evolution.chain.species.name;
		let chainevo = [];
		if (evolution.chain.evolves_to.length > 0) {
			chainevo = evolution.chain.evolves_to.map((evo) => {
				let name2 = evo.species.name;
				if (evo.evolves_to.length > 0) {
					let name3 = evo.evolves_to.map((evo1) => {
						return evo1.species.name;
					});
					// console.log(name2, name3[0]);
					return [name2, name3[0]];
				}
				return [name2];
			});
			getName([fase1, chainevo]);
		} else {
			getName([fase1]);
		}
		// console.log(fase1, chainevo);
	}, []);

	return (
		<div className="container-evolution">
			<h3 className="evolution-title">Evolutions</h3>
			<div className="evolutions">
				{img.length > 0 &&
					img.map(() => {
						if (typeof img === 'string') {
							<div className="evolution">
								<img src={img.urlImg} alt={img.name} />
								<p>{img.name}</p>
							</div>;
						} else {
							<div>
								{img &&
									img.map((evo) => {
										if (typeof evo === 'string') {
											<div className="evolution">
												<img src={evo.urlImg} alt={evo.name} />
												<p>{evo.name}</p>
											</div>;
										} else {
											<div>
												{evo.map((evo2) => {
													<div className="evolution">
														<img src={evo2.urlImg} alt={evo2.name} />
														<p>{evo2.name}</p>
													</div>;
												})}
											</div>;
										}
									})}
							</div>;
						}
					})}
			</div>
			{img.length > 0 && console.log(img)}
		</div>
	);
};

export default Evolutions;
