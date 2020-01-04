import { createContext } from "react";

const appContext = createContext({
  categories: [],
  products: [],
  listCategories: () => {},
  addCategory: () => {},
  updateCategory: () => {},
  removeCategory: () => {},
  listProducts: () => {},
  addProduct: () => {},
  removeProduct: () => {},
  updateProduct: () => {}
});

export default appContext;
