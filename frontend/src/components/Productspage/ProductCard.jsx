import { Flex, IconButton, Image, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { BsStar } from "react-icons/bs";

const ProductCard = ({ el, HandleSingleProduct }) => {
  const [isVisible, setIsVisible] = useState(false);


  const over = (e) => {
    setIsVisible(true);
  };
  const out = (e) => {
    setIsVisible(false);
  };
  return (
    <Flex direction={"column"} onClick={() => HandleSingleProduct(el._id)}>
      <Flex position={"relative"} onMouseOver={over} onMouseOut={out}>
        <Image src={el.image} w={"100%"} alt={"Broken Data"} />
        <IconButton
          zIndex={"5"}
          transition={"1000ms"}
          display={isVisible ? "flex" : "none"}
          icon={<BsStar />}
          borderRadius={"50%"}
          position={"absolute"}
          bgColor={"white"}
          _hover={{ color: "white", bgColor: "black" }}
          top={"10px"}
          left={"10px"}
        />
        <Flex position={"absolute"} top={"10px"} left={"60%"} direction={"column"} gap={"1"} justifyContent={"center"} alignItems={"flex-end"}>
          {el.isSale ? (
            <Text px={"3"} bgColor={"black"} color={"white"} fontSize={"sm"}>
              Sale
            </Text>
          ) : null}
          {el.badgeType ? (
            <Text px={"3"} bgColor={"grey"} color={"white"} fontSize={"sm"}>
              MisMatch
            </Text>
          ) : null}
          {el.badgeType ? (
            <Text borderRadius={"10"} px={"3"} bgColor={"red"} color={"white"} fontSize={"sm"}>
              Hot
            </Text>
          ) : null}
        </Flex>
      </Flex>
      <Flex justifyContent={"space-between"} mt={"4"}>
        <Text fontSize={"sm"} color={"grey"}>
          {el.brandName}
        </Text>
      </Flex>
      <Text noOfLines={1} as={"b"}>
        {el.description}
      </Text>
      {el.reducedPrice ? (
        <Flex gap={"5"}>
          <Text>$ {el.reducedPrice}</Text>
          <Text color={"grey"} as={"s"}>
            $ {el.price}
          </Text>
        </Flex>
      ) : (
        <Text>$ {el.price}</Text>
      )}
      {el.colour ? <Flex mt={"1"} w={"6"} h={"6"} borderRadius={"50%"} bgColor={el.colour}></Flex> : null}
    </Flex>
  );
};

export default ProductCard;
