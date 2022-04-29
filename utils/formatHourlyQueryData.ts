export const formatHourlyQueryData = (data: any) => {
  let formattedData: { x: number; y: number }[][] = [];
  data.forEach((d) => {
    let points = [];
    let st = BigInt(new Date().getTime());
    d.Data.Data.forEach((dd, key) => {
      key == 0 ? (st = BigInt(dd.time).valueOf()) : st;
      points.push({
        x: Number((BigInt(dd.time).valueOf() - st) / 3600n),
        y: Number(Math.floor(dd.close)),
      });
    });
    formattedData.push(points);
  });

  return formattedData;
};
