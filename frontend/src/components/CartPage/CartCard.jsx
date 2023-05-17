import { Flex, FormControl, IconButton, Image, PinInput, PinInputField, Text, useToast } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { qty } from "../../Styles/SingleProductStyles";
import { AiOutlineMinus } from "react-icons/ai";
import { BsPlus } from "react-icons/bs";
import { patchCartData } from "../../API/CartRequests";

const CartCard = ({ data, deleteCartProduct, saveQuantity }) => {
  const {
    product: { brandName, description, image, price },
    quantity,
    _id,
  } = data;

  const [token, setToken] = useState("");
  const [quantityState, setQuantityState] = useState("" + quantity);
  const [hideSaveBtn, setHideSaveBtn] = useState(true);

  const toast = useToast();

  const customToast = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 2000,
      isClosable: true,
    });
  };

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);

  const handleQuantity = (val) => {
    setQuantityState((prev) => `${+prev + val}`);
    setHideSaveBtn(false);
  };
  const handleSaveQuantity = async () => {
    saveQuantity(data._id, quantityState);
    setHideSaveBtn(true);
  };

  const handleDeleteCartProduct = () => {
    deleteCartProduct(_id);
  };
  return (
    <Flex direction={["column", "column", "row"]} borderBottom={"2px solid gray"} gap={[4, 4, 12]} justifyContent={["flex-start", "flex-start", "center"]} alignItems={"center"}>
      <Image flex={1} w={"100px"} src={image} alt="Product Image" />
      <Flex flex={3} direction={"column"}>
        <Text as={"b"}>{description}</Text>
        <Text>Brand: {brandName}</Text>
        <Text fontSize={"sm"} as={"b"}>
          Price: {price}$
        </Text>
      </Flex>
      <Flex flex={1} {...qty.main} gap={2}>
        <Text {...qty.text}>Quantity</Text>
        <Flex {...qty.sub}>
          <IconButton {...qty.incBtn} isDisabled={quantityState === "6"} icon={<BsPlus style={{ fontSize: "24px" }} />} onClick={() => handleQuantity(+1)} />
          <FormControl>
            <PinInput value={quantityState} onChange={(e) => setQuantityState(e.target.value)}>
              <PinInputField />
            </PinInput>
          </FormControl>
          <IconButton {...qty.decBtn} isDisabled={quantityState === "1"} icon={<AiOutlineMinus />} onClick={() => handleQuantity(-1)} />
        </Flex>
      </Flex>

      <Flex flex={1} flexDirection={"column"} textAlign={"left"} gap={4}>
        <Text onClick={handleDeleteCartProduct} as={"b"} color={"gray"} _hover={{ color: "black", textDecoration: "underline" }} cursor={"pointer"}>
          Remove Item
        </Text>
        <Text
          display={hideSaveBtn ? "none" : "block"}
          as={"b"}
          color={"gray"}
          _hover={{ color: "black", textDecoration: "underline" }}
          cursor={"pointer"}
          onClick={handleSaveQuantity}
        >
          Save
        </Text>
      </Flex>
    </Flex>
  );
};

export default CartCard;
