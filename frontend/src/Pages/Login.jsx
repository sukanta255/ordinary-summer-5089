import { Flex, Box, FormControl, FormLabel, Input, Checkbox, Stack, Link, Button, Heading, Text, InputGroup, InputRightElement, useToast, Spinner } from "@chakra-ui/react";
import { useState, useContext } from "react";
import { useFormik } from "formik";
import { LoginValidate } from "../components/LoginPage/Validator";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { MdErrorOutline } from "react-icons/md";
import { LoginAPI } from "../API/AuthRequests";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export default function Login() {
  const toast = useToast();
  const myNav = useNavigate();
  const { login } = useContext(AuthContext);

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

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

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: LoginValidate,
    onSubmit: async (values) => {
      const res = await LoginAPI(values);

      if (res.status === false) {
        setLoading(false);
        return customToast("red", res.error);
      }
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user);
      if (res.data.admin) {
        localStorage.setItem("admin", res.data.admin);
      } else {
        localStorage.removeItem("admin");
      }
      login(res.data.user, res.data.admin);
      customToast("green", "Login Success, Redirecting...");
      return setTimeout(() => {
        myNav("/products");
      }, 1000);
    },
  });

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"} bgColor={"gray.50"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Login to your account</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            Create New Account
            <Link ml={3} href="/register" color={"blue.400"}>
              Register Here
            </Link>
          </Text>
        </Stack>
        <form onSubmit={formik.handleSubmit}>
          <Box rounded={"lg"} bgColor={"white"} boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl>
                <FormLabel>Email address</FormLabel>
                <Input onChange={formik.handleChange} name="email" type="email" autoComplete="email" />
              </FormControl>
              {formik.errors.email ? (
                <Flex color={"red"} gap={2} alignItems={"center"}>
                  <MdErrorOutline />
                  <Text fontSize={"sm"} color={"red"}>
                    {formik.errors.email}
                  </Text>
                </Flex>
              ) : null}
              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input onChange={formik.handleChange} autoComplete="current-password" name="password" type={showPassword ? "text" : "password"} />
                  <InputRightElement>
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
              <Stack spacing={10}>
                <Stack direction={{ base: "column", sm: "row" }} align={"start"} justify={"space-between"}>
                  <Checkbox>Remember me</Checkbox>
                  <Link href="#" color={"blue.400"}>
                    Forgot password?
                  </Link>
                </Stack>
                <Button
                  type="submit"
                  size="lg"
                  bg={"blue.400"}
                  color={"white"}
                  transition={"700ms"}
                  _hover={{
                    bgColor: "black",
                  }}
                  isDisabled={loading}
                  bgColor={"blue.500"}
                >
                  {!loading ? "Login" : <Spinner />}
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}
