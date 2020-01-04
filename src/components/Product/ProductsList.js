import React, { useContext, useEffect } from "react";
import AppContext from "../../context/appContext";
import ProductItem from "./ProductItem";
import Table from "react-bootstrap/Table";

const ProductsList = () => {
  const context = useContext(AppContext);

  useEffect(() => {
    // load product
    context.getList();
  }, []);

  const products =
    context.state &&
    context.state.products.map(product => (
      <ProductItem key={product.id} {...product} />
    ));

  return (
    <div className="l-products-list">
      <Table striped bordered hover responsive>
        <thead className="bg-primary text-white">
          <tr>
            <th>Name</th>
            <th>Category</th>
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
