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
					props={{ width: "200px" }}
					symList={fsym}
					setSymList={setFsym}
					supportedSymbols={[
						"BTC",
						"WBTC",
						"ETH",
						"STETH",
						"BNB",
						"BCH",
						"XMR",
						"EGLD",
						"LTC",
						"SOL",
						"LUNA",
						"AVAX",
						"CETH",
						"FTT",
						"AXS",
						"ETC",
						"OKB",
						"ATOM",
						"APE",
						"DOT",
						"FIL",
						"ICP",
						"NEAR",
						"XRP",
					]}
				/>
				<PlotArea data={hourlyData} />
				<SymbolSelector
					props={{ width: "200px" }}
					symbol={tsym}
					setSymbol={setTsym}
					supportedSymbols={["USD", "EUR", "GBP", "USDT"]}
				/>
			</Flex>
		</>
	);
}
