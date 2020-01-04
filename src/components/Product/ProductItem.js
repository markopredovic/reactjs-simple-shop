import React from "react";
import { FaEdit, FaTimes } from "react-icons/fa";

const ProductItem = ({ name, categoryName, description, price }) => {
  return (
    <tr>
      <td>{name}</td>
      <td>{categoryName}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td className="text-center text-warning">
        <FaEdit />
      </td>
      <td className="text-center text-danger">
        <FaTimes />
      </td>
    </tr>
  );
};

export default ProductItem;
