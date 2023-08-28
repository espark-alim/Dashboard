import React from "react";
import { Box, Flex, Spacer, Heading, useColorMode, Button } from "@chakra-ui/react";

const Header = () => {

  return (
    <Flex
      p={4}
      bg="white"
      shadow="md"
      height="60px"
      position="sticky"
      top="0"
      zIndex={1}
    >
      <Flex >
        <Heading size="md">Admin Dashboard</Heading>
        <Spacer />
      </Flex>
    </Flex>
  );
};

export default Header;
