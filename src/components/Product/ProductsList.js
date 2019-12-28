import React, { useContext } from "react";
import ProductsContext from "../../context/productsContext";
import ProductItem from "./ProductItem";

const ProductsList = () => {
  const context = useContext(ProductsContext);

  const products = context.products.map(product => (
    <ProductItem key={product.id} {...product} />
  ));

  return <div className="l-products-list">{products}</div>;
};

export default ProductsList;
