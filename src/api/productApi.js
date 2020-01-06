import axios from "axios";
const BASE_URL = "https://react-simple-ecommerce-shop.firebaseio.com";

export default {
  add: product => {
    return axios.post(`${BASE_URL}/products.json`, product);
  },
  getList: () => {
    return axios.get(`${BASE_URL}/products.json`);
  },
  remove: db_node_name => {
    console.log("REMOVE PRODUCT", db_node_name);
    return axios.delete(`${BASE_URL}/products/${db_node_name}.json`);
  }
};
