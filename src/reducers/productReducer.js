import { PRODUCT_ADD, PRODUCTS_LIST, GET_ALL_CATEGORIES } from "../types";

const productReducer = (state, action) => {
  switch (action.type) {
    case PRODUCTS_LIST:
      return getProductsList(state, action.payload);
    case GET_ALL_CATEGORIES:
      return getAllCategories(state, action.payload);
    case PRODUCT_ADD:
      return addProduct(state, action.payload);
    default:
      return state;
  }
};

export default productReducer;

const getProductsList = (state, productsObj) => {
  let _products = [];

  _products = Object.keys(productsObj).map(el => {
    let _product = { ...productsObj[el], db_node_name: el };
    return _product;
  });

  console.log("REDUCER PRODUCTS LIST", _products);

  return {
    ...state,
    products: _products
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
