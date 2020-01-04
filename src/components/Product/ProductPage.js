import React from "react";
import ProductsList from "./ProductsList";
import AppContext from "../../context/appContext";
import useProduct from "../../hooks/useProduct";
import AddProductForm from "./AddProductForm";

const ProductPage = () => {
  const { state, getList, add } = useProduct();

  return (
    <AppContext.Provider value={{ state, getList, add }}>
      <AddProductForm />
      <ProductsList />
    </AppContext.Provider>
  );
};

export default ProductPage;
