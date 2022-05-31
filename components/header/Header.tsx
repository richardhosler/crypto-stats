import { Flex, Text, Box, Select, Spacer, Icon } from "@chakra-ui/react";

import { PlotType } from "../plot-area/PlotArea";
import { DropdownSelector } from "../dropdown-selector/DropdownSelector";

interface HeaderInterface {
	setPlot: (plot: PlotType) => void;
	setTsym: (tsym: string) => void;
	setHours: (hours: number) => void;
}

export const Header = ({ setPlot, setTsym, setHours }: HeaderInterface) => {
	const plotDropdownOptions = [
		{ text: "Line" },
		{ text: "Bar" },
		{ text: "Candle" },
	];
	const currencyDropdownOptions = [
		{ text: "USD", icon: "/icons/usd.svg" },
		{ text: "EUR", icon: "/icons/eur.svg" },
		{ text: "GBP", icon: "/icons/gbp.svg" },
	];
	const hoursDropdownOptions = [
		{ text: "12 hours", value: 12 },
		{ text: "24 hours", value: 24 },
		{ text: "48 hours", value: 48 },
		{ text: "72 hours", value: 72 },
	];

	const handleTsymChange = (option: number) => {
		const tsyms = ["USD", "EUR", "GBP"];
		setTsym(tsyms[option]);
		// switch (option) {
		// 	case 1:
		// 		setTsym("EUR");
		// 		break;
		// 	case 2:
		// 		setTsym("GBP");
		// 		break;
		// 	default:
		// 		setTsym("USD");
		// 		break;
		// }
	};
	return (
		<Flex backgroundColor="orange" zIndex={5}>
			<Text fontSize="3xl" color="white" margin="6px">
				Crypto Stats
			</Text>

			<Spacer />
			<Flex padding="2">
				<DropdownSelector options={hoursDropdownOptions} onChange={setHours} />
				<Spacer padding={2} />
				<DropdownSelector onChange={setPlot} options={plotDropdownOptions} />
				<Spacer padding={2} />
				<DropdownSelector
					onChange={handleTsymChange}
					options={currencyDropdownOptions}
				/>
			</Flex>
		</Flex>
	);
};
