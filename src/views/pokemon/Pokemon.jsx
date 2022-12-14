import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import colours from './../../utils/colors';
import './pokemon.css';
import Spinner from '../../components/Spinner';

const Pokemon = () => {
	const [poke, setPoke] = useState([]);
	const [description, setDescription] = useState([]);
	const [loading, setLoading] = useState(true);
	const [notFound, setNotFound] = useState(false);
	const { pokemon } = useParams();

	const getPokemon = async () => {
		try {
			let http = new XMLHttpRequest();
			http.open('HEAD', `https://pokeapi.co/api/v2/pokemon/${pokemon}`, false);
			http.send();
			if (http.status === 404) {
				setNotFound(true);
				setLoading(false);
			} else {
				const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
				const data = await res.json();
				setPoke(data);
				const res2 = await fetch(
					`https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
				);
				const data2 = await res2.json();
				data2.flavor_text_entries = await data2.flavor_text_entries[0]
					.flavor_text;
				setDescription(data2);
				setLoading(false);
			}
			// const res3 = await fetch(data2.evolution_chain.url);
			// const data3 = await res3.json();
			// setEvolution(data3);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getPokemon();
	}, []);

	return (
		<>
			{notFound ? (
				<div className="Container-notFound">
					<h1 className="Title-notFound">Pokemon not found</h1>
				</div>
			) : loading ? (
				<Spinner />
			) : (
				<div className="Container-pokemon">
					<div className="Container-pokemon-info">
						<div className="Container-pokemon-name">
							<h1>{poke?.name + ' N°' + poke?.id}</h1>
						</div>
						<div className="Container-pokemon-image">
							<img
								src={poke?.sprites?.other?.home?.front_default}
								alt={poke?.name}
							/>
						</div>
						<div className="container-info">
							<p className="description">{description?.flavor_text_entries}</p>
							<div className="container-types">
								<h3 className="types">Types:</h3>
								{poke?.types &&
									poke?.types.map((type) => (
										<p
											key={type.type.name}
											className="Card-types"
											style={{ backgroundColor: colours[type.type.name] }}
										>
											{type.type.name}
										</p>
									))}
							</div>
							<div className="categories">
								<ul>
									<li>
										<span className="categories-title">Height</span>
										<span>{poke?.height / 10}m</span>
									</li>

									<li>
										<span className="categories-title">Weight</span>
										<span>{poke?.weight / 10} kg</span>
									</li>

									<li>
										<span className="categories-title">Abilities</span>
										{poke?.abilities?.map((ability) => (
											<span className="abilities">{ability.ability.name}</span>
										))}
									</li>
								</ul>
							</div>
							<div className="stats">
								<h3>Stats</h3>
								<ul>
									{poke?.stats?.map((stat) => (
										<li key={stat.stat.name}>
											<span className="stats-title">{stat.stat.name}</span>
											<span>{stat.base_stat}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Pokemon;
