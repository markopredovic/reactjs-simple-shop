import axios from "axios";
const BASE_URL = "https://react-simple-ecommerce-shop.firebaseio.com";

const loginApi = {
  login: credentials => {
    return axios.post(`${BASE_URL}/login.json`, credentials);
  },
  logout: () => {
    return axios.post(`${BASE_URL}/logout.json`, { logout: true });
  }
};

export default loginApi;
