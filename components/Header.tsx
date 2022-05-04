import { Flex, Text, Box } from "@chakra-ui/react";

export const Header = () => {
	return (
		<Flex backgroundColor="orange" p={2}>
			<Box>
				<Text fontSize="3xl" color="white">
					Crypto Stats
				</Text>
			</Box>
		</Flex>
	);
};
