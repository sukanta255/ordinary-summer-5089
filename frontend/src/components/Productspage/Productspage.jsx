import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  SimpleGrid,
  Spinner,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";

import { FaAngleDown, FaStar } from "react-icons/fa";
import { getData, getFullData } from "../../API/ProductRequests";
import PaginationComp from "./PaginationComp";
import { useNavigate } from "react-router-dom";

const Productspage = () => {
  const myNav = useNavigate();
  const [minVal, setMinVal] = useState(250);
  const [maxVal, setMaxVal] = useState(2500);

  //redux actions
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [error, setError] = useState(false);

  //paginate
  const [Page, setPage] = useState(1);

  const HandleSingleProduct = (id) => {
    myNav(`/products/${id}`);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const getProductsData = async () => {
    setLoading(true);
    try {
      const res = await getFullData(`?mainCategory=New%20in&page=${Page}&limit=25`);
      setLoading(false);
      setData(res.data[0]);
      setCount(res.data[1]);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log("error: ", error);
    }
  };
  useEffect(() => {
    getProductsData();
  }, [Page]);

  return loading ? (
    <Flex justifyContent={"center"} h={"600px"} w={"100%"}>
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="black.500" size="xl" />
    </Flex>
  ) : error ? (
    <Flex direction={"column"} w={"100%"} h={"600px"} justifyContent={"center"} alignItems={"center"}>
      <Image w={"400px"} src="https://user-images.githubusercontent.com/112304655/218245639-36aca8c4-66d4-4350-81f0-119fb68f7ca7.gif" />
    </Flex>
  ) : (
    <Flex w={"100%"} direction={"column"}>
      
      <Flex w={"100%"} my={"8"} justifyContent={"center"}>
        <Text as={"b"} fontSize={{ base: "4xl", sm: "5xl" }}>
          MEN NEW IN
        </Text>
      </Flex>
      <Flex px={"8"} gap={"2"} justifyContent={"flex-Start"} w={"100%"}>
        <Button fontSize={"sm"} bgColor={"white"} _hover={{ bgColor: "white" }} gap={"2"} onClick={onOpen}>
          Filter <FaAngleDown />
        </Button>
        <Button fontSize={"sm"} bgColor={"white"} _hover={{ bgColor: "white" }} gap={"2"} onClick={onOpen}>
          Featured <FaAngleDown />
        </Button>
      </Flex>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Filters</DrawerHeader>

          <DrawerBody>
            <Flex justifyContent={"space-evenly"}>
              <Text>Min :{minVal}</Text>
              <Text>Max :{maxVal}</Text>
            </Flex>
            <RangeSlider
              // aria-label={["min", "max"]}
              defaultValue={[minVal, maxVal]}
              min={0}
              max={4000}
              onChangeEnd={(val) => setMaxVal(val)}
              onChangeStart={(val) => setMinVal(val)}
            >
              <RangeSliderTrack bg="grey">
                <RangeSliderFilledTrack bg="black" />
              </RangeSliderTrack>
              <RangeSliderThumb boxSize={6} index={0}>
                <Box color="black" as={FaStar} />
              </RangeSliderThumb>
              <RangeSliderThumb boxSize={6} index={1}>
                <Box color="black" as={FaStar} />
              </RangeSliderThumb>
            </RangeSlider>
          </DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Flex px={"8"} w={"100%"} justifyContent={"flex-end"}>
        <PaginationComp page={Page} setPage={setPage} count={count} />
      </Flex>
      <SimpleGrid m={"8"} columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={"8"}>
        {data.map((el, id) => (
          <ProductCard key={id} el={el} HandleSingleProduct={HandleSingleProduct} />
        ))}
      </SimpleGrid>
      <Flex px={"8"} w={"100%"} justifyContent={"flex-end"}>
        <PaginationComp page={Page} setPage={setPage} count={count} />
      </Flex>
    </Flex>
  );
};

export default Productspage;
