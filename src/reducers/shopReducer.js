import { PRODUCTS_LIST } from "../types";

const shopReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTS_LIST:
      return getProductsList(state, action.payload);
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

export default shopReducer;
