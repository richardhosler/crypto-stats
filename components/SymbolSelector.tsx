import { Box, Checkbox, Stack } from "@chakra-ui/react";

interface SymbolSelectorInterface {
	symList?: string[];
	setSymList?: (symbols: string[]) => void;
	symbol?: string;
	setSymbol?: (symbol: string) => void;
	hasMounted: boolean;
}
const supportedSymbols = ["BTC", "ETH", "XRP", "LTC", "BCH", "EOS"];

export const SymbolSelector = ({
	symList,
	setSymList,
	symbol,
	setSymbol,
	hasMounted,
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

	if (!hasMounted) return null;

	return (
		<Stack
			border="2px"
			borderColor="slateblue"
			width="32"
			padding="4"
			rounded="lg"
			overflow={["scroll", "hidden"]}
		>
			{supportedSymbols.map((symbol, key) => (
				<Checkbox
					key={key}
					name={symbol}
					onChange={() => toggleSymbol(symbol)}
					isChecked={isChecked(symbol)}
				>
					{symbol}
				</Checkbox>
			))}
		</Stack>
	);
};
