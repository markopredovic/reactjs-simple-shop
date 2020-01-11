import { createContext } from "react";

const appContext = createContext({
  categories: [],
  products: [],
  isAuthenticated: false,
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
