import {
    Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  GridItem,
  HStack,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import React from "react";
function Test() {
  return (
    <Container maxW="container" px={20} >
      <Flex h={"100vh"} py={20}>
        <VStack w={"full"} h={"full"} p={10} spacing={10} align={"flex-start"} justifyContent={"center"} >
          <VStack alignItems={"flex-start"} mx={"auto"}>
          <VStack spacing={2} alignItems={"start"} textAlign={"left"}>
            <Heading>Your Detail</Heading>
            <Text>If you already have an account cllick here to log in</Text>
          </VStack>
          <SimpleGrid column={2} columnGap={4} rowGap={5}>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Enter FirstName" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="Enter FirstName" />
              </FormControl>
            </GridItem>

            <GridItem colSpan={2}>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Textarea placeholder="Enter your Address..." />
              </FormControl>
            </GridItem>

            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input placeholder="City" />
              </FormControl>
            </GridItem>
            <GridItem colSpan={1}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Select>
                  <option value={"Pakistan"}>Pakistan</option>
                </Select>
              </FormControl>
            </GridItem>

            <GridItem colSpan={2} textAlign={"start"}>
              <FormControl>
                <Checkbox>Ship to the billing address</Checkbox>
              </FormControl>
            </GridItem>
            <GridItem colSpan={2} textAlign={"start"}>
             <Button w={"full"} size={"lg"}>Place Items</Button>
            </GridItem> 
          </SimpleGrid>
          </VStack>
        </VStack>
        <VStack
          bg={"gray.200"}
          w={"full"}
          h={"full"}
          p={10}
          spacing={10}
          align={"flex-start"}
        ></VStack>
      </Flex>
    </Container>
  );
}
export default Test;
