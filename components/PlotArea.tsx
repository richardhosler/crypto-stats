import { VictoryAxis, VictoryChart, VictoryLine } from "victory";

const PlotArea = (data) => {
	if (!data) return null;
	console.log(data);

	return (
		<VictoryChart
			domain={{ x: [-0.5, 12.5] }}
			domainPadding={{ y: [50, 50] }}
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
					tickLabels: { fontSize: 5, padding: 5 },
				}}
			/>
			{data[0] && (
				<VictoryLine
					style={{
						data: { stroke: "#c43a31" },
						parent: { border: "1px solid #ccc" },
					}}
					data={data[0]}
				/>
			)}
		</VictoryChart>
	);
};
export default PlotArea;
