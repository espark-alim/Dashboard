// Login.js
import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Link,
  Text,
  VStack
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginSuccess
} from "../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { user, isLoggedIn } = useSelector((state) => state.auth)
  const handleLogin = (event) => {
    event.preventDefault();
    const chkUser = user.filter((user) => user.username === username && user.password === password);
    if (chkUser.length > 0) {
      dispatch(loginSuccess(chkUser));
      navigate('/layouts');
    } else {
      setErrorMessage("User not found. Please sign up.")
    }

  };

  return (
    <Container h={"100vh"}>
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
            <Heading>Login</Heading>
            <Text>If you already have an account cllick here to log in</Text>
          </VStack>
          <form style={{ width: "100%" }} onSubmit={handleLogin} action="#">
            <Grid w={"full"} columnGap={3} rowGap={5}>
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
                    type="text"
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
                <Button type="submit" w={"full"} size={"lg"}>
                  Login
                </Button>
                <Text my={5} color={"red"}>
                  {errorMessage && <p>{errorMessage}</p>}
                </Text>
                <Link href="/Signup">Click here to SignUp</Link>
              </GridItem>
            </Grid>
          </form>
        </VStack>
      </VStack>
    </Container>

  );
};

export default Login;
