import ContainerCardsPokemon from "./containerCardsPokemon";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { FilterProvider } from "@src/context/filters";
import { PokemonProvider } from "@src/context/pokemon";
import useFilter from "@src/hooks/useFilter";
import usePokemon from "@src/hooks/usePokemon";
import { bulbasaur } from "@mocks/bulbasaur";
import { Pokemon } from "@src/models/pokemon";

vi.mock("@src/hooks/useFilter");
vi.mock("@src/hooks/usePokemon");

describe("ContainerCardsPokemon", () => {
	const mockUseFilter = {
		filter: { types: ["grass"], generations: [1] },
		setFilter: vi.fn(),
		filterPokemon: vi.fn(() => [] as Pokemon[]),
	};

	const mockUsePokemon = {
		pokemon: [] as Pokemon[],
		setPokemon: vi.fn(),
		loading: false,
		setLoading: vi.fn(),
		error: false,
		setError: vi.fn(),
		generationPokemonFetched: [],
		setGenerationPokemonFetched: vi.fn(),
	};

	beforeEach(() => {
		vi.restoreAllMocks();
		vi.mocked(useFilter).mockReturnValue(mockUseFilter);
		vi.mocked(usePokemon).mockReturnValue(mockUsePokemon);
	});

	afterEach(() => {
		cleanup();
	});

	test("should render the component", async () => {
		render(
			<MemoryRouter>
				<PokemonProvider>
					<FilterProvider>
						<ContainerCardsPokemon />
					</FilterProvider>
				</PokemonProvider>
			</MemoryRouter>,
		);

		expect(screen.getByTestId("containerComponent")).toBeDefined();
	});

	test("should render the loader", async () => {
		mockUsePokemon.loading = true;
		render(
			<MemoryRouter>
				<PokemonProvider>
					<FilterProvider>
						<ContainerCardsPokemon />
					</FilterProvider>
				</PokemonProvider>
			</MemoryRouter>,
		);

		expect(screen.getByTestId("loader")).toBeDefined();
	});

	test("should render the error", async () => {
		mockUsePokemon.error = true;
		mockUsePokemon.loading = false;
		render(
			<MemoryRouter>
				<PokemonProvider>
					<FilterProvider>
						<ContainerCardsPokemon />
					</FilterProvider>
				</PokemonProvider>
			</MemoryRouter>,
		);

		expect(screen.getByTestId("error")).toBeDefined();
	});

	test("should render the cards", async () => {
		mockUsePokemon.pokemon = [bulbasaur];
		mockUsePokemon.loading = false;
		mockUsePokemon.error = false;

		mockUseFilter.filterPokemon = vi.fn(() => [bulbasaur]);
		render(
			<MemoryRouter>
				<PokemonProvider>
					<FilterProvider>
						<ContainerCardsPokemon />
					</FilterProvider>
				</PokemonProvider>
			</MemoryRouter>,
		);

		await waitFor(() => {
			const pokemonList = screen.getByTestId("pokemonList");

			expect(pokemonList.childNodes.length).toBe(1);
		});
	});
});
