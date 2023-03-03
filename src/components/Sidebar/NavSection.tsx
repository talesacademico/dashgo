import { Box, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionProps {
  name: string,
  children: ReactNode
}

export function NavSection({ name, children }: NavSectionProps) {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="small">
        {name}
      </Text>
      {children}
    </Box>
  )
}