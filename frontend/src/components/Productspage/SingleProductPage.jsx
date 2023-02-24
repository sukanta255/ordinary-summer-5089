import { Divider, Flex, Heading, Hide, HStack, IconButton, Image, Show, Text, useRadioGroup } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { BsFillEyeFill, BsStar } from "react-icons/bs";
import { useParams } from "react-router-dom";
import SizeBar from "./SizeBar";

const SingleProductPage = () => {
  const { _id } = useParams();

  const [randomViewer, SetRandomViewer] = useState(23);

  //Dummy View Users
  /* --> Difference of 26-18, multiplied to random number, got its floor value, added min value */
  useEffect(() => {
    const viewerID = setInterval(() => {
      SetRandomViewer((prev) => Math.floor(Math.random() * 8) + 18);
    }, 13000);
    return () => clearInterval(viewerID);
  }, []);

  // Make a request using ID and get object
  const data = {
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
  };

  /* Cloth Sizes Can be Picked by the console.log */
  const options = ["S", "M", "L", "XL"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "size",
    defaultValue: "S",
    onChange: console.log,
  });
  const group = getRootProps();
  return (
    <Flex direction={"column"} w={"100%"}>
      <Heading>SingleProductPage</Heading>
      {/* Main Box */}
      <Flex mx={"12"} mt={"8"} direction={{ base: "column", sm: "column", md: "row" }}>
        {/* Image Box */}
        <Flex flex={1}>
          <Show above={"md"}>
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
          <Flex>
            <Text as={"b"} mb={"2"}>
              Quantity
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SingleProductPage;
