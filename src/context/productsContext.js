import { createContext } from "react";

const productsContext = createContext({
  products: [],
  list: () => {},
  add: () => {},
  remove: () => {}
});

export default productsContext;
