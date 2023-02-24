import { Box, Flex, useRadio } from "@chakra-ui/react";
import React from "react";

const SizeBar = (props) => {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Flex
        {...checkbox}
        cursor="pointer"
        borderWidth="2px"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          bg: "black",
          color: "white",
          borderColor: "black",
        }}
        w={"45px"}
        h={"45px"}
        justifyContent={"center"}
        alignItems={"center"}
        fontSize={"20px"}
      >
        {props.children}
      </Flex>
    </Box>
  );
};

export default SizeBar;
