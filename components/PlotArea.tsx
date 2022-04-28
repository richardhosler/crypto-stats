import { VictoryBar, VictoryChart, VictoryLine } from "victory";

export const PlotArea = (data: any) => {
	if (!data) return null;

	return (
		<VictoryChart height={200}>
			<VictoryBar data={data[0]} />
		</VictoryChart>
	);
};
export default PlotArea;
