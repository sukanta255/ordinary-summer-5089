import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import {
    Box,
    Text,
    List,
    Menu, 
    Hide,
    Input, 
    Image,
    Button,
    Portal, 
    Center,
    Heading,
    MenuList, 
    MenuItem, 
    ListItem, 
    Container, 
    SimpleGrid,
    MenuButton, 
    UnorderedList,
} from "@chakra-ui/react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./HomePage.css";
import { BsArrowRightShort,BsArrowRight } from "react-icons/bs";

function SmapleNextArrow(props){
    const {className,style,onClick}=props
    return(
      <div
      className={className}
      style={{ ...style, display: "block", color: "black",right:"-8px" }}
      onClick={onClick}
    >
      <ChevronRightIcon w={"40px"} h={"40px"} />
    </div>
    )
  }
  // 
  
  function SmaplePrevArrow(props){
    const {className,style,onClick}=props
    return(
      <div
        className={className}
        style={{ ...style, display: "block", color: "black" }}
        onClick={onClick}
      >
        <ChevronLeftIcon
         w={"40px"} h={"40px"} />
      </div>
    )
  }

const HomePage=()=>{
  const [data,setData]=useState([]);
  const [womenData,setWomenData]=useState([]);
  const [menData,setMenData]=useState([]);
  const [varsityData, setVarsityData]=useState([])
  const [artistData,setArtistData]=useState([])

  let settings1= {
    dots:true,
    infintie:true,
    speed:500,
    slidesToShow:4,
    slidesToScroll:2,
    nextArrow:<SmapleNextArrow />,
    prevArrow:<SmaplePrevArrow />,
    responsive: [
    {
        breakpoint:1284,
        settings:{
            slidesToShow:3,
            slidesToScroll:1,
            infinite:true,
        },
        
        
    },
    {
        breakpoint:896,
            settings:{
                slidesToShow:2,
                slidesToScroll:2,
                infinite:true,
            },
    },
    {
        breakpoint:450,
        settings:{
            slidesToShow:1,
            slidesToScroll:1,
            infinite:true,
        },
    }
    ]
  }

  useEffect(()=>{
    axios.get('https://koovs-api.vercel.app/shop_women').then((res)=>{
      setWomenData(res.data)
    })
  },[])
  useEffect(()=>{
    axios.get('https://koovs-api.vercel.app/shop_men').then((res)=>{
        setMenData(res.data)
    })
  },[])
  useEffect(()=>{
    axios.get('https://koovs-api.vercel.app/varsity-jackets').then((res)=>{
        setVarsityData(res.data)
    })
  },[])
  useEffect(()=>{
    axios.get('https://koovs-api.vercel.app/artist-collab').then((res)=>{
        setArtistData(res.data)
    })
  },[])
    return (
        <div>
            <Box >
                <Box width="100%">
                    <Image border='0'  src='https://cdn.shopify.com/s/files/1/0677/1464/6315/files/10_ARTIST_DESKTOP5.jpg?v=1676618119&width=1500' alt='Koovs logo11' />
                </Box>
            </Box>
            <Box ml='80px' mt='20px'>
                <Text as='h2' fontSize={"22px"} fontWeight="600" color={'#000000'}display={'inline-block'}>
                    Shop Women's
                </Text>
            </Box>
            <div style={{margin:"auto", justifyContent:"center", width:"90%"}} >
                    <Slider 
                    {...settings1}
                    >
                    {womenData.map((el)=>{
                    return(
                        <Box key={el.id}   borderWidth={'1px'} borderRadius='lg' overflow={'hidden'} >
                        <Image src={el.image} alt={el.title} 
                        
                        /> 
                            <Box className='best_seller_item_detail'>
                                <span className='best_seller_product_name'>{el.title}</span>
                        <Box className='best_seller_item_action'>
                            <Box className='rate'>
                            <Hide below="md">
                                <span  color='#aeaeae'>
                                <span style={{fontSize:"14px"}}  >{el.items}</span>
                                </span>
                                </Hide>
                            </Box>
                            <Hide below="md">
                            <Box className='action'>
                                <Box className='action_slider shop-buton11'>
                                    <Button><BsArrowRightShort/></Button>
                                </Box>
                            </Box>
                            </Hide>
                            </Box>
                        </Box>
                    </Box>
                    )
                    })}
                    </Slider>
            </div>
            <Box ml='80px' mt='20px'>
                <Text as='h2' fontSize={"22px"} fontWeight="600" color={'#000000'} display={'inline-block'}>
                    Shop Men's
                </Text>
            </Box>
            <div style={{margin:"auto", justifyContent:"center", width:"90%"}} >
                    <Slider 
                    {...settings1}
                    >
                    {menData.map((el)=>{
                    return(
                        <Box key={el.id}   borderWidth={'1px'} borderRadius='lg' overflow={'hidden'}>
                        <Image src={el.image} alt={el.title} /> 
                            <Box className='best_seller_item_detail'>
                                <span className='best_seller_product_name'>{el.title}</span>
                        <Box className='best_seller_item_action'>
                            <Box className='rate'>
                            <Hide below="md">
                                <span  color='#aeaeae'>
                                <span style={{fontSize:"14px"}}  >{el.items}</span>
                                </span>
                                </Hide>
                            </Box>
                            <Hide below="md">
                            <Box className='action'>
                                <Box className='action_slider shop-buton11'>
                                    <Button><BsArrowRightShort/></Button>
                                </Box>
                            </Box>
                            </Hide>
                            </Box>
                        </Box>
                    </Box>
                    )
                    })}
                    </Slider>
            </div>
            <Heading as="h3" size="lg" mt={"20px"} mb={"30px"} textAlign={"center"}>
                Featured Brands
            </Heading>
            <SimpleGrid columns={[1,1,2]} px={"21px"} spacing={"21px"}>
                <Box>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-1007.jpg?v=1667990812&width=720"
                        alt="featured_brand_logo1"
                    />
                    <Text as='h3' color={"black"} fontWeight="600">Essentials by Koovs</Text>
                </Box>
                <Box>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/KOOVS_20OCT22-3213-141.jpg?v=1667995128&width=720"
                        alt="featured_brand_logo2"
                    />
                    <Text as='h3' color={"black"} fontWeight="600">Koovs</Text>
                </Box>
            </SimpleGrid>

        </div>
    )
}

export default HomePage