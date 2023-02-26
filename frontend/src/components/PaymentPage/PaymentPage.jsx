import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import CardDetails from "./CardDetails";

const PaymentPage = () => {
  return (
    <Flex w={"100%"} direction={"column"}>
      <Flex w={"100%"} my={"8"} justifyContent={"center"}>
        <Text as={"b"} fontSize={{ base: "4xl", sm: "5xl" }}>
          Payment
        </Text>
      </Flex>
      <CardDetails />
    </Flex>
  );
};

export default PaymentPage;
