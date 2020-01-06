import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../context/appContext";
import ProductItem from "./ProductItem";
import Table from "react-bootstrap/Table";
import MySpinner from "../UI/Layout/MySpinner";

const ProductsList = () => {
  const context = useContext(AppContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      await context.getList();
      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleRemove = async db_node_name => {
    setLoading(true);
    await context.remove(db_node_name);
    setLoading(false);
  };

  const products =
    context.state &&
    context.state.products.map(product => (
      <ProductItem
        key={product.id}
        {...product}
        removeProduct={() => handleRemove(product.db_node_name)}
      />
    ));

  return (
    <div className="l-products-list">
      <Table striped bordered hover responsive>
        <thead className="bg-primary text-white">
          <tr>
            <th>Name</th>
            <th>Image</th>
            <th>Category</th>
            <th>Description</th>
            <th>Price</th>
            <th className="text-center">Edit</th>
            <th className="text-center">Remove</th>
          </tr>
        </thead>
        <tbody>{products}</tbody>
      </Table>
      {loading && <MySpinner />}
    </div>
  );
};

export default ProductsList;
