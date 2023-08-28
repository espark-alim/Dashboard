import { Center, Flex, Icon, Link, Menu, MenuButton, Text } from '@chakra-ui/react'
import React from 'react'

const NavItem = ({ navSize, icon, title }) => {
    return (
        <Flex
            mt={30}
            flexDirection={"column"}
            width={"100%"}
        // alignItems={navSize ? "center" : "flex-start"}
        >
            <Menu>
                {title &&
                    <Link
                        backgroundColor={"#AEC8CA"}
                        p={3}
                        borderRadius={8}
                        _hover={{ textDecoration: "none", backgroundColor: "#82AAAD" }}
                        width={!navSize && "100%"}
                        _active={{ backgroundColor: "#82AAAD" }}
                        textAlign={navSize ? "center" : "flex-start"}
                        alignItems={'center'}
                        justifyContent={'center'}

                    >
                        <MenuButton  >
                            <Flex alignItems={"center"} >
                                {icon && <Icon
                                    as={icon}
                                    fontSize={'xl'}
                                    textAlign={'start'}
                                />}
                                {title &&
                                    <Text
                                        display={navSize ? "none" : "flex"}
                                        pl={3}
                                    >
                                        {title}
                                    </Text>}

                            </Flex>
                        </MenuButton>
                    </Link>}
            </Menu>
        </Flex >
    )
}

export default NavItem

