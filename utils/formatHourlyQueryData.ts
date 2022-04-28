interface Point {
	x: number;
	y: number;
}
export const formatHourlyQueryData = (data: any) => {
	let formattedData = [];
	data.forEach((d) => {
		let points = [];

		d.Data.Data.forEach((dd) => {
			points.push({ x: dd.time, y: dd.close });
		});
		formattedData.push(points);
	});
	return formattedData;
};
