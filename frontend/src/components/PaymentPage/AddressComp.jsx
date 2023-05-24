import { Button, Flex, Input, Spinner, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const AddressComp = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (load) {
      setTimeout(() => {
        setLoad(false);
      }, 1000);
    }
  }, [load]);

  const handleSubmit = () => {
    setLoad(true);
  };

  return (
    <>
      <Flex p={"5"} w={{ base: "100%", md: "100%", lg: "50%" }} direction={"column"}>
        <Text mb={"4"} align={"left"} as={"b"} fontSize={"lg"}>
          Please Fill Address Details
        </Text>

        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          Name
        </Text>
        <Flex w={"100%"} gap={"4"}>
          <Input placeholder="First Name" />
          <Input placeholder="Last name" />
        </Flex>
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          House No
        </Text>
        <Input placeholder="House No" />
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          Street
        </Text>
        <Input placeholder="Street" />
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          City
        </Text>
        <Input placeholder="City" />
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          State
        </Text>
        <Input placeholder="State" />
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          Country
        </Text>
        <Input placeholder="Country" />
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          Pincode
        </Text>
        <Input placeholder="Pincode" />
        <Text mt={"2"} align={"left"} as={"b"} fontSize={"sm"}>
          Mobile No.
        </Text>
        <Input placeholder="Mobile No." />
        <Button onClick={handleSubmit} my={"4"} _hover={{ color: "Black", backgroundColor: "white" }} borderRadius={"0px"} color={"white"} bgColor={"black"}>
          {load ? <Spinner size="sm" /> : "Set Address"}
        </Button>
      </Flex>
    </>
  );
};

export default AddressComp;
