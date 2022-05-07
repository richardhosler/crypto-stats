import coins from "../public/coinlist.json";

export const getSymbolColour = (symbol: string) => {
	const coin = coins.find((coin) => coin.symbol === symbol);
	if (coin.colour) return coin.colour;
	else return "#000";
};

export const getSymbolColours = (symbols: string[]) => {
	return symbols.map((symbol) => getSymbolColour(symbol));
};
