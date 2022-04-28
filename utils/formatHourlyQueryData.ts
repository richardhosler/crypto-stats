export const formatHourlyQueryData = (data: any) => {
	let formattedData = [];
	data.forEach((d) => {
		let points = [];
		let st = BigInt(0);
		d.Data.Data.forEach((dd, key) => {
			key == 0 ? (st = BigInt(dd.time).valueOf()) : st;
			points.push({
				time: Number((BigInt(dd.time).valueOf() - st) / 3600n),
				y: Number(Math.floor(dd.close)),
			});
		});
		formattedData.push(points);
	});
	return formattedData;
};
