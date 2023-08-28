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
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginSuccess
} from "../src/store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const { isLoggedIn } = useSelector((state) => state.auth)
  console.log(isLoggedIn, "auth");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect(() => {
  //   const isLoggedIn = localStorage.getItem("isLoggedIn");
  //   // if (JSON.parse(isLoggedIn)) {
  //   //   // navigate to dashboard
  //   // }
  // }, [])

  const handleLogin = (event) => {
    // Simulate API call for login
    event.preventDefault();

    // const user = auth.user.filter((user) => user.username === username);
    // console.log("user found", user);
    // dispatch(loginSuccess(user));
    const savedUsers = localStorage.getItem("users");
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (savedUsers) {
      const users = JSON.parse(savedUsers);
      const user = users.filter((user) => user.username === username);

      // if (user.username !== username) {
      //   setErrorMessage("User not found. Please sign up.");
      // } else if (user.username === username && user.password !== password) {
      //   setErrorMessage("Password incorrect.");
      // } else if (user.username === username && user.password === password) {
      dispatch(loginSuccess(user));
      setErrorMessage("");
      isLoggedIn && navigate('/layOuts')
      // }
    }
    else {
      setErrorMessage("No user found. Please sign up.");
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
                <Link href="/Signup">clink here to SignUp</Link>
              </GridItem>
            </Grid>
          </form>
        </VStack>
      </VStack>
    </Container>

  );
};

export default Login;
