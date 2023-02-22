import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const ProductCard = ({ el }) => {
  return (
    <Flex direction={"column"}>
      <Image src={el.image} alt={"Broken Data"} />
      <Flex justifyContent={"space-between"} mt={"4"}>
        <Text fontSize={"sm"} color={"grey"}>
          {el.brandName}
        </Text>
        <Flex>
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
            <Text px={"3"} bgColor={"red"} color={"white"} fontSize={"sm"}>
              Hot
            </Text>
          ) : null}
        </Flex>
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
