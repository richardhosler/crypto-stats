import { useQueries } from "react-query";
// TODO: Adding interface to queryFn
interface QueryOptionsInterface {
	queryKey: string[] | string;
	queryFn: (qopt: any) => Promise<any>;
}
export const useHourlyQuery = (fsym: string[], tsym: string) => {
	let queryOptions: QueryOptionsInterface[] = [];

	fsym.map((symbol) => {
		queryOptions.push({
			queryKey: ["hourly", symbol],
			queryFn: (qopt): Promise<any> => {
				const url = `https://min-api.cryptocompare.com/data/v2/histohour?tryConversion=true&fsym=${qopt.queryKey[1]}&tsym=${tsym}&limit=24&aggregate=1&apikey=${process.env.NEXT_PUBLIC_CRYPTO_COMPARE_API_KEY}`;
				return fetch(url).then((response) => response.json());
			},
		});
	});
	const data = useQueries(queryOptions);
	let output = [];

	data.map((d) => {
		if (d.data) {
			output.push(d.data);
		}
	}, []);

	return output;
};
