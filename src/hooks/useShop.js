import { useEffect, useReducer } from "react";
import productApi from "../api/productApi";
import categoryApi from "../api/categoryApi";
import shopReducer from "../reducers/shopReducer";
import { PRODUCTS_LIST } from "../types";

const useShop = () => {
  const initialState = {
    products: [],
    cart: []
  };

  const [state, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() => {
    getProductsList();
  }, []);

  const getProductsList = async () => {
    const response = await productApi.getList();
    let productsList = [];

    if (response.data) {
      productsList = Object.keys(response.data).map(el => {
        let product = {
          ...response.data[el],
          db_node_name: el
        };

        return product;
      });
    }

    dispatch({ type: PRODUCTS_LIST, payload: productsList });
  };

  return {
    products: state.products,
    cart: state.cart,
    getProductsList
  };
};

export default useShop;
