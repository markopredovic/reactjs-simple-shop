import { useReducer, useEffect } from "react";
import shopReducer from "../reducers/shopReducer";
import * as utility from "../helpers/utility";
import { GET_CART_PRODUCTS } from "../types";

const useMinicart = () => {
  const initialState = {
    cart: []
  };

  const [state, dispatch] = useReducer(shopReducer, initialState);

  useEffect(() => {}, []);

  const getCart = () => {
    const cartProducts = utility.getSessionStorageItem("cart");
    dispatch({ type: GET_CART_PRODUCTS, payload: cartProducts });
    return cartProducts;
  };

  return {
    cart: state.cart,
    getCart
  };
};

export default useMinicart;
