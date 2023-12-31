import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

const SideMenu = () => {
  return (
    <>
      <Box backgroundColor="telegram.900" h="95vh">
        <Center>
          <Heading>タイトル</Heading>
        </Center>
        <Box backgroundColor="orange" h="50px" color="white" p="4">
          this is box
        </Box>
        <Box backgroundColor="orange.500" h="50px" color="white" p="4">
          this is box
        </Box>
      </Box>
    </>
  );
};

export default SideMenu;
