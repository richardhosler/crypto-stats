import { ChevronDownIcon } from "@chakra-ui/icons";
import { useEffect, useRef, useState } from "react";
import { Flex, Image, Spacer, Stack, Text } from "@chakra-ui/react";

interface DropdownSelectorInterface {
	onChange: (option: number) => void;
	options: DropdownOptionInterface[];
}
interface DropdownOptionInterface {
	text: string;
	icon?: string;
}
export const DropdownSelector = ({
	onChange: callback,
	options,
}: DropdownSelectorInterface) => {
	const [dropVisibility, setDropVisibility] = useState(false);
	const [selectedOption, setSelectedOption] = useState(0);

	const hoverHandler = (e) => {
		e.currentTarget.style.backgroundColor = "lightgray";
	};
	const leaveHandler = (e) => {
		e.currentTarget.style.backgroundColor = "transparent";
	};

	const selectRef = useRef<HTMLDivElement>(null);
	const dropdownRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (dropdownRef.current) {
			dropdownRef.current.style.visibility = dropVisibility
				? "visible"
				: "hidden";
		}
	}, [dropVisibility]);

	return (
		<Stack>
			<Flex
				ref={selectRef}
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
				<Text paddingTop="1">{options[selectedOption].text} </Text>
				{options[selectedOption].icon && (
					<>
						<Spacer />
						<Image
							src={options[selectedOption].icon}
							width="20px"
							height="20px"
							position="relative"
							top="4px"
							alt={`icon for ${options[selectedOption].text}`}
						/>
					</>
				)}
				<Spacer />
				<ChevronDownIcon position="relative" top="6px" />
			</Flex>
			<Stack
				className="dropdown"
				ref={dropdownRef}
				style={{
					position: "absolute",
					top: `${selectRef.current?.getBoundingClientRect().bottom - 5}px`,
					left: `${selectRef.current?.getBoundingClientRect().left}px`,
					width: "100px",
					backgroundColor: "white",
					borderRadius: "5px",
					overflow: "hidden",
					// zIndex: "10",
					cursor: "pointer",
					boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
				}}
				spacing={0}
			>
				{options.map((option, index) => (
					<Flex
						padding="4px"
						paddingBottom="3px"
						key={index}
						onMouseEnter={hoverHandler}
						onMouseLeave={leaveHandler}
						onClick={() => {
							setSelectedOption(index);
							callback(index);
						}}
					>
						<Text>{option.text}</Text>
						{option.icon && (
							<>
								<Spacer />
								<Image
									src={option.icon}
									width="20px"
									height="20px"
									alt={`icon for ${option.text}`}
								/>
							</>
						)}
					</Flex>
				))}
			</Stack>
		</Stack>
	);
};
