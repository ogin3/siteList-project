// import Data from "../jsons/sys.json"; // これを追加する

import { useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from '@chakra-ui/react'

// const jsonObject = JSON.stringify(Data)



export const JsonData = (Data) => {
  // console.log(Data)
  const [jdatas, setJdata] = useState(Data);
  // const getjData = () => setJdata(jsonObject)
// console.log(jdatas.sysData.postLists)
  return (
    // No,status,cmp,site,guest,admin,staff,test,ip,uid,contractid,price,remarks
    <>
      <Box>
      <Table>
        <Thead>
          <Tr>
            <Th>No.</Th>
            <Th>Status</Th>
            <Th>会社</Th>
            <Th>サイト名</Th>
            <Th>ゲスト</Th>
            <Th>管理</Th>
            <Th>スタッフ</Th>
            <Th>テストアカウント</Th>
            <Th>WEB IP</Th>
            <Th>UserId</Th>
            <Th>契約No</Th>
            <Th>価格</Th>
            <Th>備考</Th>
          </Tr>
        </Thead>
        <Tbody>
            <Tr>
              <Td>1.</Td>
              <Td>×</Td>
              <Td>マスター</Td>
              <Td>サイト名１</Td>
              <Td>https://yahoo.co.jp</Td>
              <Td>https://google.com</Td>
              <Td>https://yahoo.co.jp</Td>
              <Td>https://www.msn.com/ja-jp</Td>
              <Td>192.168.0.1</Td>
              <Td>123</Td>
              <Td>5489</Td>
              <Td>145$</Td>
              <Td>一旦停止してます</Td>
            </Tr>


        {jdatas.sysData.postLists.map((jdata) =>
            <Tr  key={jdata.id}>
              <Td>{jdata.id}</Td>
              <Td>{jdata.status}</Td>
              <Td>{jdata.cmp}</Td>
              <Td>{jdata.site}</Td>
              <Td>{jdata.guest}</Td>
              <Td>{jdata.admin}</Td>
              <Td>{jdata.staff}</Td>
              <Td>{jdata.test}</Td>
              <Td>{jdata.ip}</Td>
              <Td>{jdata.uid}</Td>
              <Td>{jdata.contractid}</Td>
              <Td>{jdata.price}</Td>
              <Td>{jdata.remarks}</Td>
            </Tr>


        )}



</Tbody>

</Table>

</Box>

    </>
  )
  // return (jdatas, setJdata);








}



export default JsonData;
