import axios from "axios";

const BASEURL = "https://koovsbackend.onrender.com/users";

export const signUpAPI = async (userData) => {
  try {
    const res = await axios.post(`${BASEURL}/register`, userData);
    if (res.status === 200) {
      return { status: true, data: res.data };
    }
  } catch (error) {
    if (error.response.status !== 200) {
      return { status: false, error: error.response.data.msg };
    }
  }
};

export const LoginAPI = async (userData) => {
  try {
    const res = await axios.post(`${BASEURL}/login`, userData);
    if (res.status === 200) {
      return { status: true, data: res.data };
    }
  } catch (error) {
    console.log("error: ", error);
    if (error.response.status !== 200) {
      return { status: false, error: error.response.data };
    }
  }
};
