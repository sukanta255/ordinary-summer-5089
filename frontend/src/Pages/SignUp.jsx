import React from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { useFormik } from "formik";
import { MdErrorOutline } from "react-icons/md";
import { signUpAPI } from "../API/AuthRequests";
import { useNavigate } from "react-router-dom";
import { SignUpValidate } from "../components/LoginPage/Validator";

export default function SignUp() {
  const toast = useToast();
  const myNav = useNavigate();

  const customToast = (color, text) => {
    toast({
      position: "bottom-left",
      render: () => (
        <Box color="white" p={3} bg={`${color}.500`}>
          {text}
        </Box>
      ),
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showCPassword, setShowCPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      cpass: "",
    },
    validate: SignUpValidate,
    onSubmit: async (values) => {
      delete values.cpass;
      setLoading(true);
      const res = await signUpAPI(values);
      if (res.status === false) {
        setLoading(false);
        return customToast("red", res.error);
      }
      customToast("green", "Sign up Success, Redirecting...");
      setTimeout(() => {
        myNav("/login");
      }, 1000);
    },
  });
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bg={useColorModeValue("gray.50", "gray.800")}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool feature
          </Text>
        </Stack>
        <form onSubmit={formik.handleSubmit}>
          <Box rounded={"lg"} bg={useColorModeValue("white", "gray.700")} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input onChange={formik.handleChange} name="firstname" type="text" />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input onChange={formik.handleChange} name="lastname" type="text" />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl isRequired>
                <FormLabel>Email address</FormLabel>
                <Input onChange={formik.handleChange} name="email" autoComplete="email" type="text" />
              </FormControl>
              {formik.errors.email ? (
                <Flex color={"red"} gap={2} alignItems={"center"}>
                  <MdErrorOutline />
                  <Text fontSize={"sm"} color={"red"}>
                    {formik.errors.email}
                  </Text>
                </Flex>
              ) : null}

              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input onChange={formik.handleChange} autoComplete="new-password" name="password" type={showPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button variant={"ghost"} onClick={() => setShowPassword((showPassword) => !showPassword)}>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {formik.errors.password ? (
                <Flex color={"red"} gap={2} alignItems={"center"}>
                  <MdErrorOutline />
                  <Text fontSize={"sm"} color={"red"}>
                    {formik.errors.password}
                  </Text>
                </Flex>
              ) : null}

              <FormControl isRequired>
                <FormLabel>Confirm Password</FormLabel>
                <InputGroup>
                  <Input onChange={formik.handleChange} name="cpass" autoComplete="new-password" type={showCPassword ? "text" : "password"} />
                  <InputRightElement h={"full"}>
                    <Button variant={"ghost"} onClick={() => setShowCPassword((showCPassword) => !showCPassword)}>
                      {showCPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {formik.errors.cpass ? (
                <Flex color={"red"} gap={2} alignItems={"center"}>
                  <MdErrorOutline />
                  <Text fontSize={"sm"} color={"red"}>
                    {formik.errors.cpass}
                  </Text>
                </Flex>
              ) : null}

              <Stack spacing={10} pt={2}>
                <Button
                  type="submit"
                  loadingText="Submitting"
                  size="lg"
                  isDisabled={loading}
                  bg={"blue.400"}
                  color={"white"}
                  transition={"700ms"}
                  _hover={{
                    bgColor: "black",
                  }}
                  bgColor={"blue.500"}
                >
                  {!loading ? "Sign up" : <Spinner />}
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={"center"}>
                  Already a user?{" "}
                  <Link href="login" color={"blue.400"}>
                    Login
                  </Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}
