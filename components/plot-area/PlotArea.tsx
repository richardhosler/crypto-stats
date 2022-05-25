import { useMemo } from "react";
import {
	VictoryAxis,
	VictoryCandlestick,
	VictoryChart,
	VictoryLine,
	VictoryTooltip,
	VictoryVoronoiContainer,
} from "victory";

import { formatHourlyQueryData } from "../../utils/formatHourlyQueryData";
import { StatTooltip } from "../stat-tooltip/StatTooltip";

interface PlotAreaInterface {
	data: any;
	colours: string[];
	type?: PlotType;
}

export enum PlotType {
	Line,
	Bar,
	Candle,
}
export const PlotArea = ({
	data,
	colours,
	type = PlotType.Candle,
}: PlotAreaInterface) => {
	const chartData = useMemo(() => {
		if (!data) {
			return [];
		}
		return formatHourlyQueryData(data);
	}, [data]);
	const axisStyle = {
		axis: { stroke: "black" },
		axisLabel: { fontSize: 12, padding: 30 },
		grid: { stroke: "grey", strokeWidth: 1 },
		tickLabels: { fontSize: 5, padding: 5 },
	};
	return (
		<VictoryChart
			containerComponent={<VictoryVoronoiContainer voronoiPadding={1} />}
			domainPadding={{ y: [20, 20] }}
			scale={{ x: "time", y: "linear" }}
			width={550}
			height={280}
			padding={{ left: 80, right: 50, top: 20, bottom: 80 }}
		>
			<VictoryAxis
				label="Hours"
				tickValues={[-24, -20, -16, -12, -8, -4, 0]}
				style={axisStyle}
			/>
			<VictoryAxis dependentAxis label="Price" style={axisStyle} />

			{type === PlotType.Line &&
				chartData?.map((series, key) => (
					<VictoryLine
						key={key}
						style={{
							data: { stroke: `${colours[key]}` },
							labels: { fill: `${colours[key]}` },
							parent: { border: "1px solid #ccc" },
						}}
						data={series}
						x="time"
						y="close"
						labels={({ datum }) =>
							`open : ${datum.open}\nhigh : ${datum.high}\nlow : ${datum.low}\nclose : ${datum.close}`
						}
						labelComponent={
							<VictoryTooltip
								cornerRadius={2}
								style={{
									fontSize: "10px",
								}}
							/>
						}
					/>
				))}
			{type === PlotType.Candle &&
				chartData?.map((series, key) => (
					<VictoryCandlestick
						key={key}
						data={series}
						x="time"
						candleRatio={0.4}
						candleColors={{ positive: "#5f995b", negative: "#c43a31" }}
						labels={({ datum }) =>
							`open : ${datum.open}\nhigh : ${datum.high}\nlow : ${datum.low}\nclose : ${datum.close}`
						}
						// labelComponent={<StatTooltip data={series} />}
						labelComponent={
							<VictoryTooltip
								cornerRadius={2}
								style={{
									fontSize: "10px",
								}}
							/>
						}
					/>
				))}
		</VictoryChart>
	);
};
