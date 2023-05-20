import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import CardDetails from "../components/PaymentPage/CardDetails";
import AddressComp from "../components/PaymentPage/AddressComp";

const PaymentPage = () => {
  return (
    <Flex w={"100%"} direction={"column"} justifyContent={"center"}>
      <Flex w={"100%"} my={"8"} justifyContent={"center"}>
        <Text as={"b"} fontSize={{ base: "4xl", sm: "5xl" }}>
          Payment
        </Text>
      </Flex>
      <Flex direction={["column", "column", "row"]} justifyContent={"center"}>
        <AddressComp />
        <CardDetails />
      </Flex>
    </Flex>
  );
};

export default PaymentPage;
