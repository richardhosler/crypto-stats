import { Flex, Text, Box, Select, Spacer, Icon } from "@chakra-ui/react";

import { PlotType } from "../plot-area/PlotArea";
import { CurrencySelect } from "../currency-select/CurrencySelect";

interface HeaderInterface {
	setPlot: (plot: PlotType) => void;
	setTsym: (tsym: string) => void;
	tsym: string;
}

export const Header = ({ setPlot, setTsym, tsym }: HeaderInterface) => {
	const handleChangePlot = (event: React.FormEvent<HTMLSelectElement>) => {
		switch (event.currentTarget.selectedIndex) {
			case 1:
				setPlot(PlotType.Bar);
				break;

			case 2:
				setPlot(PlotType.Candle);
				break;

			default:
				setPlot(PlotType.Line);
				break;
		}
	};

	return (
		<Flex backgroundColor="orange" p={2}>
			<Box>
				<Text fontSize="3xl" color="white">
					Crypto Stats
				</Text>
			</Box>
			<Spacer />
			<Flex padding="2">
				<Select onChange={handleChangePlot}>
					<option value={0}>line</option>
					<option value={1}>bar</option>
					<option value={2}>candle</option>
				</Select>
				<Spacer />
				<CurrencySelect setTsym={setTsym} tsym={tsym} />
			</Flex>
		</Flex>
	);
};
