import {
  PRODUCT_ADD,
  PRODUCTS_LIST,
  GET_ALL_CATEGORIES,
  PRODUCT_REMOVE,
  PRODUCT_UPDATE
} from "../types";

const productReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTS_LIST:
      return getProductsList(state, action.payload);
    case GET_ALL_CATEGORIES:
      return getAllCategories(state, action.payload);
    case PRODUCT_ADD:
      return addProduct(state, action.payload);
    case PRODUCT_REMOVE:
      return removeProduct(state, action.payload);
    case PRODUCT_UPDATE:
      return updateProduct(state, action.payload);
    default:
      return state;
  }
};

export default productReducer;

const getProductsList = (state, products) => {
  return {
    ...state,
    products: products
  };
};

const getAllCategories = (state, categoriesObj) => {
  if (!categoriesObj) return [];
  const categories = Object.keys(categoriesObj).map(el => ({
    ...categoriesObj[el],
    db_node_name: el
  }));
  return {
    ...state,
    categories: [...categories]
  };
};

const addProduct = (state, product) => {
  return {
    ...state,
    products: [...state.products, product]
  };
};

const removeProduct = (state, db_node_name) => {
  const updatedProducts = state.products.filter(
    product => product.db_node_name !== db_node_name
  );

  return {
    ...state,
    products: updatedProducts
  };
};

const updateProduct = (state, updatedProduct) => {
  const updatedProducts = state.products.map(product => {
    if (product.id === updatedProduct.id) {
      return updatedProduct;
    } else return product;
  });

  return {
    ...state,
    products: updatedProducts
  };
};
