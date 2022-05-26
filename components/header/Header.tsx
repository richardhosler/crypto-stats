import { Flex, Text, Box, Select, Spacer, Icon } from "@chakra-ui/react";

import { PlotType } from "../plot-area/PlotArea";
import { CurrencySelect } from "../currency-select/CurrencySelect";
import { PlotSelect } from "../plot-select/PlotSelect";

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
		<Flex backgroundColor="orange">
			<Text fontSize="3xl" color="white" margin="6px">
				Crypto Stats
			</Text>

			<Spacer />
			<Flex padding="2">
				<PlotSelect setPlot={setPlot} />
				<Spacer />
				<CurrencySelect setTsym={setTsym} tsym={tsym} />
			</Flex>
		</Flex>
	);
};
