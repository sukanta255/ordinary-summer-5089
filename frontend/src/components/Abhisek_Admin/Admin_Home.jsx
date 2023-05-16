import React from 'react'
import styles from "./Admin_Home.module.css"
import Admin_Sidebar from './Admin_Sidebar'
import { Box, Button, Flex, Grid, GridItem, SimpleGrid, Text } from '@chakra-ui/react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import MapComponent from './MapComponent';
const Admin_Home = () => {
  return (
    <Box className={styles.adminmain} display={["flex"]} flexDirection={["column","column","row"]}>
        
        <Box w={["100%","100%","20%"]}bg={"tomato"} h={["70px","70px","400px"]} >
           <Admin_Sidebar/>
        </Box>
        <Box w={["100%","100%","80%"]} h={"100%"} bg={"pink"}>
            <SimpleGrid columns={[2,3]} >
                <Box m={"10%"} h={"100px"} bg={"blue"} padding={"4px"}>
                   <Box>
                     <Button>{"86"}</Button>
                   </Box>
                   <Box>
                     <Text fontSize={["1xl","1.5xl","2xl"]} color={"white"}>Register User</Text>
                   </Box>
                </Box>
                <Box  m={"10%"} h={"100px"} bg={"tomato"} padding={"4px"}>
                <Box>
                     <Button>{"1530"}</Button>
                   </Box>
                   <Box>
                     <Text fontSize={["1xl","1.5xl","2xl"]} color={"white"}>Total Product</Text>
                   </Box>
                </Box>
                <Box  m={"10%"} h={"100px"} bg={"green"} padding={"4px"}>
                <Box>
                     <Button>{"37"}</Button>
                   </Box>
                   <Box>
                     <Text fontSize={["1xl","1.5xl","2xl"]} color={"white"}>Total Cart Item</Text>
                   </Box>
                </Box>
                <Box  m={"10%"} h={"100px"} bg={"#907c30"} padding={"4px"}>
                <Box>
                     <Button>{"45"}</Button>
                   </Box>
                   <Box>
                     <Text fontSize={["1xl","1.5xl","2xl"]} color={"white"}>Daily Visitor</Text>
                   </Box>
                </Box>
                <Box  m={"10%"} h={"100px"} bg={"brown"} padding={"4px"}>
                <Box>
                     <Button>{"9500000"}</Button>
                   </Box>
                   <Box>
                     <Text fontSize={["1xl","1.5xl","2xl"]} color={"white"}>Total Capital</Text>
                   </Box>
                </Box>
                <Box  m={"10%"} h={"100px"} bg={"teal"} padding={"4px"}>
                <Box>
                     <Button>{"52"}</Button>
                   </Box>
                   <Box>
                     <Text fontSize={["1xl","1.5xl","2xl"]} color={"white"}>Order Placed</Text>
                   </Box>
                </Box>
            </SimpleGrid>
            <Flex justifyContent={"space-around"} m={"10px"}>
                <Box w={"45%"} h={"300px"} bg={"#dcbde8"} p="10px 20px 30px" >
                    <MapComponent/>
                </Box>
                <Box w={"40%"} h={"300px"} bg={"#71a9cd"} ></Box>
            </Flex>
        </Box>
    </Box>
  )
}

export default Admin_Home