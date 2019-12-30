import { PRODUCT_ADD, PRODUCTS_LIST } from "../types";

const productReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTS_LIST:
      return {
        ...state,
        products: action.payload
      };
    case PRODUCT_ADD:
      return addProduct(state, action.payload);
    default:
      return state;
  }
};

export default productReducer;

const addProduct = (state, product) => {
  return {
    ...state,
    products: [...state.products, product]
  };
};
