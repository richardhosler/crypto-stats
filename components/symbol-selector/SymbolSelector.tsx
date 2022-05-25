import { Checkbox, Flex, Image, Spacer, Stack } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { getSvgIcon } from "../../utils/getSymbolIcon";

interface SymbolSelectorInterface {
	setSymbol?: (symbol: string) => void;
	setSymbolList?: (symbols: string[]) => void;
	supportedSymbols: string[];
	symbol?: string;
	symbolList?: string[];
	style?: CSSProperties;
}

export const SymbolSelector = ({
	setSymbol,
	setSymbolList,
	supportedSymbols,
	symbol,
	symbolList,
	style,
}: SymbolSelectorInterface) => {
	const toggleSymbol = (symbol: string): void => {
		if (symbolList) {
			if (symbolList.includes(symbol)) {
				symbolList = symbolList.filter(
					(filterSymbol) => filterSymbol !== symbol
				);
			} else if (symbolList.length < 5) {
				symbolList.push(symbol);
			} else {
				//TODO: show error toast
			}
			setSymbolList([...symbolList]);
		} else {
			setSymbol(symbol);
		}
	};

	const isChecked = (sym: string): boolean => {
		if (symbolList) {
			return symbolList.includes(symbol);
		}
		return symbol === sym;
	};

	return (
		<Stack overflow="auto" padding="4" style={style}>
			{supportedSymbols?.map((symbol, key) => (
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
						width="20px"
						height="20px"
						src={getSvgIcon(symbol)}
						alt={`icon for ${symbol}`}
					/>
				</Flex>
			))}
		</Stack>
	);
};
