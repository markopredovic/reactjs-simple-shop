import React from "react";
import ProductsList from "./ProductsList";
import ProductsContext from "../../context/productsContext";
import useProduct from "../../hooks/useProduct";
import AddProductForm from "./AddProductForm";

const ProductPage = () => {
  const { state, getList, add } = useProduct();

  return (
    <ProductsContext.Provider
      value={{ products: state.products, getList, add }}
    >
      <AddProductForm />
      <ProductsList />
    </ProductsContext.Provider>
  );
};

export default ProductPage;
