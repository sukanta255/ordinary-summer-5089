import {
    Box,
    Link,
    Text,
    Flex,
    Input,
    Stack,
    Image,
    Button,
    Divider,
    Container,
    InputGroup,
    SimpleGrid,
    InputLeftElement,
    InputRightElement,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { FaInstagram, FaFacebook } from "react-icons/fa";
  import { AiOutlineArrowRight } from "react-icons/ai";
  import { HiOutlineMail } from "react-icons/hi";
  
  const Footer=()=>{
    return (
      <Box
        bg={useColorModeValue("gray.50", "gray.900")}
        color={useColorModeValue("gray.700", "gray.200")}
        fontSize={14}
      >
        <Divider sx={{ borderColor: "gray.300", height: "0px" }} />
        <Container as={Stack} maxW={"100%"} py={2}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Flex justifyContent={"space-between"}>
              <Stack align={"flex-start"} marginTop={100}>
                <Link color='#000000' fontWeight="bolder">About</Link>
                <Link href={"#"}>Our story</Link>
                <Link href={"#"}>Contact us</Link>
                <Link href={"#"}>Careers</Link>
                <Link href={"#"}>Privacy policy</Link>
              </Stack>
              <Divider
                orientation="vertical"
                sx={{ height: "351px", borderColor: "gray.300" }}
              />
            </Flex>
  
            <Flex justifyContent={"space-between"}>
              <Stack align={"flex-start"} marginTop={100}>
                <Link color='#000000' fontWeight="bolder">Support</Link>
                <Link href={"#"}>Payments</Link>
                <Link href={"#"}>Returns/Exchange</Link>
                <Link href={"#"}>Shipment</Link>
                <Link href={"#"}>Terms & conditions</Link>
              </Stack>
              <Divider
                orientation="vertical"
                sx={{ borderColor: "gray.300", height: "350px" }}
              />
            </Flex>
            <Flex justifyContent={"space-between"}>
              <Stack align={"flex-start"} marginTop={100}>
                <Link color='#000000' fontWeight="bolder">Customer Care</Link>
                <Text>Timings: 10 AM - 6 PM (Mon - Sat)</Text>
                <Text>Call: +91 7011263423</Text>
                <Text>E-Mail: care@koovs.com</Text>
              </Stack>
              <Divider
                orientation="vertical"
                sx={{ borderColor: "gray.300", height: "350px" }}
              />
            </Flex>
            <Flex justifyContent={"space-between"} borderColor="#66666">
              <Stack align={"flex-start"} marginTop={100} >
                <Link color='#000000' fontWeight="bolder">Subscribe</Link>
                <Text>
                    Enter your email below to be the first to know about new collections and product launches
                </Text>
                <Stack width="100%">
                  <InputGroup>
                    <InputLeftElement
                      color="black.300"
                      pointerEvents="none"
                      children={<HiOutlineMail />}
                      fontSize="1.3em"
                    />
                    <Input placeholder="Enter your email" />
                    <InputRightElement
                      children={<AiOutlineArrowRight color="black.500" />}
                    />
                  </InputGroup>
                </Stack>
              </Stack>
            </Flex>
          </SimpleGrid>
          <Divider sx={{ borderColor: "gray.300", height: "0px" }} />
        </Container>
        <Container
          as={Stack}
          maxW={"100%"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          align={{ base: "center", md: "center" }}
          justify={{ base: "center", md: "space-between" }}
          borderColor="#66666"
        >
          <Stack direction={"row"} spacing={1}>
            <Button>
              <Link color='#000000' href={"https://www.facebook.com/koovs"}><FaFacebook /></Link>
            </Button>
            <Button>
              <Link color='#000000' href={"https://www.instagram.com/koovsfashion/"}><FaInstagram /></Link>              
            </Button>
          </Stack>
          <Text color='#000000'>© NEWBRAVE VENTURE PRIVATE LIMITED</Text>
            <Box w="22%" >
                <Image
                    src="https://cdn.shopify.com/s/files/1/0677/1464/6315/files/payment-removebg-preview-01.png?v=1668333198&width=360"
                    alt="featured_brand_logo1"
                />
            </Box>
        </Container>
      </Box>
    );
  }
  export default Footer;
  