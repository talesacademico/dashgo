import { Siderbar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Box, Flex } from "@chakra-ui/react";
import { ListUsers } from "./components/ListUsers";


export default function UserList() {
  return (
    <Box>
      <Header />
        <Flex w="100%" my="6" maxWidth={1480} mx="auto" px={["1", "6"]}>

        <Siderbar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">

        <ListUsers/>
        
        </Box>
     
      </Flex>
    </Box>
  )
}