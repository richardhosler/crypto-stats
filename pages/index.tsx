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
			<Header setPlot={setPlotType} setTsym={setTsym} tsym={tsym} />
			<Flex style={{ height: "100%" }}>
				<SymbolSelector
					symbolList={fsym}
					setSymbolList={setFsym}
					supportedSymbols={SUPPORTED_SYMBOLS}
					style={{
						height: "100%",
						position: "relative",
						width: "150px",
					}}
				/>
				<Box style={{ width: "90%" }}>
					<PlotArea data={hourlyData} colours={coinColours} type={plotType} />
				</Box>
			</Flex>
		</>
	);
}
