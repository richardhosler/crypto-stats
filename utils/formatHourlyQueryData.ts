import { Root } from "../hooks/useHourlyQuery";

export interface FormattedDataInterface {
	close: number;
	high: number;
	low: number;
	open: number;
	time: number;
}
export const formatHourlyQueryData = (
	roots: Root[]
): FormattedDataInterface[][] => {
	let formattedData: FormattedDataInterface[][] = [];

	roots.map((d: Root) => {
		let series: FormattedDataInterface[] = [];
		let startTime = BigInt(new Date().getTime());

		d.Data.Data.map((dd, key) => {
			key == 0 ? (startTime = BigInt(dd.time)) : startTime;
			series.push({
				time: Number((BigInt(dd.time) - startTime) / 3600n) - 24,
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

// export interface

//   export
