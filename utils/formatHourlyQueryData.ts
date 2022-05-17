interface FormattedDataInterface {
	time: number;
	open: number;
	close: number;
	high: number;
	low: number;
}
export const formatHourlyQueryData = (data: any) => {
	let formattedData: FormattedDataInterface[][] = [];
	data.map((d) => {
		let series: FormattedDataInterface[] = [];
		let st = BigInt(new Date().getTime());
		d.Data.Data.map((dd, key) => {
			key == 0 ? (st = BigInt(dd.time)) : st;
			series.push({
				time: Number((BigInt(dd.time) - st) / 3600n) - 24,
				open: dd.open,
				close: dd.close,
				high: dd.high,
				low: dd.low,
			});
		});
		formattedData.push(series);
	});
	return formattedData;
};
