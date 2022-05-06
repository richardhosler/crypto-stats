import { getSymbolIcon } from "./getSymbolIcon";
const ColorThief = require("colorthief");

export const getSymbolColour = async (symbol: string) => {
	const iconUrl = getSymbolIcon(symbol);
	const colour = await ColorThief.getColor(iconUrl).then((colors) => colors);
	return colour;
};

export const getSymbolColours = (symbols: string[]) => {
	return symbols.map((symbol) => getSymbolColour(symbol));
};
