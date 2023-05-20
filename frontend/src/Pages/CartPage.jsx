import { Flex, Text, Link, Image, SimpleGrid, Button, useToast, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState, useCallback } from "react";
import CartCard from "../components/CartPage/CartCard";
import paymentmethod from "../Assets/payment-methods.png";
import { deleteCartData, getCartData, patchCartData } from "../API/CartRequests";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const myNav = useNavigate();
  const toast = useToast();

  const customToast = useCallback(
    (title, description, status) => {
      toast({
        title,
        description,
        status,
        duration: 2000,
        isClosable: true,
      });
    },
    [toast]
  );

  const [empty, setEmpty] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState("");
  const [priceTotal, setPriceTotal] = useState(0);

  const retriveUserCartData = useCallback(
    async (token) => {
      setLoading(true);
      const res = await getCartData(token);
      if (!res.status) {
        setEmpty(true);
        setLoading(false);
        customToast(res.error, "", "info");
        if (res.error === "Session End, Please Login Again...") {
          customToast("Redirecting...", "", "warning");
          return setTimeout(() => {
            myNav("/login");
          }, 2000);
        }
      }

      res.data.products.map(async (el) => {
        await setPriceTotal(0);
        await setPriceTotal((prev) => prev + el.product.price * el.quantity);
      });

      if (res.data.products.length === 0) {
        setEmpty(true);
      }

      setLoading(false);
      setData(res.data);
    },
    [customToast, myNav]
  );

  useEffect(() => {
    setToken(localStorage.getItem("token") || "");
  }, []);

  useEffect(() => {
    const myTokenVerify = localStorage.getItem("token") || "";
    if (!myTokenVerify) {
      setEmpty(true);
      customToast("Session Error", "Please Login again, Redirecting...");
      setTimeout(() => {
        myNav("/login");
      }, 2000);
    } else {
      retriveUserCartData(myTokenVerify);
    }
  }, [customToast, myNav, retriveUserCartData]);

  const deleteCartProduct = async (cartProductId) => {
    const res = await deleteCartData(data._id, cartProductId, token);
    if (!res.status) {
      setEmpty(true);
      setLoading(false);
      return customToast(res.error, "", "error");
    }
    if (data.products.length === 0) {
      setEmpty(true);
    }
    setLoading(false);
    customToast("Product Removed", "", "info");
    retriveUserCartData(token);
  };

  const saveQuantity = async (id, quantity) => {
    const res = await patchCartData(id, { quantity: +quantity }, token);
    if (res.status) {
      customToast("Updated Successfully", "Quantity Updated", "success");
      retriveUserCartData(token);
      return res.status;
    }
    customToast("Updated Failed", "Internal Server Error", "error");
    return res.status;
  };

  const handlePaymentPage = () => {
    myNav("/payment");
  };
  return (
    <Flex direction={"column"} justifyContent={"center"} alignItems={"center"} w={"100%"}>
      {empty ? (
        <>
          <Image w={"300px"} src="https://cdn.dribbble.com/users/665029/screenshots/16162764/media/3ea69cb1655fba401acc6c4328d38633.gif" alt="Cart is empty" />
          <Text as={"b"}>
            Cart is Empty
            <Link ml={3} color={"gray.500"} href={"/products"}>
              Checkout New Products
            </Link>
          </Text>
        </>
      ) : loading ? (
        <Flex height={"300px"} justifyContent={"center"} alignItems={"center"}>
          <Spinner />
        </Flex>
      ) : (
        <Flex direction={["column", "column", "column", "row"]} m={8} gap={12}>
          <SimpleGrid columns={[2, 4, 1]} spacing={4}>
            {data.products?.map((el) => {
              return <CartCard key={el._id} data={el} deleteCartProduct={deleteCartProduct} saveQuantity={saveQuantity} />;
            })}
          </SimpleGrid>
          <Flex justifyContent={"flex-start"} alignItems={"flex-start"}>
            <Flex maxW={"450px"} boxShadow={"2xl"} borderRadius={8}>
              <Flex w={"100%"} p={4} m={4} bgColor={"white"} boxShadow={"md"} border={"2px solid gray"} direction={"column"} gap={4} borderRadius={8}>
                <Text fontSize={"2xl"}>Order Summary</Text>
                <Text>Total items : {data?.products?.length}</Text>
                <Text as={"b"}>Total Price : {priceTotal}$</Text>
                <Text>Shipping Charges : 10$</Text>

                <Text as={"b"} borderTop={"2px solid gray"}>
                  Order Total {priceTotal + 10}$
                </Text>

                <Button width={"100%"} onClick={handlePaymentPage} bgColor={"black"} color={"white"} _hover={{ bgColor: "blue.500" }}>
                  Proceed to Checkout
                </Button>
                <Flex justifyContent={"center"}>
                  <Image textAlign={"center"} w={"80%"} src={paymentmethod} alt="Valid Payment Methods" />
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default CartPage;
