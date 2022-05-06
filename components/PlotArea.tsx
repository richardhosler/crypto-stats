import { useMemo } from "react";
import { VictoryAxis, VictoryChart, VictoryLine } from "victory";
import { formatHourlyQueryData } from "../utils/formatHourlyQueryData";
interface PlotAreaInterface {
	data: any;
	colours: string[];
}
const PlotArea = ({ data, colours }: PlotAreaInterface) => {
	const chartData = useMemo(() => {
		if (!data) return [];

		return formatHourlyQueryData(data);
	}, [data]);

	console.log({ chartData });

	return (
		<VictoryChart width={700} domainPadding={{ y: [20, 20] }}>
			<VictoryAxis
				label="Time"
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
			{chartData &&
				chartData.map((series, key) => (
					<VictoryLine
						key={key}
						style={{
							data: { stroke: "#c43a31" },
							parent: { border: "1px solid #ccc" },
						}}
						data={series}
						animate={{ duration: 500 }}
					/>
				))}
		</VictoryChart>
	);
};

export default PlotArea;
