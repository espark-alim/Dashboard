// Signup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signupSuccess } from '../store/slices/authSlice';
import { Button, Checkbox, Container, FormControl, FormLabel, Grid, GridItem, Heading, Input, Link, Text, VStack } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [singUpMessage, setSingUpMessage] = useState("");
  const navigate = useNavigate()
  const handleSignup = (event) => {
    event.preventDefault();
    const user = { username: username, password: password, isLoggedIn: true }; // Replace with actual user data
    dispatch(signupSuccess(user));
    if (user) {
      navigate('/accountCreated')
    }
    setUsername('')
    setPassword('')

  };

  return (
    <Container h={'100vh'}>
      <VStack
        w={"full"}
        h={"full"}
        p={10}
        spacing={10}
        align={"flex-start"}
        justifyContent={"center"}
      >
        <VStack alignItems={"flex-start"} mx={"auto"}>
          <VStack my={3} spacing={3} alignItems={"start"} textAlign={"left"}>
            <Heading>Sign Up</Heading>
            <Text>If you already have an account cllick here to log in</Text>
          </VStack>
          <form style={{ width: "100%" }} onSubmit={handleSignup} >
            <Grid w={"full"} columnGap={3} rowGap={5} >
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    placeholder="Enter Email"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    isRequired={true}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2}>
                <FormControl>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    isRequired={true}
                  />
                </FormControl>
              </GridItem>
              <GridItem colSpan={2} textAlign={"start"}>
                <FormControl>
                  <Checkbox>Check terms & condition</Checkbox>
                </FormControl>
              </GridItem>
              <GridItem colSpan={2} textAlign={"start"}>
                <Button mb={3} type="submit" w={"full"} size={"lg"} >
                  SignUp
                </Button>
                <Text my={5} color={"red"}>
                  {singUpMessage && <p>{singUpMessage}</p>}
                </Text>
                <Link href='/'>Click here to Login</Link>
              </GridItem>
            </Grid>
          </form>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Signup;
