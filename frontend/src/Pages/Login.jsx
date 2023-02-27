import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
} from '@chakra-ui/react';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Appcontext } from '../Context/Appcontext';

export default function Login() {

    const [user, setUser] = useState({});
    const navigate = useNavigate();
    const { handleLogin } = useContext(Appcontext);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <Flex
            minH={'100vh'}
            align={'center'}
            justify={'center'}
            bg={useColorModeValue('gray.50', 'gray.800')}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Login to your account</Heading>
                    <Text fontSize={'lg'} color={'gray.600'}>
                        Create New Account <Link href='/register' color={'blue.400'}>Register Here</Link>
                    </Text>
                </Stack>
                <form onSubmit={(e) => handleLogin(e, user)}>

                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input onChange={handleChange} name="email" type="email" />
                            </FormControl>
                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input onChange={handleChange} name="password" type="password" />
                            </FormControl>
                            <Stack spacing={10}>
                                <Stack
                                    direction={{ base: 'column', sm: 'row' }}
                                    align={'start'}
                                    justify={'space-between'}>
                                    <Checkbox>Remember me</Checkbox>
                                    <Link color={'blue.400'}>Forgot password?</Link>
                                </Stack>
                                <Button
                                    type="submit"
                                    bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bgImage: "linear-gradient(to right, #58aa50 ,#f09e06 )",
                                    }}
                                    bgImage={"linear-gradient(to right, #f09e06 , #fc490b )"}>
                                    Sign in
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </form>
            </Stack>
        </Flex>
    );
}