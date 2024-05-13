import CardPokemon from "./cardPokemon";
import { render, screen } from "@testing-library/react";
import { bulbasaur } from "./bulbasaur";
import { MemoryRouter } from "react-router-dom";

describe("CardPokemon", () => {
	beforeEach(() => {
		render(
			<MemoryRouter>
				<CardPokemon pokemon={bulbasaur} />
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
});
