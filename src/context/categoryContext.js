import { createContext } from "react";

const categoryContext = createContext({
  categories: [],
  list: () => {},
  add: () => {},
  update: () => {},
  remove: () => {}
});

export default categoryContext;
