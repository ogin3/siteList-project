// import { useState } from "react";
// import "./App.css";
import { Box, Stack, Flex } from "@chakra-ui/react";
import TopHeader from "./components/TopHeader";
import SideMenu from "./components/SideMenu";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <TopHeader />
      <Flex w="100vw">
        <Box w="100vw" h="100wh">
          <Flex>
            <SideMenu />
            <Box w="70vw">
              {/* サイドメニューアイコンをクリックするとここが切り替わる */}
            </Box>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}

export default App;
