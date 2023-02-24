import * as React from 'react'
import {
    Box,
    useDisclosure,
    ListItem,
    UnorderedList,
    Text,
    Image,
    Input,
    InputGroup,
    InputRightElement,
    Menu,
    MenuButton,
    Portal,
    MenuList,
    MenuItem,
    Hide,
    Drawer,
    DrawerBody,
    DrawerCloseButton,
    DrawerContent,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    Flex
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import "./Navbar.css"
  import { HamburgerIcon, Search2Icon, SearchIcon ,ChevronRightIcon} from "@chakra-ui/icons";
  import { VscAccount } from "react-icons/vsc";
  import { AiOutlineStar} from "react-icons/ai";
  import { FaShippingFast, FaShoppingCart, FaRegUser } from "react-icons/fa";
  import { BiChevronDown } from "react-icons/bi";
  import { RiBattery2ChargeFill, RiCoinsFill,RiShoppingBagLine } from "react-icons/ri";
  import { MdLocalOffer, MdOutlineSmartphone } from "react-icons/md";
  import { BiDollar } from "react-icons/bi";
  import { TbDiscount2, TbGift } from "react-icons/tb";
  import {HiMenu} from "react-icons/hi"
  import { VscReferences } from "react-icons/vsc";
  import {CgSearch} from "react-icons/cg"
  import { Button, ButtonGroup } from '@chakra-ui/react'
  import chakraTheme from '@chakra-ui/theme'
  import { ChevronDownIcon } from '@chakra-ui/icons'
  const Navbar = ()=>{
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
    return (
        <div>
            <Box className="first-header">
                <Box className="navbar_top">
                    <Hide below="lg">
                        <Box className="container">
                            <Box className="header_menu">
                                <UnorderedList>
                                <ListItem className="download">
                                    <a
                                    href="facebook.com"
                                    target={"_blank"}
                                    className="facebook-logo22"
                                    >
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/44/44646.png"
                                        alt="apple_Store"
                                    />                
                                    <Text as="span">1.8M Followers</Text>
                                    </a>
                                    <a
                                    href="https://play.google.com/store/apps/details?id=com.licious&pli=1"
                                    target={"_blank"}
                                    >
                                    <Image
                                        src="https://cdn-icons-png.flaticon.com/512/87/87390.png?w=360"
                                        alt="play_store"
                                    /> 
                                    <Text as="span">682k Followers</Text>
                                    </a>
                                </ListItem>
                                </UnorderedList>
                            </Box>
                            <Box className="header_right">
                                <Text as="span">Open doors to a world of fashion | Young and fresh</Text>
                            </Box>
                            <Box className="down_arrow">
                                <Menu className="down_arrow3">
                                    <MenuButton  as={Button} rightIcon={<ChevronDownIcon />} colorScheme='white' color="black" fontSize='15px' border="none" >
                                        English
                                    </MenuButton >
                                    <MenuList >
                                        <MenuItem className="down_arrow2">English</MenuItem>
                                    </MenuList>
                                </Menu>
                            </Box>
                        </Box>
                    </Hide>
                </Box>
{/*////////////////////////////////////////////// first navbar complete //////////////////////////////////////////////////////////*/}
{/*////////////////////////////////////////////// second navbar start //////////////////////////////////////////////////////////*/}
    <Box id="after-top">
      <Box id="menu_nav">
        <Box
          alignItems="center"
          display="flex"
          justifyContent="space-evenly"
          width="84%"
          margin="auto"
          id="hover-black"
        >
          <div id="menu-dropdown" className='containerh'>
            <div id="menu-title" className='icon' >Men <BiChevronDown/></div>
            <div className="popup">
                    <div className="contpop">
                        <div className="firstpop">
                            <h5>Clothing</h5>
                            <p>New in</p>
                            <p>View all</p>
                            <p>T-Shirts</p>
                            <p>Jackets & Coats</p>
                            <p>Hoodies & Sweatshirts</p>
                            <p>Sweetpants</p>
                            <p>Shorts</p>
                            <p>Co-ord sets</p>
                            <p>SHU</p>
                            <p>Nike</p>
                            <p>Tigerbear</p>
                            <p>Keen</p>
                        </div>
                        <div className="secondpop">
                            <h5>Brands</h5>
                            <p>Essentials by koovs</p>
                            <p>BALL Copenhagen</p>
                            <p>Bravesoul</p>
                            <p>The couture club</p>
                            <p>Arkk copenhagen</p>
                            <p>SHU</p>
                            <p>Nike</p>
                            <p>Tigerbear</p>
                            <p>Keen</p>
                            <p>Sive</p>
                            <p>Kangel</p>
                            <p>Comatoes</p>
                        </div>
                        <div className="thirdpop">
                            <h5>Shoes</h5>
                            <p>Sneakers</p>
                            <p>Slides</p>
                        </div>
                       <div className="thirdpopup">
                        <div classname="thirdpop">
                            <img className="im3" src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Screenshot_2022-11-10_at_5.37.53_PM.png?v=1668083230&width=533" alt="men-image11" />
                        </div>
                       </div>
                    </div>
          
            </div>
          </div>
          <div id="menu-dropdown" className='containerh'>
            <div id="menu-title" className='icon'>Women<BiChevronDown/></div>
              <div className="popup">
                    <div className="contpop">
                        <div className="firstpop">
                            <h5>Clothing</h5>
                            <p>New in</p>
                            <p>View all</p>
                            <p>Lounge & sleep wear</p>
                            <p>Lingerie & innerwear</p>
                            <p>T-Shirts</p>
                            <p>Sweetpants</p>
                            <p>Sweatshirts</p>
                            <p>Sports bra</p>
                            <p>Bodysuit</p>
                            <p>Outer wear</p>
                            <p>Jeans</p>
                            <p>Dress</p>
                        </div>
                        <div className="secondpop">
                            <h5>Shoes</h5>
                            <p>New in</p>
                            <p>View all</p>
                            <p>Sneakers</p>
                            <p>Heels</p>
                            <p>Nike</p>
                            <p>Tigerbear</p>
                            <p>Keen</p>
                            <p>Sive</p>
                            <p>Kangel</p>
                            <p>Sliders & flip flops</p>
                            <p>Boots</p>
                            <p>Nike</p>
                        </div>
                        <div className="secondpop">
                            <h5>Brands</h5>
                            <p>Bravesoul</p>
                            <p>Koovs sport</p>
                            <p>Koovs</p>
                            <p>Public desire</p>
                            <p>Keen</p>
                            <p>SHU</p>
                            <p>Arkk copenhagen</p>
                            <p>The courture club</p>
                            <p>Nike</p>
                            <p>BALL Copenhagen</p>
                            <p>Kangel</p>
                            <p>Comatoes</p>
                        </div>
                       <div className="thirdpopup">
                        <div classname="thirdpop">
                            <img className="im4" src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/Screenshot_2022-11-10_at_6.09.16_PM.png?v=1668083985&width=533" alt="men-image12" />
                        </div>
                      </div>
                  </div>         
            </div>
          </div>
          <div id="menu-dropdown" className='artist_collab1 icon'>
            <div id="menu-title " className='menu-title3'>Artist collab<BiChevronDown/></div>
            <div className="menu-dropdown-content">
              <Box display="flex" gap="50px" pt={5} padding="15px">
                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      marginBottom: "20px",
                    }}
                  >
                    George Thomas
                  </p>
                </div>
              </Box>
            </div>
          </div>
        </Box>
      </Box>
        <Box>
          <img
            className="logo hot-logo"
            src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/koovs_final_logo.svg?v=1667889730"
            alt="logo"
          />
        </Box>
        <div style={{ display: "flex", gap: "30px" }}>
        <div class="dropdown">
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div id="cart-icon">
                <Search2Icon size="1.6em" />
              </div>
            </div>
            <div class="dropdown-content">
              <p>Search</p>
            </div>
          </div>
        <div class="dropdown">
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div id="cart-icon">
                <FaRegUser size="1.6em" />
              </div>
            </div>
            <div class="dropdown-content">
              <p>Account</p>
            </div>
          </div>
          <div class="dropdown">
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div id="cart-icon">
                <AiOutlineStar size="1.6em" />
                <p className="cartValue">0</p>
              </div>
            </div>
            <div class="dropdown-content">
              <p>Wishlist</p>
            </div>
          </div>
          <div class="dropdown">
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div id="cart-icon">
                <RiShoppingBagLine size="1.6em" />
                <p className="cartValue">0</p>
              </div>
            </div>
            <div class="dropdown-content">
              <p>Cart</p>
            </div>
          </div>
        </div>
      </Box>
      <div id="responsive_22">
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ marginLeft: "30px" }}>
            <HiMenu ref={btnRef} colorScheme="teal" onClick={onOpen} size="1.6em"/>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
              height= "100vh"
              size="full"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerBody>
                  <Box display="flex" flexDirection="column" gap="20px" marginLeft="10px">
                    <br/>
                    <br/>
                    <br/>
                    <p>Men   <ChevronRightIcon/></p>
                    <p>Women    <ChevronRightIcon/></p>
                    <p>Artist Collab  <ChevronRightIcon/></p>
                  </Box>
                </DrawerBody>
                  <p className='myaccount123'>My Account</p>
                <DrawerHeader mt={12} display="flex" flexDirection="column" width="40%">
                  <Button bgColor="black" color="white" colorScheme = "none">Login</Button>
                  <Button variant="outline"  border =" 1px solid black"  colorScheme = "none">Register</Button>
                </DrawerHeader>

              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <div>
            <img style= {{width : "90px", height : "25px"}} src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/koovs_final_logo.svg?v=1667889730" alt="logo"/>
        </div>

        <div style={{display : "flex", gap : "30px", alignItems: "center"}}>
            <CgSearch size="1.6em"/>
            <div class="dropdown" style={{paddingRight : "50px"}}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div id="cart-icon">
                <RiShoppingBagLine size="1.6em" />
                <p className="cartValue">0</p>
              </div>
            </div>
            </div>
        </div>

      </div>
      </Box>
      </div>
    )
  }

  export default Navbar;

