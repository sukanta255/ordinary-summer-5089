import * as React from 'react'
import { Icon } from '@chakra-ui/react'
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
    Hide
  } from "@chakra-ui/react";
  import { Link } from "react-router-dom";
  import "./Navbar.css"
  import { Search2Icon } from "@chakra-ui/icons";
  import { VscAccount } from "react-icons/vsc";
  import { FaShippingFast, FaShoppingCart } from "react-icons/fa";
  import { RiBattery2ChargeFill, RiCoinsFill } from "react-icons/ri";
  import { MdOutlineSmartphone } from "react-icons/md";
  import { Button, ButtonGroup } from '@chakra-ui/react'
  import chakraTheme from '@chakra-ui/theme'
  import { ChevronDownIcon } from '@chakra-ui/icons'
  const Navbar = ()=>{
    return (
        <>
            <Box className="first-header">
                <Box className="navbar_top">
                    <Hide below="lg">
                        <Box className="container">
                            <Box className="header_menu">
                                <UnorderedList>
                                <ListItem className="download">
                                    <a
                                    href="https://www.facebook.com/koovs"
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
                                    href="https://www.instagram.com/koovsfashion/"
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
                                    <MenuButton  as={Button} rightIcon={<ChevronDownIcon />} colorScheme='white' color="black" fontSize='15px' >
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

            </Box>
        </>
    )
  }

  export default Navbar;

