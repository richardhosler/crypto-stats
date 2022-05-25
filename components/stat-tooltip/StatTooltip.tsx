import { Box, Stack } from "@chakra-ui/react";

import { FormattedDataInterface } from "../../utils/formatHourlyQueryData";

interface StatTooltipInterface {
	data: FormattedDataInterface[];
	datum?: object;
}

export const StatTooltip = ({ data }: StatTooltipInterface) => {
	return (
		<svg viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
			<g>
				{data.map((d) => (
					<foreignObject
						x={d.time * 30 + 800}
						y={(d.close / 800) * -1 + 150}
						width="400"
						height="400"
					>
						<Stack style={{ fontSize: "10px" }}>
							<Box>
								<text>open : </text>
								{/* <text>{data[0].open}</text> */}
							</Box>
							<Box>
								<text>high : </text>
								{/* <text>{data[0].high}</text> */}
							</Box>
							<Box>
								<text>low : </text>
								{/* <text>{data[0].low}</text> */}
							</Box>
							<Box>
								<text>close : </text>
								{/* <text>{data[0].close}</text> */}
							</Box>
						</Stack>
					</foreignObject>
				))}
			</g>
		</svg>
	);
};
