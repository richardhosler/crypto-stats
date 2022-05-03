export const formatHourlyQueryData = (data: any) => {
	let formattedData: { x: number; y: number }[][] = [];
	data.forEach((d) => {
		let points = [];
		let st = BigInt(new Date().getTime());
		d.Data.Data.map((dd, key) => {
			key == 0 ? (st = BigInt(dd.time)) : st;
			points.push({
				x: Number((BigInt(dd.time) - st) / 3600n),
				y: dd.close,
			});
		});
		formattedData.push(points);
	});
	return formattedData;
};
