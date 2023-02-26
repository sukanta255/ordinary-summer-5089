import axios from "axios";

const BaseURL = `https://enchanting-gold-tie.cyclic.app/`;

export const getFullData = async (url) => {
  try {
    return await axios.get(`${BaseURL}${url}`);
  } catch (err) {
    console.log("err: ", err);
  }
};

export const getData = async (url) => {
  try {
    return await axios.get(`${BaseURL}${url}`);
  } catch (err) {
    console.log("err: ", err);
  }
};

export const postData = async (url, obj) => {
  try {
    return await axios.post(`${BaseURL}${url}`, obj);
  } catch (err) {
    console.log("err: ", err);
  }
};
export const patchData = async (url, id, obj) => {
  try {
    return await axios.patch(`${BaseURL}${url}/${id}`, obj);
  } catch (err) {
    console.log("err: ", err);
  }
};
export const deleteData = async (url, id) => {
  try {
    return await axios.delete(`${BaseURL}${url}/${id}`);
  } catch (err) {
    console.log("err: ", err);
  }
};
