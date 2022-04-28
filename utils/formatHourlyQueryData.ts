interface Point {
	x: number;
	y: number;
}
export const formatHourlyQueryData = (data: any) => {
	let now = new Date().getTime();
	let formattedData = [];
	data.forEach((d) => {
		let points = [];

		d.Data.Data.forEach((dd) => {
			points.push({ x: dd.time - now, y: dd.close });
		});
		formattedData.push(points);
	});
	return formattedData;
};
