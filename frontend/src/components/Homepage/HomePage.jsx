import React  from "react";
import {
    Box,
    Text,
    List,
    Menu, 
    Hide,
    Flex,
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
    IconButton,  
} from "@chakra-ui/react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useEffect, useState,useRef } from 'react';
import { BsStar } from "react-icons/bs";
import { GrView } from "react-icons/gr";
import axios from 'axios';
import "./HomePage.css";
import { BsArrowRightShort} from "react-icons/bs";
import { Link } from "react-router-dom";


///////////////////////first mens part for arrow start//////////////////////////////////////////////////////////////////////////////////
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
///////////////////////first mens part for arrow closed//////////////////////////////////////////////////////////////////////////////////
/////single image size with btn start/////////////////////////////////////////////////////////////////////////////////////////////////////////////

const SingleImage= ({ el }) => {
  const [isVisible, setIsVisible] = useState(false);
  const img1 = el.image1
  const img2 = el.image2
  const over = (e) => {
    setIsVisible(true);
  };
  const out = (e) => {
    setIsVisible(false);
  };
    const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
        const imageRef = useRef(null);
      
        return (
          <img 
            onMouseOver={() => {
              imageRef.current.src = secondaryImg;
            }}
            onMouseOut={() => {
              imageRef.current.src= primaryImg;
            }}
            src={primaryImg} 
            alt=""
            ref={imageRef}
            transition={"1000ms"}
          />
        )
      }
      const ImageChangeOnMouseOverr = () => {
        return (
          <div>
            <ImageToggleOnMouseOver
              primaryImg={img1}
              secondaryImg={img2}
              alt="image1" />
          </div>
        )
      }
  return (
    <Flex direction={"column"}>
      <Flex position={"relative"} onMouseOver={over} onMouseOut={out} >
        <Link to='/products'> 
        <Flex transition={"1000ms"}>
            <ImageChangeOnMouseOverr/>
        </Flex>
        </Link>
        <IconButton
          transition={"500ms"}
          display={isVisible ? "flex" : "none"}
          icon={<BsStar />}
          borderRadius={"50%"}
          position={"absolute"}
          bgColor={"white"}
          _hover={{ color: "white", bgColor: "black"}}
          top={"10px"}
          right={"10px"}
        />
        <IconButton
          transition={"500ms"}
          display={isVisible ? "flex" : "none"}
          icon={<GrView />}
          borderRadius={"50%"}
          position={"absolute"}
          bgColor={"white"}
          _hover={{ color: "white", bgColor: "black" }}
          top={"60px"}
          right={"10px"}
        />
        <Button
          height={"20px"}
          width={"40px"}
          borderRadius={"20px"}
          position={"absolute"}
          bgColor={"#da3f3f"}
          top={"10px"}
          left={"10px"}
        >
            <Text color={"white"} fontSize={"12px"}>
                -30%
            </Text>
        </Button>
      </Flex>
      <Flex justifyContent={"space-between"} mt={"4"}>
        <Text as={"p"} fontSize={"12px"} color={"black"} cursor={"pointer"}>
          {el.title1}
        </Text>
      </Flex>
      <Text noOfLines={1} as={"h6"} cursor={"pointer"} fontWeight={"bold"}>
        {el.title2}
      </Text>
      {el.price1 ? (
        <Flex gap={"5"}>
          <Text cursor={"pointer"}>$ {el.price1}</Text>
          <Text as={"s"} color={"grey"} cursor={"pointer"}>
            $ {el.price2}
          </Text>
        </Flex>
      ) : (
        <Text>$ {el.price2}</Text>
      )}
      {el.color ? <Flex border={"1px solid black"} mt={"1"} w={"6"} h={"6"} borderRadius={"50%"} bgColor={el.color} ></Flex> : null}
    </Flex>
  );
};
/////single image size with btn end/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////single image size with btn start/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const SingleImage2= ({ el }) => {
    const [isVisible, setIsVisible] = useState(false);
    const img1 = el.image1
    const img2 = el.image2
    const over = (e) => {
      setIsVisible(true);
    };
    const out = (e) => {
      setIsVisible(false);
    };
      const ImageToggleOnMouseOver = ({primaryImg, secondaryImg}) => {
          const imageRef = useRef(null);
        
          return (
            <img 
              onMouseOver={() => {
                imageRef.current.src = secondaryImg;
              }}
              onMouseOut={() => {
                imageRef.current.src= primaryImg;
              }}
              src={primaryImg} 
              alt=""
              ref={imageRef}
              transition={"1000ms"}
            />
          )
        }
        const ImageChangeOnMouseOverr = () => {
          return (
            <div>
              <ImageToggleOnMouseOver
                primaryImg={img1}
                secondaryImg={img2}
                alt="image1" />
            </div>
          )
        }
    return (
      <Flex direction={"column"}>
        <Flex position={"relative"} onMouseOver={over} onMouseOut={out} >
        <Link to='/products'> 
        <Flex transition={"1000ms"}>
            <ImageChangeOnMouseOverr/>
        </Flex>
        </Link>
          <IconButton
            transition={"500ms"}
            display={isVisible ? "flex" : "none"}
            icon={<BsStar />}
            borderRadius={"50%"}
            position={"absolute"}
            bgColor={"white"}
            _hover={{ color: "white", bgColor: "black"}}
            top={"10px"}
            right={"10px"}
          />
          <IconButton
            transition={"500ms"}
            display={isVisible ? "flex" : "none"}
            icon={<GrView />}
            borderRadius={"50%"}
            position={"absolute"}
            bgColor={"white"}
            _hover={{ color: "white", bgColor: "black" }}
            top={"60px"}
            right={"10px"}
          />
        </Flex>
        <Flex justifyContent={"space-between"} mt={"4"}>
          <Text as={"p"} fontSize={"12px"} color={"black"} cursor={"pointer"}>
            {el.title1}
          </Text>
        </Flex>
        <Text noOfLines={1} as={"h6"} cursor={"pointer"} fontWeight={"bold"}>
          {el.title2}
        </Text>
        <Text as={"h3"} color={"black"} cursor={"pointer"}>
              $ {el.price}
            </Text>
            <Flex gap={"10px"}>
                {el.color1 ? <Flex border={"1px solid black"} mt={"1"} w={"6"} h={"6"} borderRadius={"50%"} bgColor={el.color1} ></Flex> : null}
                {el.color2 ? <Flex border={"1px solid black"} mt={"1"} w={"6"} h={"6"} borderRadius={"50%"} bgColor={el.color2} ></Flex> : null}
            </Flex>
      </Flex>
    );
  };
/////single image size  simple end/////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////homepage start////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const HomePage=()=>{
  const [data,setData]=useState([]);
  const [womenData,setWomenData]=useState([]);
  const [menData,setMenData]=useState([]);
  const [varsityData, setVarsityData]=useState([])
  const [artistData,setArtistData]=useState([])
  const [koovsWomenData, setKoovsWomenData]=useState([])
  const [koovsMenData,setKoovsMenData]=useState([])

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
  useEffect(()=>{
    axios.get('https://koovs-api.vercel.app/koovs-women').then((res)=>{
        setKoovsWomenData(res.data)
    })
  },[])
  useEffect(()=>{
    axios.get('https://koovs-api.vercel.app/koovs-men').then((res)=>{
        setKoovsMenData(res.data)
    })
  },[])
    return (
        <div>
            <SimpleGrid columns={[1,1,1]} px={"21px"} spacing={"21px"}>
                <Box>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/10_ARTIST_DESKTOP5.jpg?v=1676618119&width=1500"
                        alt="koovs-big_logo"
                    />
                </Box>
            </SimpleGrid>
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
                          <Link to='/products'> 
                              <Image src={el.image} alt={el.title}                             
                            /> 
                            </Link>                       
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
                Varsity Jackets
            </Heading>
            <Heading as="h5" size="sm" mt={"10px"} mb={"10px"} textAlign={"center"} textDecorationLine={'underline'} fontSize= {"14px"} cursor={"pointer"}>
                The couture club
            </Heading>
            <SimpleGrid >
                <Flex w={"100%"} direction={"column"}>
                    <SimpleGrid m={"8"} columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={"8"}>
                        {varsityData.map((el, id) => (
                        <SingleImage key={id} el={el} />
                        ))}
                    </SimpleGrid>
                </Flex>
            </SimpleGrid>
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
            <Heading as="h5" size="sm" mt={"10px"} mb={"10px"} textAlign={"center"} textDecorationLine={'underline'} fontSize= {"14px"} cursor={"pointer"}>
                George Thomas x Koovs
            </Heading>
            <Heading as="h3" size="lg" mt={"20px"} mb={"30px"} textAlign={"center"}>
                Artist Collab
            </Heading>      
            <SimpleGrid >
                <Flex w={"100%"} direction={"column"}>
                    <SimpleGrid m={"8"} columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={"8"}>
                        {artistData.map((el, id) => (
                        <SingleImage2 key={id} el={el} />
                        ))}
                    </SimpleGrid>
                </Flex>
            </SimpleGrid>
            <Heading as="h3" size="lg" mt={"20px"} mb={"30px"} textAlign={"center"}>
                Explore Essentials By Koovs
            </Heading>           
            <SimpleGrid >
                <Flex w={"100%"} direction={"column"}>
                    <SimpleGrid m={"8"} columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={"8"}>
                        {koovsMenData.map((el, id) => (
                        <SingleImage2 key={id} el={el} />
                        ))}
                    </SimpleGrid>
                </Flex>
            </SimpleGrid>
            <Heading as="h3" size="lg" mt={"20px"} mb={"30px"} textAlign={"center"}>
                Explore Koovs women
            </Heading>           
            <SimpleGrid >
                <Flex w={"100%"} direction={"column"}>
                    <SimpleGrid m={"8"} columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={"8"}>
                        {koovsWomenData.map((el, id) => (
                        <SingleImage2 key={id} el={el} />
                        ))}
                    </SimpleGrid>
                </Flex>
            </SimpleGrid>
            <Heading as="h3" size="lg" mt={"20px"} mb={"30px"} textAlign={"center"}>
                Brands on koovs
            </Heading>
            <SimpleGrid columns={{ base: 2, sm: 4, md: 6, lg: 8 }} px={"21px"} spacing={"21px"}>
                <Box cursor={"pointer"}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/koovs_logo_for_brand_page-03.jpg?v=1668331785&width=360"
                        alt="koovs-brand-logo"
                    />
                </Box>
                <Box cursor={"pointer"}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/essentials_logo-02.jpg?v=1668331830&width=360"
                        alt="essentials-logo"
                    />
                </Box>
                <Box cursor={"pointer"}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/kangol_logo-01.jpg?v=1668331868&width=360"
                        alt="kangaroo-logo"
                    />
                </Box>
                <Box cursor={"pointer"}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logo-01.png?v=1668331907&width=360"
                        alt="big-bazaar-logo"
                    />
                </Box>
                <Box cursor={"pointer"}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logo-02.png?v=1668331923&width=360"
                        alt="5ive-logo"
                    />
                </Box>
                <Box cursor={"pointer"}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Ball_logo.jpg?v=1668332152&width=360"
                        alt="ball-logo"
                    />
                </Box>
                <Box cursor={"pointer"}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/logo-04.jpg?v=1668332188&width=360"
                        alt="koma-logo"
                    />
                </Box>
                <Box cursor={"pointer"}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/logo-02.jpg?v=1668332226&width=360"
                        alt="public-desire-logo"
                    />
                </Box>
                <Box cursor={"pointer"}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-08.jpg?v=1668332439&width=360"
                        alt="arkk-logo"
                    />
                </Box>
                <Box cursor={"pointer"}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-07.jpg?v=1668332432&width=360"
                        alt="coffee-logo"
                    />
                </Box>
                <Box cursor={"pointer"}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_n-09.jpg?v=1668332464&width=360"
                        alt="keen-logo"
                    />
                </Box>
                <Box cursor={"pointer"}>
                    <Image
                        src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/brand_logos_3951c2d8-141f-43a4-8065-9cca52dac9dd.jpg?v=1668332482&width=360"
                        alt="koov-logo"
                    />
                </Box>
            </SimpleGrid>

        </div>
    )
}
/////homepage end////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
export default HomePage