import { useEffect, useState } from "react";
import { colorsType, types } from "@src/utils/const";

interface SelectProps {
	handleTypesChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	removeType: (type: string) => void;
	filteredTypes: string[];
}

const SelectType = ({
	handleTypesChange,
	removeType,
	filteredTypes,
}: SelectProps) => {
	const [open, setOpen] = useState(false);
	const [selected, setSelected] = useState<string[]>(filteredTypes);
	const [options, setOptions] = useState<string[]>([]);

	const addType = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setSelected((prev) => [...prev, value]);
		handleTypesChange(e);
		setOptions(options.filter((item) => item !== value));
	};

	const removeTypeHandler = (type: string) => {
		setSelected(selected.filter((item) => item !== type));
		setOptions([...options, type]);
		removeType(type);
	};

	useEffect(() => {
		setOptions(types.filter((type) => !selected.includes(type)));
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
								className={`flex justify-center rounded-lg p-1 align-middle ${colorsType[item]} opacity-80`}
								key={item}
							>
								<div
									key={item}
									className={`text-center text-xs font-black text-white`}
									onClick={() => removeTypeHandler(item)}
								>
									{item} |
									<button
										className={`mx-1 h-full  p-1 text-xs text-white hover:opacity-80`}
										onClick={() => removeTypeHandler(item)}
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
				<div className="w-full p-0 [&>*:first-child]:rounded-t-2xl [&>*:first-child]:border-t [&>*:last-child]:rounded-b-2xl [&>*]:border [&>*]:border-t-0 [&>*]:border-transparent">
					{options.map((type) => (
						<div
							key={type}
							className={`p-0 text-xs font-black text-white  ${colorsType[type]}`}
						>
							<input
								type="checkbox"
								id={type}
								value={type}
								checked={selected.includes(type)}
								onChange={addType}
								className={`appearance-none`}
							/>
							<label
								htmlFor={type}
								className="inline-block h-full w-full cursor-pointer p-2"
							>
								{type}
							</label>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default SelectType;
