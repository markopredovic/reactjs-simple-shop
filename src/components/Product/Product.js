import React from "react";
import ProductsList from "./ProductsList";
import ProductsContext from "../../context/productsContext";
import useProduct from "../../hooks/useProduct";

const Product = () => {
  const { state } = useProduct();

  return (
    <ProductsContext.Provider value={{ products: state.products }}>
      <ProductsList />
    </ProductsContext.Provider>
  );
};

export default Product;
