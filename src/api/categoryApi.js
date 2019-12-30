import axios from "axios";
const BASE_URL = "https://react-simple-ecommerce-shop.firebaseio.com";

const api = {
  getCategories: () => {
    return axios
      .get(`${BASE_URL}/categories.json`)
      .then(res => res.data)
      .catch(err => {
        throw new Error(err.message);
      });
  },
  addCategory: category => {
    return axios.post(`${BASE_URL}/categories.json`, category);
  },
  removeCategory: db_node_name => {
    return axios.delete(`${BASE_URL}/categories/${db_node_name}.json`);
  },
  updateCategory: updatedCategory => {
    return axios.put(
      `${BASE_URL}/categories/${updatedCategory.db_node_name}.json`,
      updatedCategory
    );
  }
};

export default api;
