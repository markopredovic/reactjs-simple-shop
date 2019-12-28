import { useReducer } from "react";
import productReducer from "../reducers/productReducer";

const useProduct = () => {
  const initialState = {
    products: [
      {
        id: 1,
        categoryId: "",
        name: "Prvi product",
        description: "Prvi product description",
        price: 123
      },
      {
        id: 2,
        categoryId: "",
        name: "Drugi product",
        description: "Drugi product description",
        price: 256
      }
    ]
  };

  const [state, dispatch] = useReducer(productReducer, initialState);

  return {
    state
  };
};

export default useProduct;
