import { Siderbar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import { Charts } from "./components/Charts";


export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Siderbar />

        <SimpleGrid flex="1" gap="4" minChildWidth="320px"
          alignItems="flex-start">
          <Charts />
          <Charts />
        </SimpleGrid>
      </Flex>

    </Flex>
  )
}