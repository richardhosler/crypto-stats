import { useState } from "react";
import Head from "next/head";
import { SymbolSelector } from "../components/SymbolSelector";
import { useHourlyQuery } from "../hooks/useHourlyQuery";
import { Flex } from "@chakra-ui/react";
import PlotArea from "../components/PlotArea";
import { Header } from "../components/Header";

export default function Home() {
	const [fsym, setFsym] = useState(["BTC"]);
	const [tsym, setTsym] = useState("USD");
	const hourlyData = useHourlyQuery(fsym, tsym);

	// TODO: add package that has colours and icons https://github.com/ErikThiart/cryptocurrency-icons

	return (
		<>
			<Head>
				<title>Crypto Stats</title>
				<meta name="description" content="Cryptocurrency stats page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Flex position="relative" height="xl">
				<SymbolSelector
					symList={fsym}
					setSymList={setFsym}
					supportedSymbols={[
						"BTC",
						"ETH",
						"BNB",
						"USDC",
						"SOL",
						"LUNA",
						"LTC",
						"XRP",
						"BCH",
					]}
				/>
				<PlotArea data={hourlyData} />
				<SymbolSelector
					symbol={tsym}
					setSymbol={setTsym}
					supportedSymbols={["USD", "EUR", "GBP", "USDT"]}
				/>
			</Flex>
		</>
	);
}
