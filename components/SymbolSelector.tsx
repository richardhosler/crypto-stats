import { Checkbox, Flex, Icon, Image, Spacer, Stack } from "@chakra-ui/react";
import { getSvgIcon } from "../utils/getSymbolIcon";

interface SymbolSelectorInterface {
	supportedSymbols: string[];
	symList?: string[];
	setSymList?: (symbols: string[]) => void;
	symbol?: string;
	setSymbol?: (symbol: string) => void;
	props?: any;
}

export const SymbolSelector = ({
	supportedSymbols,
	symList,
	setSymList,
	symbol,
	setSymbol,
	props,
}: SymbolSelectorInterface) => {
	const toggleSymbol = (symbol: string) => {
		if (symList) {
			if (symList.includes(symbol)) {
				symList = symList.filter((s) => s !== symbol);
			} else if (symList.length < 5) {
				symList.push(symbol);
			} else {
				//TODO: show error toast
			}
			setSymList([...symList]);
		} else {
			setSymbol(symbol);
		}
	};

	const isChecked = (sym: string) => {
		if (symList) {
			return symList.includes(sym);
		} else {
			return symbol === sym;
		}
	};

	return (
		<Stack
			border="2px"
			borderColor="slateblue"
			width="32"
			padding="4"
			rounded="lg"
			overflow={"auto"}
			{...props}
		>
			{supportedSymbols &&
				supportedSymbols.map((symbol, key) => (
					<Flex key={key}>
						<Checkbox
							name={symbol}
							onChange={() => toggleSymbol(symbol)}
							isChecked={isChecked(symbol)}
						>
							{symbol}
						</Checkbox>
						<Spacer />
						<Image
							width={"20px"}
							height={"20px"}
							src={getSvgIcon(symbol)}
							alt={`icon for ${symbol}`}
						/>
					</Flex>
				))}
		</Stack>
	);
};
