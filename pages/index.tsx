import { Flex } from "@chakra-ui/react";
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
      <Header setPlot={setPlotType} />
      <Flex position="relative" height="xl">
        <SymbolSelector
          props={{ width: "200px" }}
          symList={fsym}
          setSymList={setFsym}
          supportedSymbols={SUPPORTED_SYMBOLS}
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
