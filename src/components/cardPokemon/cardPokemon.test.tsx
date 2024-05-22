import CardPokemon from "./cardPokemon";
import PokemonDetails from "@components/pokemonDetails/pokemonDetails";
import { act, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { bulbasaur } from "@mocks/bulbasaur";
import { MemoryRouter, Route, Routes } from "react-router-dom";

describe("CardPokemon", () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<Routes>
					<Route path="/" element={<CardPokemon pokemon={bulbasaur} />} />
					<Route path="/:pokemonName" element={<PokemonDetails />} />
				</Routes>
			</MemoryRouter>,
		);
	});

	test("should render the pokemon name", () => {
		const name = screen.getByText(bulbasaur.name);
		expect(name).toBeDefined();
	});

	test("should render the pokemon image", () => {
		const image = screen.getByAltText(bulbasaur.name);
		expect(image.getAttribute("src")).toBe(
			bulbasaur.sprites.other?.home["front_default"],
		);
	});

	test("should render the types", () => {
		bulbasaur.types.forEach((type) => {
			expect(screen.getByText(type.type.name)).toBeDefined();
		});
	});

	test("should render the id", () => {
		const id = screen.getByText(`${bulbasaur.id}`);
		expect(id).toBeDefined();
	});

	test("should open the component PokemonDetails when clicked", async () => {
		await act(async () => {
			await userEvent.click(screen.getByRole("link"));
		});
		await waitFor(() => {
			expect(screen.findAllByText("Description")).toBeDefined();
		});
	});
});
