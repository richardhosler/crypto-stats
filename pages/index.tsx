import { useState, useEffect } from "react";
import Head from "next/head";
import { SymbolSelector } from "../components/SymbolSelector";
import { useHourlyQuery } from "../hooks/useHourly";
import { Flex } from "@chakra-ui/react";
import PlotArea from "../components/PlotArea";

export default function Home() {
	const [fsym, setFsym] = useState(["BTC"]);
	const [tsym, setTsym] = useState("USD");
	const queryData = useHourlyQuery(fsym, tsym);

	// TODO: add package that has colours and icons https://github.com/ErikThiart/cryptocurrency-icons

	return (
		<Flex position="relative" height="xl">
			<Head>
				<title>Crypto Stats</title>
				<meta name="description" content="Cryptocurrency stats page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SymbolSelector
				symList={fsym}
				setSymList={setFsym}
				supportedSymbols={["BTC", "ETH", "LTC", "XRP", "BCH"]}
			/>
			<PlotArea data={queryData} />
			<SymbolSelector
				symbol={tsym}
				setSymbol={setTsym}
				supportedSymbols={["USD", "EUR", "GBP"]}
			/>
		</Flex>
	);
}
