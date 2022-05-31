import { useQueries } from "react-query";
interface QueryOptionsInterface {
	queryKey: string[] | string;
	queryFn: (qopt: any) => Promise<Root>;
}
export interface Root {
	Response: string;
	Message: string;
	HasWarning: boolean;
	Type: number;
	RateLimit: RateLimit;
	Data: Data;
}
interface RateLimit {}
interface Data {
	Aggregated: boolean;
	TimeFrom: number;
	TimeTo: number;
	Data: Daum[];
}
interface Daum {
	time: number;
	high: number;
	low: number;
	open: number;
	volumefrom: number;
	volumeto: number;
	close: number;
	conversionType: string;
	conversionSymbol: string;
}
export const useHourlyQuery = (fsym: string[], tsym: string) => {
	let queryOptions: QueryOptionsInterface[] = [];

	fsym.map((symbol) => {
		queryOptions.push({
			queryKey: ["hourly", symbol, tsym],
			queryFn: async (qopt): Promise<Root> => {
				const url = `https://min-api.cryptocompare.com/data/v2/histohour?tryConversion=true&fsym=${qopt.queryKey[1]}&tsym=${tsym}&limit=24&aggregate=1&apikey=${process.env.NEXT_PUBLIC_CRYPTO_COMPARE_API_KEY}`;
				const response = await fetch(url);
				return await response.json();
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
