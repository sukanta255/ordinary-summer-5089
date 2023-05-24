import React, { useCallback, useEffect, useState } from "react";
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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Radio,
  RadioGroup,
  AccordionIcon,
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
  Stack,
} from "@chakra-ui/react";
import ProductCard from "../components/Productspage/ProductCard";

import { FaAngleDown, FaStar } from "react-icons/fa";
import { getFullData } from "../API/ProductRequests";
import PaginationComp from "../components/Productspage/PaginationComp";
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
  const [sortPrice, setSortPrice] = useState("");
  const [filterBrand, setFilterBrand] = useState("");

  //paginate
  const [Page, setPage] = useState(1);

  const HandleSingleProduct = (id) => {
    myNav(`/products/${id}`);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const getProductsData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getFullData(`?mainCategory=New%20in&page=${Page}&limit=25`);
      setLoading(false);
      setData(res.data.data);
      setCount(res.data.count);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log("error: ", error);
    }
  }, [Page]);
  useEffect(() => {
    getProductsData();
  }, [getProductsData, Page]);

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
            <Accordion allowMultiple defaultIndex={[0, 1]}>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Filter by Brand
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup onChange={setFilterBrand} value={filterBrand}>
                    <Stack direction="column">
                      <Radio value="">default</Radio>
                      <Radio value="Kickers">Kickers</Radio>
                      <Radio value="Adpt">Adpt</Radio>
                      <Radio value="Koovs-Design">Koovs-Design</Radio>
                      <Radio value="Nike">Nike</Radio>
                      <Radio value="Fred-Perry">Fred-Perry</Radio>
                      <Radio value="Jack-Jones">Jack-Jones</Radio>
                      <Radio value="Calvin-Klein">Calvin-Klein</Radio>
                      <Radio value="Tommy-Hilfiger">Tommy-Hilfiger</Radio>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Sort by Price
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <RadioGroup onChange={setSortPrice} value={sortPrice}>
                    <Stack direction="column">
                      <Radio value="">default</Radio>
                      <Radio value="-1">High to Low</Radio>
                      <Radio value="1">Low to High</Radio>
                    </Stack>
                  </RadioGroup>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
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
