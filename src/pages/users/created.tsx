import { Input } from "@/components/From/input";
import { Siderbar } from "@/components/Sidebar";
import { Header } from "@/components/Header";
import { Box, Divider, Flex, Heading, HStack, SimpleGrid, VStack, Button } from "@chakra-ui/react";
import Link from "next/link";

export default function UserList() {
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">

        <Siderbar />

        <Box flex="1" borderRadius="8" bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>
          <Divider my="6" borderColor="gray.700"/>

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome Completo" />
              <Input name="email" label="E-mail" />
            </SimpleGrid>

            <SimpleGrid minChildWidth="240px" p={["6", "8"]} w="100%">
              <Input name="password" label="Senha" />
              <Input name="password_confirmation" label="Confirmação da senha" />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
            <Link href="/users">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              </Link>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
          
        </Box>
     
      </Flex>
    </Box>
  )
}