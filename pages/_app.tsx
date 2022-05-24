import { QueryClientProvider, QueryClient } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";

// TODO: Focus on design soon

function MyApp({ Component, pageProps }) {
  const client = new QueryClient();
  return (
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
