import { useQueries } from "react-query";

export const useHourlyQuery = (fsym: string[], tsym: string) => {
  let queryOptions = [];

  fsym.forEach((symbol) => {
    queryOptions.push({
      queryKey: ["hourly", symbol],
      queryFn: (qopt) => {
        const url = `https://min-api.cryptocompare.com/data/v2/histohour?tryConversion=true&fsym=${qopt.queryKey[1]}&tsym=${tsym}&limit=24&aggregate=1&apikey=${process.env.NEXT_PUBLIC_CRYPTO_COMPARE_API_KEY}`;
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

  // TODO: Adding interface to queryFn
  // Change all foreach for map ideally
  return output;
};
