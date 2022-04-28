import {
	VictoryArea,
	VictoryAxis,
	VictoryBar,
	VictoryChart,
	VictoryLine,
	VictoryTheme,
} from "victory";

export const PlotArea = (data: any) => {
	if (!data) return null;

	return (
		<VictoryChart
			domainPadding={{ x: 20, y: [0, 20] }}
			animate={{ duration: 500 }}
		>
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
					grid: { stroke: "grey", strokeWidth: 1 },
					tickLabels: { fontSize: 5, padding: 5 },
				}}
			/>
			<VictoryLine
				style={{
					data: { stroke: "#c43a31" },
					parent: { border: "1px solid #ccc" },
				}}
				data={data[0]}
				x="time"
			/>
		</VictoryChart>
	);
};
export default PlotArea;
