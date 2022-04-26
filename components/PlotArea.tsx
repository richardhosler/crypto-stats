import { XYPlot, LineSeries } from "react-vis";

export const PlotArea = (data: any) => {
	let formattedData = data.Data.Data;
	console.log(formattedData);

	return (
		<XYPlot width={600} height={300}>
			{/* <LineSeries data={formattedData} /> */}
		</XYPlot>
	);
};
