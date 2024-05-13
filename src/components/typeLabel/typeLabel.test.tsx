import TypeLabel from "./typeLabel";
import { colorsType } from "@src/utils/const";
import { Type } from "@src/models/type";
import { render, screen } from "@testing-library/react";

describe("TypeLabel", () => {
	const type: Type = {
		slot: 1,
		type: {
			name: "fire",
			url: "https://pokeapi.co/api/v2/type/10/",
		},
	};
	beforeEach(() => {
		render(<TypeLabel {...type} />);
	});

	test("should render the type label", () => {
		expect(screen.getByText(type.type.name)).toBeDefined();
	});

	test("should have the correct background color", () => {
		expect(screen.getByText(type.type.name).className).toContain(
			colorsType[type.type.name],
		);
	});

	test("not should have the incorrect background color", () => {
		expect(screen.getByText(type.type.name).className).not.toContain(
			colorsType["water"],
		);
	});

	test("should have a background color", () => {
		expect(screen.getByText(type.type.name).className).toContain("bg-");
	});
});
