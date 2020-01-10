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
    return axios.delete(`${BASE_URL}/products/${db_node_name}.json`);
  },
  update: product => {
    return axios.put(
      `${BASE_URL}/products/${product.db_node_name}.json`,
      product
    );
  }
};
