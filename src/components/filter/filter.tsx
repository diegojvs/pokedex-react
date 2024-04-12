import useFilter from "@src/hooks/useFilter";
import SelectType from "../selectType/selectType";
import { useState, useRef } from "react";
import "./filter.css";

const Filter = () => {
	const { filter, setFilter } = useFilter();
	const [open, setOpen] = useState(false);
	const [isAnimating, setIsAnimating] = useState(false);
	const filterRef = useRef<HTMLDivElement>(null);
	const spaceRef = useRef<HTMLDivElement>(null);

	const handleTypesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setFilter({
			...filter,
			types: filter.types.includes(value)
				? filter.types.filter((type) => type !== value)
				: [...filter.types, value],
		});
	};

	const removeType = (type: string) => {
		setFilter({
			...filter,
			types: filter.types.filter((item) => item !== type),
		});
	};

	const handleGenerationsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setFilter({
			...filter,
			generations: filter.generations.includes(Number(value))
				? filter.generations.filter((gen) => gen !== Number(value))
				: [...filter.generations, Number(value)],
		});
	};

	const handleFilters = () => {
		if (open) {
			filterRef.current?.classList.add("slide-out");
			setTimeout(() => {
				setOpen(false);
				filterRef.current?.classList.remove("slide-out");
			}, 300);
		} else {
			setOpen(true);
		}
	};

	return (
		<div>
			<button
				className="rounded-lg border border-slate-50 bg-transparent px-4 py-2 font-bold text-white hover:scale-[102%]"
				onClick={handleFilters}
			>
				Filter
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth="1.5"
					stroke="currentColor"
					className="ml-2 inline-block h-6 w-6"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
					/>
				</svg>
			</button>
			{open && (
				<div
					ref={filterRef}
					className={`slide-in fixed right-0 top-0 z-10 flex h-screen w-screen bg-[rgba(0,0,0,0.2)] shadow-lg`}
				>
					<div
						className="h-screen w-1/4 md:w-1/2"
						onClick={handleFilters}
					></div>
					<div className="flex w-3/4 flex-col gap-4 bg-[rgba(255,255,255,0.6)] p-4 backdrop-blur-lg md:w-1/2">
						<button onClick={handleFilters} className="self-end">
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
									d="M6 18 18 6M6 6l12 12"
								/>
							</svg>
						</button>
						<h3 className="text-2xl font-black text-black">Types:</h3>
						<SelectType
							handleTypesChange={handleTypesChange}
							removeType={removeType}
							filteredTypes={filter.types}
						/>
					</div>
				</div>
			)}
		</div>
	);
};

export default Filter;
