import React from "react";

const ProductItem = ({ name, description, price }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td>Edit</td>
      <td>Remove</td>
    </tr>
  );
};

export default ProductItem;
