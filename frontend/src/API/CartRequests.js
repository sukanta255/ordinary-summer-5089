import axios from "axios";

const BaseURL = `https://koovsbackend.onrender.com/cart`;

export const getCartData = async (token) => {
  try {
    const res = await axios.get(BaseURL, { headers: { Authorization: token } });
    return { status: true, data: res.data };
  } catch (error) {
    return { status: false, error: error.response.data.msg };
  }
};

export const postCartData = async (obj, token) => {
  try {
    const res = await axios.post(`${BaseURL}`, obj, {
      headers: {
        Authorization: token,
      },
    });
    return { status: true, data: res.data.msg };
  } catch (error) {
    console.log("err: ", error);
    if (error.response) {
      return { status: false, error: error.response.data.msg };
    }
    return { status: false, error: error.message };
  }
};
export const patchCartData = async (cartProdId, obj) => {
  try {
    const res = await axios.patch(`${BaseURL}/${cartProdId}`, obj);
    return { status: true, data: res.data.msg };
  } catch (error) {
    if (error.response) {
      return { status: false, error: error.response.data.msg };
    }
    return { status: false, error: error.message };
  }
};
export const deleteCartData = async (cartId, productId, token) => {
  try {
    const res = await axios.delete(`${BaseURL}/${cartId}/product/${productId}`, { headers: { Authorization: token } });
    return { status: true, data: res.data.msg };
  } catch (error) {
    console.log("err: ", error);
    if (error.response) {
      return { status: false, error: error.response.data.msg };
    }
    return { status: false, error: error.message };
  }
};
