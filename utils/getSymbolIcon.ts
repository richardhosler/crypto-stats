import coins from "../public/coinlist.json";

export const getPngIcon = (symbol: string) => {
	const coin = coins.find((coin) => coin.symbol === symbol);
	return coin ? coin.img_url : getSvgIcon(symbol);
};

const getSvgIcon = (symbol: string) => {
	return `/icons/${symbol.toLowerCase()}.svg`;
};
