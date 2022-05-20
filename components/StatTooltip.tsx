import { Stack } from "@chakra-ui/react";
import { FormattedDataInterface } from "../utils/formatHourlyQueryData";
interface StatTooltipInterface {
	data: FormattedDataInterface;
}
export const StatTooltip = ({ data }: StatTooltipInterface) => {
	return (
		<svg viewBox="0 -50 700 200" xmlns="http://www.w3.org/2000/svg">
			<g>
				<foreignObject x="0" y="0" width="100" height="100">
					<Stack>
						<Stack>
							<text>open</text>
							<text>{data.open}</text>
						</Stack>
						<Stack>
							<text>high</text>
							<text>{data.high}</text>
						</Stack>
						<Stack>
							<text>low</text>
							<text>{data.low}</text>
						</Stack>
						<Stack>
							<text>close</text>
							<text>{data.close}</text>
						</Stack>
					</Stack>
				</foreignObject>
			</g>
		</svg>
	);
};
