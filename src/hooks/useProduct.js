import { useEffect } from "react";
import productApi from "../api/productApi";
import categoryApi from "../api/categoryApi";
import { useReducer } from "react";
import productReducer from "../reducers/productReducer";
import {
  PRODUCT_ADD,
  PRODUCTS_LIST,
  GET_ALL_CATEGORIES,
  PRODUCT_REMOVE,
  PRODUCT_UPDATE
} from "../types";

const useProduct = () => {
  const initialState = {
    products: []
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  useEffect(() => {
    getCategoriesList();
  }, []);

  const getList = async () => {
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

  const getCategoriesList = async () => {
    const _categories = await categoryApi.getCategories();

    dispatch({ type: GET_ALL_CATEGORIES, payload: _categories });
  };

  const add = async product => {
    const response = await productApi.add(product);

    const updateProduct = {
      ...product,
      db_node_name: response.data.name
    };

    dispatch({ type: PRODUCT_ADD, payload: updateProduct });
  };

  const remove = async db_node_name => {
    await productApi.remove(db_node_name);

    dispatch({ type: PRODUCT_REMOVE, payload: db_node_name });
  };

  const update = async updatedProduct => {
    await productApi.update(updatedProduct);

    dispatch({ type: PRODUCT_UPDATE, payload: updatedProduct });
  };

  return {
    state,
    getList,
    add,
    remove,
    update
  };
};

export default useProduct;
