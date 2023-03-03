import { Pagination } from "@/components/Pagination";
import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Td, Th, Thead, Tr, Text, Tbody, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

export function ListUsers() {

  const isWideVersion= useBreakpointValue({
    base: true,
    lg: false
  })

  const users = [
    { name: 'Tales Félix', email: 'itals@dashgo.com', created_at: '22 de abril de 2022' },
    { name: 'Tales Félix', email: 'itals@dashgo.com', created_at: '22 de abril de 2022' },
    { name: 'Tales Félix', email: 'itals@dashgo.com', created_at: '22 de abril de 2022' },
  ]

  return (
    <>
      <Flex mb="8" justify="space-between" align="cebter">
        <Heading size="lg" fontWeight="normal">Usuários</Heading>
        <Link href="/users/created">
        <Button as="a" size="sm" fontFamily="pink" colorScheme="pink"
          leftIcon={<Icon as={RiAddLine} />} fontSize="16" >
          Criar novo</Button>
        </Link>
      </Flex>
      <Table colorScheme="whiteAlpha">
        <Thead>
          <Tr px="6">

            <Th px={["4", "4", "4", ]} color="gray.300" width="8">
              <Checkbox colorScheme="pink" />
            </Th>
            <Th>Usuários</Th>
            {!isWideVersion && <Th>Data de Cadastro</Th>}
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => {
            return (
              <Tr key={index}>
                <Td px={["4", "4", "4", ]}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">{user.name}</Text>
                    <Text fontSize="sm" color="gray.300">{user.email}</Text>
                  </Box>
                </Td>
                {!isWideVersion && <Td>{user.created_at}</Td>}
                <Td >
                  <Button as="a" size="xs" fontFamily="pink" colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="14" />}>{!isWideVersion && 'Editar'}</Button>
                </Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
      <Pagination />
    </>
  )
}