import axios from "axios";

const BaseURL = `http://localhost:4100/cart`;

export const getCartData = async (userID) => {
  try {
    return await axios.get(`${BaseURL}?user=${userID}`);
  } catch (err) {
    console.log("err: ", err);
    return err;
  }
};

export const postCartData = async (obj, userId) => {
  try {
    return await axios.post(`${BaseURL}/${userId}`, obj);
  } catch (err) {
    console.log("err: ", err);
    return err;
  }
};
export const patchCartData = async (cartProdId, obj, userId) => {
  try {
    return await axios.patch(`${BaseURL}/${cartProdId}/${userId}`, obj);
  } catch (err) {
    console.log("err: ", err);
    return err;
  }
};
export const deleteCartData = async (cartId, productId) => {
  try {
    return await axios.delete(`${BaseURL}/${cartId}/product/${productId}`);
  } catch (err) {
    console.log("err: ", err);
    return err;
  }
};
