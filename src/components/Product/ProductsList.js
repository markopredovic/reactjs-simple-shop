import React, { useContext, useEffect } from "react";
import ProductsContext from "../../context/productsContext";
import ProductItem from "./ProductItem";
import Table from "react-bootstrap/Table";

const ProductsList = () => {
  const context = useContext(ProductsContext);

  useEffect(() => {
    // load product
    context.getList();
  }, []);

  const products = context.products.map(product => (
    <ProductItem key={product.id} {...product} />
  ));

  return (
    <div className="l-products-list">
      <Table striped bordered hover responsive>
        <thead className="bg-primary text-white">
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th className="text-center">Edit</th>
            <th className="text-center">Remove</th>
          </tr>
        </thead>
        <tbody>{products}</tbody>
      </Table>
    </div>
  );
};

export default ProductsList;
