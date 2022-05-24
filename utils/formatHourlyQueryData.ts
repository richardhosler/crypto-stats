export interface FormattedDataInterface {
  close: number;
  high: number;
  low: number;
  open: number;
  time: number;
}
export const formatHourlyQueryData = (
  data: any
): FormattedDataInterface[][] => {
  let formattedData: FormattedDataInterface[][] = [];

  // TODO: https://transform.tools/json-to-typescript
  data.map((d: { Data: { Data: any[] } }) => {
    let series: FormattedDataInterface[] = [];
    let st = BigInt(new Date().getTime()); // TODO: Try to avoid shorthand notation

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

// export interface Root {
// 	Response: string
// 	Message: string
// 	HasWarning: boolean
// 	Type: number
// 	RateLimit: RateLimit
// 	Data: Data
//   }

//   export interface RateLimit {}

//   export interface Data {
// 	Aggregated: boolean
// 	TimeFrom: number
// 	TimeTo: number
// 	Data: Daum[]
//   }

//   export interface Daum {
// 	time: number
// 	high: number
// 	low: number
// 	open: number
// 	volumefrom: number
// 	volumeto: number
// 	close: number
// 	conversionType: string
// 	conversionSymbol: string
//   }
