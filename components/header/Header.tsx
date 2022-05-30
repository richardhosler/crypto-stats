import { Flex, Text, Box, Select, Spacer, Icon } from "@chakra-ui/react";

import { PlotType } from "../plot-area/PlotArea";
import { DropdownSelector } from "../dropdown-selector/DropdownSelector";

interface HeaderInterface {
	setPlot: (plot: PlotType) => void;
	setTsym: (tsym: string) => void;
}

export const Header = ({ setPlot, setTsym }: HeaderInterface) => {
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
		<Flex backgroundColor="orange">
			<Text fontSize="3xl" color="white" margin="6px">
				Crypto Stats
			</Text>

			<Spacer />
			<Flex padding="2">
				<DropdownSelector callback={setPlot} options={plotDropdownOptions} />
				<Spacer padding={2} />
				<DropdownSelector
					callback={handleTsymChange}
					options={currencyDropdownOptions}
				/>
			</Flex>
		</Flex>
	);
};
