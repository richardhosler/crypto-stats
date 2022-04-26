import { useQuery } from "react-query";

const apiKey = process.env.NEXT_PUBLIC_CRYPTO_COMPARE_API_KEY;

export const useHourlyQuery = (fsym: string[], tsym: string[]) => {
  let url = `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${fsym.join(
    ","
  )}&tsym=${tsym}&limit=10&aggregate=1&apikey=${apiKey}`;

  return useQuery(["hourly", fsym, tsym], () =>
    fetch(url).then((res) => res.json())
  );
};
