import {Avatar, Box, Flex, Text} from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({showProfileData = true}: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Maurício Martins</Text>
          <Text color="gray.300" fontSize="small">
            maur.martins32@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Mauricio Martins"
        src="https://github.com/maur32.png"
      />
    </Flex>
  );
}
