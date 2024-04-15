export interface GenPokemon {
	start: number;
	end: number;
	name: string;
	value: number;
}

export const genPokemon: GenPokemon[] = [
	{
		start: 1,
		end: 151,
		name: "Generation I",
		value: 0,
	},
	{
		start: 152,
		end: 251,
		name: "Generation II",
		value: 1,
	},
	{
		start: 252,
		end: 386,
		name: "Generation III",
		value: 2,
	},
	{
		start: 387,
		end: 493,
		name: "Generation IV",
		value: 3,
	},
	{
		start: 494,
		end: 649,
		name: "Generation V",
		value: 4,
	},
	{
		start: 650,
		end: 721,
		name: "Generation VI",
		value: 5,
	},
	{
		start: 722,
		end: 809,
		name: "Generation VII",
		value: 6,
	},
	{
		start: 810,
		end: 905,
		name: "Generation VIII",
		value: 7,
	},
	{
		start: 906,
		end: 1025,
		name: "Generation IX",
		value: 8,
	},
];

export const colorsType: { [key: string]: string } = {
	normal: "bg-gray-400",
	fire: "bg-red-500",
	water: "bg-blue-500",
	electric: "bg-yellow-300",
	grass: "bg-green-500",
	ice: "bg-blue-300",
	fighting: "bg-red-800",
	poison: "bg-purple-800",
	ground: "bg-yellow-600",
	flying: "bg-blue-300",
	psychic: "bg-pink-400",
	bug: "bg-lime-400",
	rock: "bg-yellow-700",
	ghost: "bg-indigo-800",
	dragon: "bg-purple-700",
	dark: "bg-gray-800",
	steel: "bg-gray-500",
	fairy: "bg-pink-300",
};

export const types: string[] = [
	"normal",
	"fire",
	"water",
	"electric",
	"grass",
	"ice",
	"fighting",
	"poison",
	"ground",
	"flying",
	"psychic",
	"bug",
	"rock",
	"ghost",
	"dragon",
	"dark",
	"steel",
	"fairy",
];
