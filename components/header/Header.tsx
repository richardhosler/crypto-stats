import { Flex, Text, Box, Select, Spacer } from "@chakra-ui/react";

import { PlotType } from "../plot-area/PlotArea";

interface HeaderInterface {
	setPlot: (plot: PlotType) => void;
	setTsym: (tsym: string) => void;
}

export const Header = ({ setPlot, setTsym }: HeaderInterface) => {
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
	const handleChangeTsym = (event: React.FormEvent<HTMLSelectElement>) => {
		switch (event.currentTarget.selectedIndex) {
			case 1:
				setTsym("EUR");
				break;
			case 2:
				setTsym("GBP");
				break;
			default:
				setTsym("USD");
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
			<Flex>
				<Select onChange={handleChangePlot}>
					<option value={0}>line</option>
					<option value={1}>bar</option>
					<option value={2}>candle</option>
				</Select>
				<Select onChange={handleChangeTsym}>
					<option value="USD">USD</option>
					<option value="EUR">EUR</option>
					<option value="GBP">GBP</option>
				</Select>
			</Flex>
		</Flex>
	);
};
