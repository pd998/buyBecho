import React from "react";
import { render } from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import Route from "./Route";
import { AuthProvider } from "./context/AuthContext";

const theme = extendTheme({
  fonts: {
    body: "Lato, serif",
    heading: "Lato, serif",
    mono: "Menlo, monospace",
  },
});

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <BrowserRouter>
          <Route />
        </BrowserRouter>
      </AuthProvider>
    </ChakraProvider>
  );
};

render(<App />, document.getElementById("root"));
