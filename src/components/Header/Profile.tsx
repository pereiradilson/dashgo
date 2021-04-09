import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Adilson Pereira</Text>
          <Text color="gray.300" fontSize="small">
            adilson@adilsonpereira.com.br
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Adilson Pereira"
        src="https://github.com/pereiradilson.png"
      />
    </Flex>
  );
}
