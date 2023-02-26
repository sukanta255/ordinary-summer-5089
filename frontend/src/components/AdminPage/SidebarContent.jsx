import { Box, CloseButton, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { LinkItems } from "./AdminSidebar";
import { NavItem } from "./NavItem";

export const SidebarContent = ({ onClose, ...rest }) => {

  return (
    <Box
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="sticky"
      // bgColor="red"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <Link to={link.link}>
        <NavItem 
         key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
        // </Link>
      ))}
    </Box>
  );
};