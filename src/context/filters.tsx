import React, { ReactNode, createContext, useState } from "react";
import { types } from "@src/utils/const";

interface FilerType {
	types: string[];
	generations: number[];
}

export interface FilterContextType {
	filter: FilerType;
	setFilter: (filter: FilerType) => void;
}

export const FilterContext = createContext<FilterContextType | null>(null);

export const FilterProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [filter, setFilter] = useState<FilerType>({
		types: types,
		generations: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
	});

	return (
		<FilterContext.Provider value={{ filter, setFilter }}>
			{children}
		</FilterContext.Provider>
	);
};
