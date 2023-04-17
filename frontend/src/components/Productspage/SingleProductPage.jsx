import {
  Box,
  Divider,
  Flex,
  FormControl,
  Heading,
  Hide,
  HStack,
  IconButton,
  Image,
  Input,
  PinInput,
  PinInputField,
  Show,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useRadioGroup,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillEyeFill, BsPlus, BsStar } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { useParams } from "react-router-dom";
import SizeBar from "./SizeBar";
import { useForm } from "react-hook-form";
import { getFullData } from "../../API/ProductRequests";

const SingleProductPage = () => {
  const toast = useToast();

  //redux actions
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState("1");

  const myData = JSON.parse(localStorage.getItem("cartItems")) || [];

  const { id } = useParams();

  const getProductsData = async () => {
    setLoading(true);
    try {
      const res = await getFullData(`?_id=${id}`);
      setLoading(false);
      setData(res.data[0][0]);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log("error: ", error);
    }
  };

  const handleQuantity = (val) => {
    setQuantity((prev) => `${+prev + val}`);
  };

  useEffect(() => {
    getProductsData();
  }, []);

  const [randomViewer, SetRandomViewer] = useState(23);

  //Dummy View Users
  /* --> Difference of 26-18, multiplied to random number, got its floor value, added min value */
  useEffect(() => {
    const viewerID = setInterval(() => {
      SetRandomViewer(Math.floor(Math.random() * 8) + 18);
    }, 13000);
    return () => clearInterval(viewerID);
  }, []);

  //Queantity
  const { register } = useForm();
  const onSubmit = (e) => {
    e.preventDefault();
    if (myData.length === 0) {
      localStorage.setItem("cartItems", JSON.stringify([...myData, { ...data, quantity: +quantity }]));
    } else {
      let checkData = myData.map((el, id) => {
        if (el._id === data._id) {
          return { ...el, quantity: el.quantity + +quantity };
        } else {
          return { ...el, quantity: +quantity };
        }
      });
      localStorage.setItem("cartItems", JSON.stringify(checkData));
    }
    toast({
      position: "bottom-left",
      render: () => (
        <Box color="white" p={3} bg="blackAlpha.900">
          Item Added Into Cart
        </Box>
      ),
    });
  };

  /* Cloth Sizes Can be Picked by the console.log */
  const options = ["S", "M", "L", "XL"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "size",
    defaultValue: "S",
    onChange: console.log,
  });
  const group = getRootProps();

  return loading ? (
    <Flex justifyContent={"center"} h={"600px"} w={"100%"}>
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="black.500" size="xl" />
    </Flex>
  ) : error ? (
    <Flex direction={"column"} w={"100%"} h={"600px"} justifyContent={"center"} alignItems={"center"}>
      <Image w={"400px"} src="https://user-images.githubusercontent.com/112304655/218245639-36aca8c4-66d4-4350-81f0-119fb68f7ca7.gif" />
    </Flex>
  ) : (
    <form onSubmit={onSubmit}>
      <Flex direction={"column"} w={"100%"}>
        <Heading>SingleProductPage</Heading>
        {/* Main Box */}
        <Flex mx={"12"} mt={"8"} direction={{ base: "column", sm: "column", md: "row" }}>
          {/* Image Box */}
          <Flex flex={1}>
            <Show above={"lg"}>
              <Flex flex={1} direction={"column"} justifyContent={"flex-start"} alignItems={"center"}>
                <Image p={"3"} src={data.image} alt={"Broken Data"} w={"100%"} />
              </Flex>
              <Divider orientation="vertical" />
            </Show>
            <Flex flex={4}>
              <Flex w={"100%"} position={"relative"}>
                <Image p={"3"} src={data.image} alt={"Broken Data"} w={"100%"} />
                <Hide above="md">
                  <IconButton
                    position={"absolute"}
                    top={"30px"}
                    left={"30px"}
                    transition={"550ms"}
                    icon={<BsStar />}
                    borderRadius={"50%"}
                    bgColor={"white"}
                    _hover={{ color: "white", bgColor: "black" }}
                  />
                </Hide>
              </Flex>
            </Flex>
          </Flex>
          {/* Description Box */}
          <Flex flex={1} my={"8"} direction={"column"} justifyContent={"flex-start"}>
            {/* Title and wishlist button */}
            <Flex justifyContent={"space-between"}>
              <Text as={"b"} textTransform={"capitalize"} letterSpacing={"2px"} noOfLines={"2"} fontSize={{ base: "xl", sm: "2xl" }}>
                {data.description}
              </Text>
              <Show above="md">
                <IconButton transition={"550ms"} icon={<BsStar />} borderRadius={"50%"} bgColor={"white"} _hover={{ color: "white", bgColor: "black" }} />
              </Show>
            </Flex>
            {/* price Section */}
            <Flex gap={3} my={"3"}>
              <Text as={"b"} textTransform={"capitalize"} letterSpacing={"2px"} noOfLines={"2"} fontSize={"lg"}>
                $ {data.price}
              </Text>
              {data.reducedPrice ? (
                <Text as={"s"} textTransform={"capitalize"} color={"grey"} letterSpacing={"2px"} noOfLines={"2"} fontSize={"lg"}>
                  $ {data.reducedPrice}
                </Text>
              ) : null}
            </Flex>
            {/* Dummy View Users  */}
            <Flex my={3} gap={"4"} alignItems={"center"}>
              <BsFillEyeFill style={{ color: "gray" }} />
              <Text color={"gray"} textTransform={"capitalize"} noOfLines={"2"} fontSize={"sm"}>
                {randomViewer} people are viewing this right now
              </Text>
            </Flex>
            {/* Cloth Sizes */}
            <Flex my={"3"} direction={"column"}>
              <Text as={"b"} mb={"2"}>
                Size: S
              </Text>
              <HStack {...group}>
                {options.map((value) => {
                  const radio = getRadioProps({ value });
                  return (
                    <SizeBar key={value} {...radio}>
                      {value}
                    </SizeBar>
                  );
                })}
              </HStack>
            </Flex>

            {/* Color Section */}
            {data?.colour ? (
              <Flex my={"3"} direction={"column"}>
                <Text as={"b"} mb={"2"}>
                  Color: {data?.colour}
                </Text>
                <Flex mt={"1"} w={"10"} h={"10"} border={"4px solid white"} boxShadow={"outline"} borderRadius={"50%"} bgColor={data?.colour}></Flex>
              </Flex>
            ) : null}

            {/* Quantity Section */}
            <Flex direction={"column"} alignItems={"flex-start"}>
              <Text as={"b"} mb={"2"}>
                Quantity
              </Text>
              <Flex justifyContent={"flex-start"}>
                <IconButton
                  isDisabled={quantity === "6"}
                  transition={"550ms"}
                  icon={<BsPlus style={{ fontSize: "24px" }} />}
                  bgColor={"white"}
                  _hover={{ color: "white", bgColor: "black" }}
                  onClick={() => handleQuantity(+1)}
                />
                <FormControl>
                  <PinInput value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                    <PinInputField {...register("firstName", { min: 1, max: 15 })} />
                  </PinInput>
                </FormControl>
                <IconButton
                  isDisabled={quantity === "1"}
                  transition={"550ms"}
                  icon={<AiOutlineMinus />}
                  bgColor={"white"}
                  _hover={{ color: "white", bgColor: "black" }}
                  onClick={() => handleQuantity(-1)}
                />
              </Flex>
            </Flex>
            {/* Add to Cart Btn */}
            <Input mt={"8"} type={"submit"} value={"Add to Cart"} borderColor={"black"} bgColor={"black"} color={"white"} _hover={{ bgColor: "white", color: "black" }} />
          </Flex>
        </Flex>
        <Flex mx={"12"} mt={"8"} direction={"column"}>
          <Tabs align="center">
            <TabList>
              <Tab>Product Description</Tab>
              <Tab>Shipping & Return</Tab>
              <Tab>Material & Care</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex w={"100%"} direction={"column"} alignItems={"flex-start"}>
                  <Text>{data.productDescription}</Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex direction={"column"} alignItems={"center"}>
                  <Text fontSize={"sm"}>India-wide Shipping Average time: 4-6 days after the order confirmation.</Text>
                  <Text as={"b"}>SHIPPING POLICY</Text>
                  <Text fontSize={"sm"}>
                    Any product bought from https://koovs.com, will be shipped to the cusrtomer maximum within 4 to 6 days. In case of any exceptions, due to non-availability of a
                    certain product, we will inform the customer through the email id provided in the customer registration form.
                  </Text>
                  <Text fontSize={"sm"}>
                    If an item in your order isn’t immediately available in our warehouse, then please allow 1 to 2 weeks for your purchase to be processed. Your order may be
                    processed in multiple shipments, in which case you will be notified of the tracking number when each shipment occurs.
                  </Text>
                  <Text fontSize={"sm"}>Any COD orders, if available, will be charged extra @ INR 100 Flat. </Text>
                  <Text as={"b"}>RETURN/EXHANGE POLICY</Text>
                  <Text fontSize={"sm"}>
                    Koovs has a flat 7 days return policy to all our customers. You can conveniently return or exchange any item within 7 days from the date of receipt of the
                    product. To initiate return or exchange, mail us at care@koovs.com
                  </Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex w={"100%"} direction={"column"} alignItems={"flex-start"}>
                  <Text>Wash inside out</Text>
                  <Text>Wash with similar colours</Text>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </form>
  );
};

export default SingleProductPage;
