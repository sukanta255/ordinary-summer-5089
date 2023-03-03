import React, { ReactNode } from 'react';
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
} from '@chakra-ui/react';
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from 'react-icons/fi';
import { IconType } from 'react-icons';
import { ReactText } from 'react';
import { MobileNav } from './MobileNav';
import { SidebarContent } from './SidebarContent';


// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }
 export const LinkItems = [
  { name: 'Dashboard', icon: FiHome ,link:"/admin"},
  { name: 'Add Data', icon: FiTrendingUp,link:"/adddata" },
  { name: 'Users Data', icon: FiCompass,link:"/todo" },
  { name: 'Update Data', icon: FiStar ,link:"/updatedata"},
  { name: 'Main Page', icon: FiSettings,link:"/homepage" },
];


export default function AdminSidebar({ children }) {
    
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
      <SidebarContent
        backgroundColor={"teal"}
        border={"1px solid red"}
        onClose={() => onClose}
        display={{ base: 'none', md: 'block' }}
      />
      <Drawer
       
        autoFocus={false}
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
        <DrawerContent>
          {/* <SidebarContent onClose={onClose} /> */}
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav 
       display={{ base: 'flex', md: 'none' }} onOpen={onOpen}  />
      {/* <Box ml={{ base: 0, md: 60 }} p="4" 
        border={"2px solid yellow"}
      
      >
        {children}
      </Box> */}
    </Box>
  );
}






