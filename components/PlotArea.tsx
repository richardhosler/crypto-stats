import { useMemo } from "react";
import { VictoryAxis, VictoryChart, VictoryLine } from "victory";
import { formatHourlyQueryData } from "../utils/formatHourlyQueryData";

const PlotArea = (data) => {
	const chartData = useMemo(() => {
		if (!data) return [];

		return formatHourlyQueryData(data.data);
	}, [data]);

	console.log({ chartData });

	return (
		<VictoryChart domainPadding={{ y: [20, 20] }} animate={{ duration: 500 }}>
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
					/>
				))}
		</VictoryChart>
	);
};

export default PlotArea;
