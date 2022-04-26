import { Box, Checkbox, Stack } from "@chakra-ui/react";

interface SymbolSelectorInterface {
  fsym: string[];
  setFsym: (fsym: string[]) => void;
  hasMounted: boolean;
}
const supportedSymbols = ["BTC", "ETH", "XRP", "LTC", "BCH", "EOS"];

export const SymbolSelector = ({
  fsym,
  setFsym,
  hasMounted,
}: SymbolSelectorInterface) => {
  const toggleSymbol = (symbol: string) => {
    if (fsym.includes(symbol)) {
      fsym = fsym.filter((s) => s !== symbol);
    } else {
      fsym.push(symbol);
    }
    setFsym([...fsym]);
  };

  const isChecked = (symbol: string) => {
    return fsym.includes(symbol);
  };

  if (!hasMounted) return null;
  return (
    <Box
      border="2px"
      borderColor="slateblue"
      width="32"
      padding="4"
      rounded="lg"
    >
      <Stack>
        {supportedSymbols.map((symbol, key) => (
          <Checkbox
            key={key}
            name={symbol}
            onChange={() => toggleSymbol(symbol)}
            isChecked={isChecked(symbol)}
          >
            {symbol}
          </Checkbox>
        ))}
      </Stack>
    </Box>
  );
};
