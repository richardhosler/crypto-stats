import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Spacer, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { PlotType } from "../plot-area/PlotArea";
interface PlotSelectInterface {
	setPlot: (plot: PlotType) => void;
}
export const PlotSelect = ({ setPlot }: PlotSelectInterface) => {
	const [dropVisibilityPlot, setDropVisibilityPlot] = useState(false);

	const hoverHandler = (e) => {
		e.currentTarget.style.backgroundColor = "lightgray";
	};
	const leaveHandler = (e) => {
		e.currentTarget.style.backgroundColor = "transparent";
	};
	useEffect(() => {
		document.getElementById("dropdown").style.visibility = dropVisibilityPlot
			? "visible"
			: "hidden";
	}, [dropVisibilityPlot]);
	return (
		<Stack marginRight="2">
			<Flex
				style={{
					borderColor: "white",
					borderStyle: "solid",
					borderWidth: "1px",
					borderRadius: "5px",
					padding: "5px",
					width: "100px",
					cursor: "pointer",
					backgroundColor: "white",
				}}
				onClick={() => setDropVisibilityPlot(!dropVisibilityPlot)}
			>
				<Text paddingTop="1">Line</Text>
				<Spacer />
				<ChevronDownIcon position="relative" top="6px" />
			</Flex>
			<Stack
				id="dropdown"
				style={{
					position: "absolute",
					top: "50px",
					right: "115px",
					width: "100px",
					backgroundColor: "white",
					borderRadius: "5px",
					overflow: "hidden",
					zIndex: "10",
					cursor: "pointer",
					boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
				}}
			>
				<Flex
					paddingLeft="5px"
					paddingRight="5px"
					paddingTop="2px"
					onMouseEnter={hoverHandler}
					onMouseLeave={leaveHandler}
					onClick={() => {
						setDropVisibilityPlot(false);
						setPlot(PlotType.Line);
					}}
				>
					<Text>Line</Text>
				</Flex>
				<Flex
					paddingLeft="5px"
					paddingRight="5px"
					paddingTop="2px"
					onMouseEnter={hoverHandler}
					onMouseLeave={leaveHandler}
					onClick={() => {
						setDropVisibilityPlot(false);
						setPlot(PlotType.Candle);
					}}
				>
					<Text>Candle</Text>
				</Flex>
			</Stack>
		</Stack>
	);
};
