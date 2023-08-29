import React from "react";
import { Box, Flex, Spacer, Heading, useColorMode, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { logout } from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Header = ({ Titl }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const handleLogout = () => {
    dispatch(logout());
    navigate('/')
  };
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
      <Flex alignItems={'center'} w={'full'} justifyContent={'space-between'}>
        <Heading size="md">Admin Dashboard</Heading>
        <Spacer />
        <Button colorScheme='teal' onClick={handleLogout} >Logout</Button>
      </Flex>
    </Flex>
  );
};

export default Header;
