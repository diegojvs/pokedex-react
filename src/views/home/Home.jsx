import { useState, useEffect } from 'react';
import Card from './Card';
import './home.css';

const Home = () => {
	const [pokemons, setPokemons] = useState([]);
	const [offset, setOffset] = useState([0, 151, 251, 386, 493, 649, 721, 809]);
	const [limit, setLimit] = useState([151, 100, 135, 107, 156, 72, 88, 89]);
	const [gen, setGen] = useState(0);

	const fetchPokemons = async () => {
		const response = await fetch(
			`https://pokeapi.co/api/v2/pokemon?limit=${limit[gen]}&offset=${offset[gen]}`
		);
		const data = await response.json();
		const listPokemons = await Promise.all(
			data.results.map(async (poke) => {
				const response = await fetch(poke.url);
				const data = await response.json();
				return {
					name: data.name,
					img: data.sprites.other.home.front_default,
					id: data.id,
					types: data.types
				};
			})
		);

		setPokemons([...pokemons, ...listPokemons]);
		setGen(gen + 1);
	};

	useEffect(() => {
		fetchPokemons();
	}, []);

	return (
		<main className="Home">
			<div className="Container-cards">
				{pokemons?.map((pokemon) => (
					<Card
						key={pokemon.id}
						id={pokemon.id}
						name={pokemon.name}
						img={pokemon.img}
						types={pokemon.types}
					/>
				))}
			</div>
			{gen != 8 ? (
				<div className="Container-btn" onClick={fetchPokemons}>
					<button className="Btn">More Pokemon</button>
				</div>
			) : (
				<></>
			)}
		</main>
	);
};

export default Home;
