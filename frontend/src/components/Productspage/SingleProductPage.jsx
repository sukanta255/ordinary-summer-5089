import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  Hide,
  HStack,
  IconButton,
  Image,
  PinInput,
  PinInputField,
  Show,
  Spinner,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useRadioGroup,
  useToast,
} from "@chakra-ui/react";
import React, { useCallback, useEffect, useState } from "react";
import { BsFillEyeFill, BsPlus, BsStar } from "react-icons/bs";
import { AiOutlineMinus } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import SizeBar from "./SizeBar";
import { getFullData } from "../../API/ProductRequests";
import { cloth, color, descBox, imgBox, price, qty, singleProd, tabs, total, views } from "../../Styles/SingleProductStyles";
import { postCartData } from "../../API/CartRequests";

const SingleProductPage = () => {
  const toast = useToast();
  const myNav = useNavigate();
  const { id } = useParams();

  //redux actions
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);
  const [quantity, setQuantity] = useState("1");
  const [size, setSize] = useState("S");
  const [token, setToken] = useState("");
  const [cartLoading, setCartLoading] = useState(false);

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);

  const getProductsData = useCallback(async () => {
    setLoading(true);
    try {
      const res = await getFullData(`/${id}`);
      setLoading(false);
      setData(res.data);
    } catch (error) {
      setLoading(false);
      setError(true);
      console.log("error: ", error);
    }
  }, [id]);

  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  const handleQuantity = (val) => {
    setQuantity((prev) => `${+prev + val}`);
  };

  const [randomViewer, SetRandomViewer] = useState(23);

  const customToast = (type, title, description, status_color) => {
    if (type === 1) {
      toast({
        title,
        description,
        status: status_color,
        duration: 2000,
        isClosable: true,
      });
    } else if (type === 2) {
      toast({
        position: "bottom-left",
        render: () => (
          <Box color={"white"} p={3} bg={`${status_color}.500`}>
            {title}
          </Box>
        ),
      });
    }
  };

  //Dummy View Users
  /* --> Difference of 26-18, multiplied to random number, got its floor value, added min value */
  useEffect(() => {
    const viewerID = setInterval(() => {
      SetRandomViewer(Math.floor(Math.random() * 8) + 18);
    }, 13000);
    return () => clearInterval(viewerID);
  }, []);

  //Quantity

  const handleAddToCart = async (e) => {
    e.preventDefault();
    setCartLoading(true);
    if (!token) {
      customToast(1, "Please Login First", "Redirecting...", "warning");
      return setTimeout(() => {
        myNav("/login");
      }, 1500);
    }
    const res = await postCartData(
      {
        productId: data._id,
        quantity: +quantity,
        size,
      },
      token
    );
    if (res.status) {
      setCartLoading(false);
      return customToast(2, "Item Added Into Cart", "", "green");
    }
    customToast(2, res.error, "", "red");
    return setCartLoading(false);
  };

  /* Cloth Sizes Can be Picked by the console.log */
  const options = ["S", "M", "L", "XL"];
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "size",
    defaultValue: "S",
    onChange: setSize,
  });
  const group = getRootProps();

  return loading ? (
    <Flex {...singleProd.loading_main}>
      <Spinner {...singleProd.spinner} />
    </Flex>
  ) : error ? (
    <Flex {...singleProd.error}>
      <Image {...singleProd.errImg} />
    </Flex>
  ) : (
    <form onSubmit={handleAddToCart}>
      <Flex {...singleProd.main}>
        {/* Main Box */}
        <Flex {...singleProd.subMain}>
          {/* Image Box */}
          <Flex {...imgBox.main}>
            <Show {...imgBox.show}>
              <Flex {...imgBox.wrapper}>
                <Image src={data.image} {...imgBox.img} />
              </Flex>
              <Divider orientation="vertical" />
            </Show>
            <Flex {...imgBox.icoMain}>
              <Flex {...imgBox.icoSubMain}>
                <Image src={data.image} {...imgBox.brokeImg} />
                <Hide {...imgBox.hide}>
                  <IconButton icon={<BsStar />} {...imgBox.iconBtn} />
                </Hide>
              </Flex>
            </Flex>
          </Flex>
          {/* Description Box */}
          <Flex {...descBox.main}>
            {/* Title and wishlist button */}
            <Flex {...descBox.titleMain}>
              <Text {...descBox.text}>{data.description}</Text>
              <Show {...descBox.show}>
                <IconButton icon={<BsStar />} {...descBox.icon} />
              </Show>
            </Flex>
            {/* price Section */}
            <Flex {...price.main}>
              <Text {...price.price}>$ {data.price}</Text>
              {data.reducedPrice ? <Text {...price.priceReduced}>$ {data.reducedPrice}</Text> : null}
            </Flex>
            {/* Dummy View Users  */}
            <Flex {...views.main}>
              <BsFillEyeFill style={{ color: "gray" }} />
              <Text {...views.text}>{randomViewer} people are viewing this right now</Text>
            </Flex>
            {/* Cloth Sizes */}
            <Flex {...cloth.main}>
              <Text {...cloth.text}>Size: {size}</Text>
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
              <Flex {...color.main}>
                <Text {...color.text}>Color: {data?.colour}</Text>
                <Flex {...color.color} bgColor={data?.colour}></Flex>
              </Flex>
            ) : null}

            {/* Quantity Section */}
            <Flex {...qty.main}>
              <Text {...qty.text}>Quantity</Text>
              <Flex {...qty.sub}>
                <IconButton {...qty.incBtn} isDisabled={quantity === "6"} icon={<BsPlus style={{ fontSize: "24px" }} />} onClick={() => handleQuantity(+1)} />
                <FormControl>
                  <PinInput value={quantity} onChange={(e) => setQuantity(e.target.value)}>
                    <PinInputField />
                  </PinInput>
                </FormControl>
                <IconButton {...qty.decBtn} isDisabled={quantity === "1"} icon={<AiOutlineMinus />} onClick={() => handleQuantity(-1)} />
              </Flex>
            </Flex>
            {/* Total Amount Based on Quantity */}
            <Flex {...total.main}>
              <Text {...total.head}>Total Price</Text>
              <Text {...total.text}>{data.price * quantity}$</Text>
            </Flex>
            {/* Add to Cart Btn */}
            <Button isDisabled={cartLoading} {...total.submitBtn}>
              {cartLoading ? <Spinner /> : "Add to Cart"}
            </Button>
          </Flex>
        </Flex>
        {/** Tabs View */}
        <Flex {...tabs.main}>
          <Tabs align="center">
            <TabList>
              <Tab>Product Description</Tab>
              <Tab>Shipping & Return</Tab>
              <Tab>Material & Care</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Flex {...tabs.panel}>
                  <Text>{data.productDescription}</Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex {...tabs.panel2}>
                  <Text fontSize={"sm"}>India-wide Shipping Average time: 4-6 days after the order confirmation.</Text>
                  <Text as={"b"}>SHIPPING POLICY</Text>
                  <Text fontSize={"sm"}>
                    Any product bought from https://koovs.com, will be shipped to the cusrtomer maximum within 4 to 6 days. In case of any exceptions, due to non-availability of a
                    certain product, we will inform the customer through the email id provided in the customer registration form.
                  </Text>
                  <Text fontSize={"sm"}>
                    If an item in your order isn’t immediately available in our warehouse, then please allow 1 to 2 weeks for your purchase to be processed. Your order may be
                    processed in multiple shipments, in which case you will be notified of the tracking number when each shipment occurs.
                  </Text>
                  <Text fontSize={"sm"}>Any COD orders, if available, will be charged extra @ INR 100 Flat. </Text>
                  <Text as={"b"}>RETURN/EXHANGE POLICY</Text>
                  <Text fontSize={"sm"}>
                    Koovs has a flat 7 days return policy to all our customers. You can conveniently return or exchange any item within 7 days from the date of receipt of the
                    product. To initiate return or exchange, mail us at care@koovs.com
                  </Text>
                </Flex>
              </TabPanel>
              <TabPanel>
                <Flex {...tabs.panel3}>
                  <Text>Wash inside out</Text>
                  <Text>Wash with similar colours</Text>
                </Flex>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
      </Flex>
    </form>
  );
};

export default SingleProductPage;
