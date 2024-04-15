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
		generations: [0],
	});

	return (
		<FilterContext.Provider value={{ filter, setFilter }}>
			{children}
		</FilterContext.Provider>
	);
};
