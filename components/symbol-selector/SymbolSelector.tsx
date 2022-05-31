import { Checkbox, Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { CSSProperties, useState } from "react";
import { getSvgIcon } from "../../utils/getSymbolIcon";
import { Toggle } from "../toggle/Toggle";

interface SymbolSelectorInterface {
	setSymbolList?: (symbols: string[]) => void;
	supportedSymbols: string[];
	symbolList: string[];
	style?: CSSProperties;
}

export const SymbolSelector = ({
	setSymbolList,
	supportedSymbols,
	symbolList,
	style,
}: SymbolSelectorInterface) => {
	const [multiSelect, setMultiSelect] = useState(false);

	const toggleSymbol = (symbol: string): void => {
		if (multiSelect) {
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
			setSymbolList([symbol]);
		}
	};

	const isChecked = (sym: string): boolean => {
		return symbolList?.includes(sym);
	};

	return (
		<Stack overflow="auto" padding="4" style={style}>
			<Flex>
				<Text>{multiSelect ? `(${symbolList.length}/5)` : "multiselect"}</Text>
				<Spacer />
				<Toggle onChange={setMultiSelect}></Toggle>
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
