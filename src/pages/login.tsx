import { Button, Flex, Stack } from "@chakra-ui/react";
import {Input} from "../components/From/input"

export default function SignIn() {
  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" w="100%" maxWidth="360" bg="gray.800"
        p="8" borderRadius="8" flexDir="column">
        <Stack spacing={4}>
         <Input name="Email" label="E-mail" type="email" />
         <Input name="password" label="Password" type="password" />
        </Stack>

        <Button colorScheme="pink" mt="6" size="lg">Entrar</Button>
      </Flex>
    </Flex>
  )
}
