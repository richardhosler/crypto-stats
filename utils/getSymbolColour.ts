import coins from "../public/coinlist.json";

export const getSymbolColour = (symbol: string): string => {
  const coin = coins.find((coin) => coin.symbol === symbol);

  if (coin.colour) {
    return coin.colour;
  }

  return "#000";
};

export const getSymbolColours = (symbols: string[]): string[] => {
  return symbols.map((symbol) => getSymbolColour(symbol));
};
