import { ChevronDownIcon } from "@chakra-ui/icons";
import { Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface CurrencySelectInterface {
	setTsym: (tsym: string) => void;
	tsym: string;
}
export const CurrencySelect = ({ setTsym, tsym }: CurrencySelectInterface) => {
	const [dropVisibility, setDropVisibility] = useState(false);

	const hoverHandler = (e) => {
		e.currentTarget.style.backgroundColor = "lightgray";
	};
	const leaveHandler = (e) => {
		e.currentTarget.style.backgroundColor = "transparent";
	};
	useEffect(() => {
		document.getElementById("dropdown").style.visibility = dropVisibility
			? "visible"
			: "hidden";
	}, [dropVisibility]);
	return (
		<Stack>
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
				onClick={() => setDropVisibility(!dropVisibility)}
			>
				<Text paddingTop="1">{tsym} </Text>
				<Spacer />
				<Image
					src={`/icons/${tsym.toLowerCase()}.svg`}
					width="20px"
					height="20px"
					position="relative"
					top="4px"
					alt={`icon for ${tsym}`}
				/>
				<Spacer />
				<ChevronDownIcon position="relative" top="6px" />
			</Flex>
			<Stack
				id="dropdown"
				style={{
					position: "absolute",
					top: "50px",
					right: "15px",
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
						setTsym("USD");
						setDropVisibility(false);
					}}
				>
					<Text>USD</Text>
					<Spacer />
					<Image
						src="/icons/usd.svg"
						width="20px"
						height="20px"
						alt="icon for USD"
					/>
				</Flex>
				<Flex
					paddingLeft="5px"
					paddingRight="5px"
					onMouseEnter={hoverHandler}
					onMouseLeave={leaveHandler}
					onClick={() => {
						setTsym("EUR");
						setDropVisibility(false);
					}}
				>
					<Text>EUR</Text>
					<Spacer />
					<Image
						src="/icons/eur.svg"
						width="20px"
						height="20px"
						alt="icon for EUR"
					/>
				</Flex>
				<Flex
					paddingLeft="5px"
					paddingRight="5px"
					onMouseEnter={hoverHandler}
					onMouseLeave={leaveHandler}
					onClick={() => {
						setTsym("GBP");
						setDropVisibility(false);
					}}
				>
					<Text>GBP</Text>
					<Spacer />
					<Image
						src="/icons/gbp.svg"
						width="20px"
						height="20px"
						alt="icon for GBP"
					/>
				</Flex>
			</Stack>
		</Stack>
	);
};
