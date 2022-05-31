import { Checkbox, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { CSSProperties } from "react";
import { getSvgIcon } from "../../utils/getSymbolIcon";

interface SymbolSelectorInterface {
	setSymbolList?: (symbols: string[]) => void;
	supportedSymbols: string[];
	symbolList?: string[];
	style?: CSSProperties;
}

export const SymbolSelector = ({
	setSymbolList,
	supportedSymbols,
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
		}
	};

	const isChecked = (sym: string): boolean => {
		return symbolList?.includes(sym);
	};

	return (
		<Stack overflow="auto" padding="4" style={style}>
			<Flex>
				<Text>Multi?</Text>
				<Spacer />
			</Flex>
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
