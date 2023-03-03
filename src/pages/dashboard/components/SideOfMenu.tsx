import { Button, Drawer, DrawerContent, Flex, MenuItem, MenuList, Portal, useDisclosure } from "@chakra-ui/react"
import React from "react"

export function SideOfMenu() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Flex>
      <Button colorScheme='pink' onClick={onOpen}>
        Open
      </Button>

      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}

      >
        <DrawerContent>

        </DrawerContent>
      </Drawer>
    </Flex>
  )
}