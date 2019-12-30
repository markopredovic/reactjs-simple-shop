import axios from "axios";
const BASE_URL = "https://react-simple-ecommerce-shop.firebaseio.com";

export default {
  add: product => {
    return axios.post(`${BASE_URL}/products.json`, product);
  },
  getList: () => {
    return axios.get(`${BASE_URL}/products.json`);
  }
};
