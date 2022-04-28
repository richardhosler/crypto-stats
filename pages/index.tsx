import { useState, useEffect } from "react";
import Head from "next/head";
import { SymbolSelector } from "../components/SymbolSelector";
import { useHourlyQuery } from "../hooks/useHourly";
import { formatHourlyQueryData } from "../utils/formatHourlyQueryData";
import { Flex } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const Plot = dynamic(() => import("../components/PlotArea"), {
	ssr: false,
});
function PlotAreaDynamic({ data }) {
	return <Plot data={data} />;
}

export default function Home() {
	const [fsym, setFsym] = useState(["BTC"]);
	const [tsym, setTsym] = useState("USD");
	const queryData = useHourlyQuery(fsym, tsym);

	const [hasMounted, setHasMounted] = useState(false);
	useEffect(() => {
		setHasMounted(true);
	}, []);

	useEffect(() => {
		queryData && console.log(formatHourlyQueryData(queryData));
	}, [queryData]);

	const PlotAreaProps = {
		data: formatHourlyQueryData(queryData),
	};

	return (
		<Flex>
			<Head>
				<title>Crypto Stats</title>
				<meta name="description" content="Cryptocurrency stats page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<SymbolSelector
				symList={fsym}
				setSymList={setFsym}
				hasMounted={hasMounted}
			/>
			<PlotAreaDynamic data={formatHourlyQueryData(queryData)} />
			<SymbolSelector
				symbol={tsym}
				setSymbol={setTsym}
				hasMounted={hasMounted}
			/>
		</Flex>
	);
}
