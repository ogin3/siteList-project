
// import { useState } from "react";
// import "./App.css";
import { Box, Stack, Flex } from "@chakra-ui/react";
import TopHeader from "./components/TopHeader";
import SideMenu from "./components/SideMenu";
import ListContent from "./components/ListContent";


// export const useAllUser = () => {
//     const [users, setUsers] = useState([])
//     const getUsers = () => setUsers(Data)
//     return { users, getUsers }
// }





function App() {
  // const [count, setCount] = useState(0);
  
  return (
    <>
      <TopHeader />
      <Flex>
        <Box w="100vw" h="100wh">
          <Flex w="100vw">
            <Box w="20vw">
              <SideMenu />
            </Box>
            <Box w="80vw">
              <ListContent />
            </Box>
          </Flex>
        </Box>
      </Flex>

    </>
  );
}

export default App;
