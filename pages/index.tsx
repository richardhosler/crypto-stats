import { useEffect, useState } from "react";
import Head from "next/head";
import { SymbolSelector } from "../components/SymbolSelector";
import { useHourlyQuery } from "../hooks/useHourlyQuery";
import { Flex } from "@chakra-ui/react";
import PlotArea, { PlotType } from "../components/PlotArea";
import { Header } from "../components/Header";
import { getSymbolColours } from "../utils/getSymbolColour";

export default function Home() {
	const [fsym, setFsym] = useState(["BTC"]);
	const [tsym, setTsym] = useState("USD");
	const hourlyData = useHourlyQuery(fsym, tsym);
	const [coinColours, setCoinColours] = useState(["F7931A"]);
	const [plotType, setPlotType] = useState(PlotType.Line);

	useEffect(() => {
		setCoinColours(getSymbolColours(fsym));
	}, [fsym, setFsym]);

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
						"OKB",
						"ATOM",
						"APE",
						"DOT",
						"FIL",
						"ICP",
						"NEAR",
						"UNI",
						"XRP",
					]}
				/>
				<PlotArea data={hourlyData} colours={coinColours} type={plotType} />
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
