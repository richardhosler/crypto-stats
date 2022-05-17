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
			containerComponent={<VictoryVoronoiContainer />}
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
						animate={{ duration: 500 }}
						labels={({ datum }) => datum.close}
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
						labels={({ datum }) =>
							`o:${datum.open}\nh:${datum.high}\nl:${datum.low}\nc:${datum.close}`
						}
						labelComponent={<VictoryTooltip />}
					/>
				))}
		</VictoryChart>
	);
};

export default PlotArea;
