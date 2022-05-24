import { Flex, Text, Box, Select, Spacer } from "@chakra-ui/react";

import { PlotType } from "../plot-area/PlotArea";

interface HeaderInterface {
  setPlot: (plot: PlotType) => void;
}

export const Header = ({ setPlot }: HeaderInterface) => {
  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    switch (event.currentTarget.selectedIndex) {
      case 1:
        setPlot(PlotType.Bar);
        break;

      case 2:
        setPlot(PlotType.Candle);
        break;

      default:
        setPlot(PlotType.Line);
        break;
    }
  };

  return (
    <Flex backgroundColor="orange" p={2}>
      <Box>
        <Text fontSize="3xl" color="white">
          Crypto Stats
        </Text>
      </Box>
      <Spacer />
      <Box>
        <Select onChange={handleChange}>
          <option value={0}>line</option>
          <option value={1}>bar</option>
          <option value={2}>candle</option>
        </Select>
      </Box>
    </Flex>
  );
};
