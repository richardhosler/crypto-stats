import { useQueries } from "react-query";

const apiKey = process.env.NEXT_PUBLIC_CRYPTO_COMPARE_API_KEY;

export const useHourlyQuery = (fsym: string[], tsym: string) => {
	let queryOptions = [];
	fsym.forEach((symbol) => {
		queryOptions.push({
			queryKey: ["hourly", symbol],
			queryFn: (qopt) => {
				let url = `https://min-api.cryptocompare.com/data/v2/histohour?tryConversion=true&fsym=${qopt.queryKey[1]}&tsym=${tsym}&limit=12&aggregate=1&apikey=${apiKey}`;
				return fetch(url).then((response) => response.json());
			},
		});
	});
	let data = useQueries(queryOptions);
	let output = [];
	data.forEach((d) => {
		if (d.data) {
			output.push(d.data);
		}
	}, []);
	return output;
};
