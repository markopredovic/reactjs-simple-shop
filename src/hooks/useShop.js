import { useEffect, useReducer } from "react";
import productApi from "../api/productApi";
import shopReducer from "../reducers/shopReducer";
import {
  PRODUCTS_LIST,
  ADD_TO_CART,
  GET_CART_PRODUCTS,
  DELETE_CART_ITEM
} from "../types";
import * as utility from "../helpers/utility";

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

  const addToCart = product => {
    const cartProducts = utility.getSessionStorageItem("cart");
    let updatedCartProducts = null;
    if (cartProducts.filter(item => item.id === product.id).length > 0) {
      updatedCartProducts = cartProducts.map(el =>
        el.id === product.id ? { ...el, qty: el.qty + 1 } : el
      );
    } else {
      updatedCartProducts = [...cartProducts, product];
    }

    console.log("updatedCartProducts", updatedCartProducts);

    utility.setSessionStorageItem("cart", updatedCartProducts);
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const getCart = () => {
    const cartProducts = utility.getSessionStorageItem("cart");
    dispatch({ type: GET_CART_PRODUCTS, payload: cartProducts });
    return cartProducts;
  };

  const deleteMinicartItem = id => {
    console.log("use shop - delete minicart item");
    const cartProducts = utility.getSessionStorageItem("cart");
    let updatedCartProducts = cartProducts.filter(product => product.id !== id);
    utility.setSessionStorageItem("cart", updatedCartProducts);
    dispatch({ type: DELETE_CART_ITEM, payload: id });
  };

  return {
    products: state.products,
    cart: state.cart,
    getProductsList,
    getCart,
    addToCart,
    deleteMinicartItem
  };
};

export default useShop;
