import { Checkbox, Flex, Image, Spacer, Stack } from "@chakra-ui/react";
import { getSvgIcon } from "../../utils/getSymbolIcon";

interface SymbolSelectorInterface {
  props?: any;
  setSymbol?: (symbol: string) => void;
  setSymList?: (symbols: string[]) => void;
  supportedSymbols: string[];
  symbol?: string;
  symList?: string[];
}

export const SymbolSelector = ({
  props,
  setSymbol,
  setSymList,
  supportedSymbols,
  symbol,
  symList: symbolList,
}: SymbolSelectorInterface) => {
  const toggleSymbol = (symbol: string): void => {
    if (symbolList) {
      if (symbolList.includes(symbol)) {
        symbolList = symbolList.filter(
          (filterSymbol) => filterSymbol !== symbol
        );
      } else if (symbolList.length < 5) {
        symbolList.push(symbol);
      } else {
        //TODO: show error toast
      }
      setSymList([...symbolList]);
    } else {
      setSymbol(symbol);
    }
  };

  const isChecked = (symbol: string): boolean => {
    if (symbolList) {
      return symbolList.includes(symbol);
    }

    return symbol === symbol;
  };

  return (
    <Stack
      border="2px"
      borderColor="slateblue"
      overflow="auto"
      padding="4"
      rounded="lg"
      width="32"
      {...props} // TODO: Remove props in favour of direct props
    >
      {supportedSymbols?.map((symbol, key) => (
        <Flex key={key}>
          <Checkbox
            name={symbol}
            onChange={() => toggleSymbol(symbol)}
            isChecked={isChecked(symbol)}
          >
            {symbol}
          </Checkbox>
          <Spacer />
          <Image
            width="20px"
            height="20px"
            src={getSvgIcon(symbol)}
            alt={`icon for ${symbol}`}
          />
        </Flex>
      ))}
    </Stack>
  );
};
