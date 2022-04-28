import { useState, useEffect } from "react";
import Head from "next/head";
import { SymbolSelector } from "../components/SymbolSelector";
import { useHourlyQuery } from "../hooks/useHourly";

export default function Home() {
	const [fsym, setFsym] = useState(["BTC"]);
	const [tsym, setTsym] = useState("USD");
	const queryData = useHourlyQuery(fsym, tsym);

	const [hasMounted, setHasMounted] = useState(false);
	useEffect(() => {
		setHasMounted(true);
	}, []);

	useEffect(() => {
		queryData && console.log({ qd: queryData });
	}, [queryData]);

	return (
		<div>
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
			<SymbolSelector
				symbol={tsym}
				setSymbol={setTsym}
				hasMounted={hasMounted}
			/>
		</div>
	);
}
