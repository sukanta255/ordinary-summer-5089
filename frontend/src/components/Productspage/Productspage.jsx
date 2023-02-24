import React, { useState } from "react";
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
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  SimpleGrid,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import ProductCard from "./ProductCard";

import { FaAngleDown, FaStar } from "react-icons/fa";

const Productspage = () => {
  const data = [
    {
      id: "203957880",
      price: "45.95",
      description: "Pull&Bear roll neck jumper in black",
      image: "https://images.asos-media.com/products/pullbear-roll-neck-jumper-in-black/203957880-1-black",
      badgeType: "MixMatch",
      productType: "Product",
      colourWayId: "203957882",
      isSale: true,
      reducedPrice: "39.40",
      hasMultiplePrices: true,
      isOutlet: true,
      isSellingFast: true,
      colour: "red",
      categoryName: "New in",
      mainCategory: "New in",
      brandName: "Pullbear",
      productRating: "3",
      productDescription: "Jumpers & Cardigans by Pull&BearThe soft stuffPlain designRoll-neckLong sleevesRegular fit",
    },
    {
      id: "203957880",
      price: "45.95",
      description: "Pull&Bear roll neck jumper in black",
      image: "https://images.asos-media.com/products/pullbear-roll-neck-jumper-in-black/203957880-1-black",
      badgeType: "MixMatch",
      productType: "Product",
      colourWayId: "203957882",
      isSale: false,
      reducedPrice: "39.40",
      hasMultiplePrices: false,
      isOutlet: true,
      isSellingFast: true,
      colour: "blue",
      categoryName: "New in",
      mainCategory: "New in",
      brandName: "Pullbear",
      productRating: "3",
      productDescription: "Jumpers & Cardigans by Pull&BearThe soft stuffPlain designRoll-neckLong sleevesRegular fit",
    },
    {
      id: "203957880",
      price: "45.95",
      description: "Pull&Bear roll neck jumper in black",
      image: "https://images.asos-media.com/products/pullbear-roll-neck-jumper-in-black/203957880-1-black",
      badgeType: "MixMatch",
      productType: "Product",
      colourWayId: "203957882",
      isSale: true,
      reducedPrice: "39.40",
      hasMultiplePrices: true,
      isOutlet: true,
      isSellingFast: false,
      colour: "lightgreen",
      categoryName: "New in",
      mainCategory: "New in",
      brandName: "Pullbear",
      productRating: "3",
      productDescription: "Jumpers & Cardigans by Pull&BearThe soft stuffPlain designRoll-neckLong sleevesRegular fit",
    },
    {
      id: "203957880",
      price: "45.95",
      description: "Pull&Bear roll neck jumper in black",
      image: "https://images.asos-media.com/products/pullbear-roll-neck-jumper-in-black/203957880-1-black",
      badgeType: "",
      productType: "Product",
      colourWayId: "203957882",
      isSale: true,
      reducedPrice: "39.40",
      hasMultiplePrices: true,
      isOutlet: true,
      isSellingFast: false,
      colour: "lightblue",
      categoryName: "New in",
      mainCategory: "New in",
      brandName: "Pullbear",
      productRating: "3",
      productDescription: "Jumpers & Cardigans by Pull&BearThe soft stuffPlain designRoll-neckLong sleevesRegular fit",
    },
  ];
  const [minVal, setMinVal] = useState(250);
  const [maxVal, setMaxVal] = useState(2500);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Flex w={"100%"} direction={"column"}>
      <Flex w={"100%"} my={"8"} justifyContent={"center"}>
        <Text as={"b"} fontSize={{base:"4xl",sm:"5xl"}}>
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
              <Text>Min: {minVal}</Text>
              <Text>Max: {maxVal}</Text>
            </Flex>
            <RangeSlider
              // aria-label={["min", "max"]}
              defaultValue={[minVal, maxVal]}
              min={0}
              max={4000}
              onChangeEnd={(val) => {
                setMaxVal(val[1]);
              }}
              onChangeStart={(val) => {
                setMinVal(val[0]);
              }}
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
      <SimpleGrid m={"8"} columns={{ base: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={"8"}>
        {data.map((el, id) => (
          <ProductCard key={id} el={el} />
        ))}
      </SimpleGrid>
    </Flex>
  );
};

export default Productspage;
