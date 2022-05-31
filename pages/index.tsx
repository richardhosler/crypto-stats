import { Box, Flex, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Head from "next/head";

import { getSymbolColours } from "../utils/getSymbolColour";
import { Header } from "../components/header/Header";
import { PlotArea, PlotType } from "../components/plot-area/PlotArea";
import { SUPPORTED_SYMBOLS } from "../constants/supported-symbols";
import { SymbolSelector } from "../components/symbol-selector/SymbolSelector";
import { useHourlyQuery } from "../hooks/useHourlyQuery";

export default function Home() {
	const [fsym, setFsym] = useState(["BTC"]);
	const [tsym, setTsym] = useState("USD");
	const hourlyData = useHourlyQuery(fsym, tsym);
	const [coinColours, setCoinColours] = useState(["#F7931A"]);
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
			<Header setPlot={setPlotType} setTsym={setTsym} />
			<Flex style={{ height: "100%" }}>
				<SymbolSelector
					symbolList={fsym}
					setSymbolList={setFsym}
					supportedSymbols={SUPPORTED_SYMBOLS}
					style={{
						height: "100%",
						position: "absolute",
						width: "150px",
						margin: "5px",
						right: "0",
						boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.5)",
					}}
				/>
				<Box style={{ width: "90%" }}>
					<PlotArea data={hourlyData} colours={coinColours} type={plotType} />
				</Box>
			</Flex>
		</>
	);
}
