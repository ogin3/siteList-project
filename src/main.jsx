import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// import './index.css'
import {
  ChakraProvider,
  Box,
  Button,
  Flex,
  Icon,
  Image,
  theme,
} from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
