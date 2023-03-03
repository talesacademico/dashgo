import { Stack, Text, Icon, Link as ChakraLink, LinkProps as ChakraLinkProps } from "@chakra-ui/react"
import { IconType } from "react-icons/lib"
import { AticveLink } from "./ActiveLink"

interface NavLinkProps extends ChakraLinkProps {
  items: Array<LinkProps>
}
interface LinkProps {
  icon: IconType,
  item: string,
  href: string
}

export function NavLink({ items, ...rest }: NavLinkProps) {
  return (
    <Stack spacing="4" mt="8" align="stretch">
      {items.map((item, index) => {
        return (
          <AticveLink href={item.href} key={index} legacyBehavior>
              <ChakraLink display="flex" alignItems="center" {...rest}>
                <Icon as={item.icon} fontSize="20" />
                <Text ml="4" fontWeight="medium">{item.item}</Text>
              </ChakraLink>
          </AticveLink>
        )
      })}
    </Stack>
  )
}