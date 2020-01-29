import {
  PRODUCTS_LIST,
  ADD_TO_CART,
  GET_CART_PRODUCTS,
  DELETE_CART_ITEM
} from "../types";

const shopReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTS_LIST:
      return getProductsList(state, action.payload);
    case ADD_TO_CART:
      return addToCart(state, action.payload);
    case GET_CART_PRODUCTS:
      return getCartProducts(state, action.payload);
    case DELETE_CART_ITEM:
      return deleteCartItem(state, action.payload);
    default:
      return state;
  }
};

const getProductsList = (state, products) => {
  return {
    ...state,
    products
  };
};

const addToCart = (state, product) => {
  console.log("reducer product", product);

  let updatedCart = null;

  if (state.cart.filter(item => item.id === product.id).length > 0) {
    updatedCart = state.cart.map(el =>
      el.id === product.id ? { ...el, qty: el.qty + 1 } : el
    );
  } else {
    updatedCart = [...state.cart, product];
  }

  return {
    ...state,
    cart: updatedCart
  };
};

const getCartProducts = (state, cartProducts) => {
  return {
    ...state,
    cart: cartProducts
  };
};

const deleteCartItem = (state, id) => {
  let updatedCart = state.cart.filter(item => item.id !== id);
  return {
    ...state,
    cart: updatedCart
  };
};

export default shopReducer;
