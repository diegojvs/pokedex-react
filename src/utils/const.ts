interface GenPokemon {
	start: number;
	end: number;
}

export const genPokemon: GenPokemon[] = [
	{
		start: 1,
		end: 151,
	},
	{
		start: 152,
		end: 251,
	},
	{
		start: 252,
		end: 386,
	},
	{
		start: 387,
		end: 493,
	},
	{
		start: 494,
		end: 649,
	},
	{
		start: 650,
		end: 721,
	},
	{
		start: 722,
		end: 809,
	},
	{
		start: 810,
		end: 905,
	},
	{
		start: 906,
		end: 1025,
	},
];

export const colorsType: { [key: string]: string } = {
	normal: "bg-gray-500",
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
