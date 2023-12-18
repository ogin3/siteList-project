import { Box, Center, Heading } from "@chakra-ui/react";
import React from "react";

import  { JsonData } from "./JsonData";

import sysData from "../jsons/sys.json";
function ListContent() {
  return (
    <>
      <Box h="95vh" backgroundColor="teal.900" p={2}>
        <Center>
          <Heading>タイトル</Heading>
        </Center>
        <Box backgroundColor="" h="50px" color="white" p="4">
          this is box
        </Box>
        <Box backgroundColor=".500" h="50px" color="white" p="4">
          this is box


          <JsonData sysData={sysData} />
        </Box>
      </Box>
    </>
  );
}

export default ListContent;
