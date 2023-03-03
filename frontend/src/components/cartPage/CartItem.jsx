import { CheckCircleIcon, SmallCloseIcon } from '@chakra-ui/icons'
import { Flex, Image, Text, Box, Circle, Heading, useToast } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteToCart } from '../../Redux/cart/cart.action'

const CartItem = ({ image, brandName, price, _id }) => {
    const toast = useToast()
    console.log(_id)
    console.log(brandName);
    const dispatch = useDispatch();
    const handleDelete = (_id) => {
        toast({
            position: 'top-left',
            duration: 1200,
            render: () => (
                <Flex color='white' border="4px solid white" p={"10px"} bgColor='green.400'>

                    <CheckCircleIcon w={30} h={30} /><Text size="lg" ml="15px">{`${brandName} has been deleted!!!`}</Text>
                </Flex >

            ),
        })

        dispatch(deleteToCart(_id))

    }
    return (
        <Flex w="100%" justify="space-between" p="20px" borderBottom="1px solid gainsboro">
            <Image display="block" src={image} w="100px" />
            <Box w="50%">
                <Text fontSize={"20px"} mb="20px">{brandName}</Text>
                {/* <Text fontSize={"15px"} mb="20px">{`Brand: ${brand}`}</Text> */}

                <Heading size="md">{`$${price}`}</Heading>
            </Box>
            <Box>
                <Circle as="button"
                    bgColor="#f1f1f1"
                    display="flex"
                    justifyContent="center"
                    alignItem="center"
                    w="30px"
                    p={["1", "1", "2"]}
                    onClick={() => handleDelete(_id)}

                >
                    <SmallCloseIcon
                        boxSize="1em"
                        display="flex"
                        justifyContent="center"
                        alignItem="center"
                    />
                </Circle>
            </Box>

        </Flex>




    )
}

export default CartItem