import coins from "../public/coinlist.json";

const getPngIcon = (symbol: string) => {
	const coin = coins.find((coin) => coin.symbol === symbol);
	return coin.img_url;
};

export const getSvgIcon = (symbol: string) => {
	const coin = coins.find((coin) => coin.symbol === symbol);
	if (coin) return coin.svg != "" ? coin.svg : getPngIcon(symbol);
};
