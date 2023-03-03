import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center" >
      {showProfileData &&
        <Box>
          <Text mr="4" textAlign="right">Tales Félix</Text>
          <Text color="gray.300" fontSize="small">itals@dashgo.com</Text>
        </Box>
      }
      <Avatar ml="2" size="md" name="Tales Félix" src="https://avatars.githubusercontent.com/u/94459016?s=96&v=4" />
    </Flex>
  )
}