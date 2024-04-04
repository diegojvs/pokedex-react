import { Type } from "@src/models/type";
import { colorsType } from "@src/utils/const";

const TypeLabel = (type: Type) => {
	return (
		<span
			className={`mx-1 w-24 rounded-lg p-2 text-center text-base font-black ${colorsType[type.type.name]} text-white`}
		>
			{type.type.name}
		</span>
	);
};

export default TypeLabel;
