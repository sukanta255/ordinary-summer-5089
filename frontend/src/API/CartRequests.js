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

export const postCartData = async (obj, token) => {
  try {
    const res = await axios.post(`${BaseURL}`, obj, {
      headers: {
        Authorization: token,
      },
    });
    console.log("res: ", res);
    return { status: true, data: res.data.msg };
  } catch (error) {
    console.log("err: ", error);
    if (error.response) {
      return { status: false, error: error.response.data.msg };
    }
    return { status: false, error: error.message };
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
