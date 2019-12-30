import productApi from "../api/productApi";
import { useReducer } from "react";
import productReducer from "../reducers/productReducer";
import { PRODUCT_ADD, PRODUCTS_LIST } from "../types";

const useProduct = () => {
  const initialState = {
    products: []
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  const getList = async () => {
    const response = await productApi.getList();

    let productsList = Object.keys(response.data).map(el => {
      let product = {
        ...response.data[el],
        db_node_name: el
      };
      return product;
    });

    dispatch({ type: PRODUCTS_LIST, payload: productsList });
  };

  const add = async product => {
    const response = await productApi.add(product);

    const updateProduct = {
      ...product,
      db_node_name: response.data.name
    };

    dispatch({ type: PRODUCT_ADD, payload: updateProduct });
  };

  return {
    state,
    getList,
    add
  };
};

export default useProduct;
