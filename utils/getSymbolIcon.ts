import coins from "../public/coinlist.json";
export const getSymbolIcon = (symbol: string) => {
	return coins
		.map((coin) => {
			if (coin.symbol === symbol) {
				return coin.img_url;
			}
		})
		.filter((coin) => coin !== undefined)[0];
};
