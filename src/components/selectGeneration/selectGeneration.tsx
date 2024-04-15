import { useEffect, useState } from "react";
import { genPokemon, GenPokemon } from "@src/utils/const";

interface SelectGenerationProps {
	handleGenerationChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	removeGeneration: (generation: number) => void;
	filteredGeneration: GenPokemon[];
}

const SelectGeneration = ({
	handleGenerationChange,
	removeGeneration,
	filteredGeneration,
}: SelectGenerationProps) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState<GenPokemon[]>(filteredGeneration);
	const [options, setOptions] = useState<GenPokemon[]>([]);

	const addGeneration = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		const generation = genPokemon.find((gen) => gen.name === value);
		if (generation) {
			setSelected((prev) => [...prev, generation]);
			handleGenerationChange(e);
			setOptions(options.filter((item) => item.name !== value));
		}
	};

	const removeGenerationHandler = (generation: string) => {
		const gen = genPokemon.find((gen) => gen.name === generation);
		if (gen) {
			setSelected(selected.filter((item) => item.name !== generation));
			setOptions([...options, gen]);
			removeGeneration(gen.value);
		}
	};

	useEffect(() => {
		setOptions(genPokemon.filter((gen) => !selected.includes(gen)));
	}, []);

	return (
		<div className="relative w-full align-middle">
			<div className="flex justify-evenly rounded-2xl border-2 border-[#f5f5f5]">
				<div
					className={`flex w-full flex-wrap items-center gap-2  p-2 ${selected.length > 0 ? "justify-start" : "justify-around"}`}
				>
					{selected.length > 0 ? (
						selected.map((item) => (
							<div
								className={`flex justify-center rounded-lg border-2 border-[#f5f5f5] p-1 align-middle opacity-80`}
								key={`${item.name}-selected`}
							>
								<div
									className={`text-center text-xs font-black text-white`}
									onClick={() => removeGenerationHandler(item.name)}
								>
									{item.name} |
									<button
										className={`mx-1 h-full p-1 text-xs text-white hover:opacity-80`}
										onClick={() => removeGenerationHandler(item.name)}
									>
										X
									</button>
								</div>
							</div>
						))
					) : (
						<div>Select</div>
					)}
				</div>
				<button onClick={() => setOpen(!open)}>
					{open ? (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
							/>
						</svg>
					) : (
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="h-6 w-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
							/>
						</svg>
					)}
				</button>
			</div>
			{open && (
				<div className="mt-2 w-full p-0 [&>*:first-child]:rounded-t-2xl [&>*:first-child]:border-t [&>*:last-child]:rounded-b-2xl [&>*]:border [&>*]:border-t-0 [&>*]:border-transparent">
					{options.map((option) => (
						<div
							key={`${option.name}-option`}
							className={`p-0 text-xs font-black text-white`}
						>
							<input
								type="checkbox"
								id={option.name}
								value={option.name}
								checked={selected.includes(option)}
								onChange={addGeneration}
								className={`appearance-none`}
							/>
							<label
								htmlFor={option.name}
								className="inline-block h-full w-full cursor-pointer p-2"
							>
								{option.name}
							</label>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SelectGeneration;
