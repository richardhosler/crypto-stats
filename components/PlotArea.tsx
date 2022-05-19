import { useMemo } from "react";
import {
	VictoryAxis,
	VictoryCandlestick,
	VictoryChart,
	VictoryLine,
	VictoryTooltip,
	VictoryVoronoiContainer,
} from "victory";
import { formatHourlyQueryData } from "../utils/formatHourlyQueryData";
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
const PlotArea = ({
	data,
	colours,
	type = PlotType.Candle,
}: PlotAreaInterface) => {
	const chartData = useMemo(() => {
		if (!data) return [];

		return formatHourlyQueryData(data);
	}, [data]);

	console.log({ chartData });

	return (
		<VictoryChart
			width={700}
			domainPadding={{ y: [20, 20] }}
			containerComponent={<VictoryVoronoiContainer voronoiPadding={1} />}
		>
			<VictoryAxis
				label="Hours"
				tickValues={[-24, -20, -16, -12, -8, -4, 0]}
				style={{
					axis: { stroke: "black" },
					axisLabel: { fontSize: 12, padding: 30 },
					grid: { stroke: "grey", strokeWidth: 1 },
					tickLabels: { fontSize: 5, padding: 5 },
				}}
			/>
			<VictoryAxis
				dependentAxis
				label="Price"
				style={{
					axis: { stroke: "black" },
					axisLabel: { fontSize: 12, padding: 30 },
					tickLabels: { fontSize: 5, padding: 5 },
				}}
			/>

			{type === PlotType.Line &&
				chartData &&
				chartData.map((series, key) => (
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
							`open: ${datum.open}\nhigh: ${datum.high}\nlow: ${datum.low}\nclose: ${datum.close}`
						}
						labelComponent={<VictoryTooltip />}
					/>
				))}
			{type === PlotType.Candle &&
				chartData &&
				chartData.map((series, key) => (
					<VictoryCandlestick
						key={key}
						data={series}
						x="time"
						candleRatio={0.4}
						candleColors={{ positive: "#5f995b", negative: "#c43a31" }}
						labels={({ datum }) =>
							`open: ${datum.open}\nhigh: ${datum.high}\nlow: ${datum.low}\nclose: ${datum.close}`
						}
						labelComponent={<VictoryTooltip />}
					/>
				))}
		</VictoryChart>
	);
};

export default PlotArea;
