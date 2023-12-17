import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

function TopHeader() {
  return (
    <>
      <Box bg="gray.400" w="100vw" h="5vh">
        <Center>
          <Heading>タイトル</Heading>
        </Center>
      </Box>
    </>
  );
}

export default TopHeader;
