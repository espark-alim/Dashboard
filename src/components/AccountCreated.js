import { Box, Heading, Link, VStack } from '@chakra-ui/react'
import React from 'react'
// import bg from "../../public/logo192.png"
const AccountCreated = () => {
    return (
        <>
            <Box
                display='flex'
                alignItems='center'
                justifyContent='center'
                width='100%'
                h={'100vh'}
                bgGradient='linear(to-r, pink.50, green.50, blue.50)'
                overflowY={'hidden'}
                bgPosition='center'
                bgRepeat='no-repeat'
                mb={2}
            >
                <VStack>
                    <Heading size={'lg'} fontSize={"4xl"} color={'red.500'}>Your Account is Created</Heading>
                    <Link href='/' size={'sm'} fontSize={"2xl"} color={'teal.500'}>Click here to Login..!</Link>
                </VStack>
            </Box>

        </>
    )
}

export default AccountCreated
