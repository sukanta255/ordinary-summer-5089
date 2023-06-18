import React, { useEffect, useState } from "react";
import styles from "./Admin_Home.module.css";
import Admin_Sidebar from "./Admin_Sidebar";
import userImg from "./icons/user_icon.png";
import cartImg from "./icons/cart.png";
import orderImg from "./icons/order.png";
import productImg from "./icons/product.png";
import capitalImg from "./icons/capital.png";
import viewImg from "./icons/view.png";


import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import MapComponent from "./MapComponent";
import axios from "axios";
const Admin_Home = () => {
  const [data,setdata]=useState([])

 
    let length
const getData=async()=>{
  let res=await axios.post("https://koovsbackend.onrender.com/admin/analytics",{ headers: { Authorization:localStorage.getItem("token") } })
    console.log(res)
    let data=await res.data.data;
    console.log(data)
    setdata(data)
   
}

    useEffect(()=>{
      getData()
      
    },[])

  //  console.log(data)


  let totalprice=data.reduce((acc,curr)=>{
      return acc+(+curr.price)
  },0)
 let revenue= Math.ceil(totalprice)
//  console.log(revenue)
  return (
    <Box
      className={styles.adminmain}
      display={["flex"]}
      flexDirection={["column", "column", "row"]}
    >
      <Box
        w={["100%", "100%", "20%"]}
        bg={"tomato"}
        h={["70px", "70px", "400px"]}
      >
        <Admin_Sidebar />
      </Box>
      <Box w={["100%", "100%", "80%"]} h={"100%"} bg={"pink"}>
        <SimpleGrid columns={[2, 3]}>
          <Box
            m={"10%"}
            h={"100px"}
            bg={"blue"}
            padding={"4px"}
            display={"flex"}
          >
            <Box w="70%">
              <Button>{"86"}</Button>
              <Text fontSize={["1xl", "1.5xl", "2xl"]}  color={"white"}>
                Register User
              </Text>
            </Box>
            <Box w="30%">
              <Image src={userImg} w="100%" h="100%" ></Image>
            </Box>

          </Box>
          <Box
            m={"10%"}
            h={"100px"}
            bg={"tomato"}
            padding={"4px"}
            display={"flex"}
          >
            <Box  w="70%">
              <Button>{data.length}</Button>
              <Text fontSize={["1xl", "1.5xl", "2xl"]} color={"white"}>
                Total Product
              </Text>
            </Box>
            <Box  w="30%">
              <Image src={productImg} w="100%" h="100%" ></Image>

            </Box>
          </Box>
          <Box
            m={"10%"}
            h={"100px"}
            bg={"green"}
            padding={"4px"}
            display={"flex"}
          >
            <Box  w="70%">
              <Button>{"37"}</Button>
              <Text fontSize={["1xl", "1.5xl", "2xl"]} color={"white"}>
                Total Cart Item
              </Text>
            </Box>
            <Box  w="30%">
              <Image src={cartImg} w="100%" h="100%" ></Image>
               
            </Box>
          </Box>
          <Box
            m={"10%"}
            h={"100px"}
            bg={"#907c30"}
            padding={"4px"}
            display={"flex"}
          >
            <Box  w="70%">
              <Button>{"45"}</Button>
              <Text fontSize={["1xl", "1.5xl", "2xl"]} color={"white"}>
                Daily Visitor
              </Text>
            </Box>
            <Box  w="30%">
              <Image src={viewImg} w="100%" h="100%" ></Image>

            </Box>
          </Box>
          <Box
            m={"10%"}
            h={"100px"}
            bg={"brown"}
            padding={"4px"}
            display={"flex"}
          >
            <Box  w="70%">
              <Button>{revenue}</Button>
              <Text fontSize={["1xl", "1.5xl", "2xl"]} color={"white"}>
                Total Capital
              </Text>
            </Box>
            <Box  w="30%">
              <Image src={capitalImg} w="100%" h="100%" ></Image>

            </Box>
          </Box>
          <Box
            m={"10%"}
            h={"100px"}
            bg={"teal"}
            padding={"4px"}
            display={"flex"}
          >
            <Box  w="70%">
              <Button>{"52"}</Button>
              <Text fontSize={["1xl", "1.5xl", "2xl"]} color={"white"}>
                Order Placed
              </Text>
            </Box>
            <Box  w="30%">
              <Image src={orderImg} w="100%" h="100%" ></Image>

            </Box>
          </Box>
        </SimpleGrid>
        <Flex justifyContent={"space-around"} m={"10px"} flexDirection={["column","column","row"]} >
          <Box w={["80%","75%","45%"]} h={"300px"} bg={"#dcbde8"} p="10px 20px 30px" m="auto">
            <MapComponent />
          </Box>
          <Box w={["80%","75%","45%"]} h={"300px"} bg={"#71a9cd"} m="auto">
            <Image h="100%" w="100%" src="https://www.shutterstock.com/image-vector/set-colourful-business-charts-diagram-260nw-1388414240.jpg" alt="graph"></Image>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Admin_Home;
