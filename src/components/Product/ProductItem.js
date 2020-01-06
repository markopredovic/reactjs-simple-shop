import React from "react";
import { FaEdit, FaTimesCircle } from "react-icons/fa";

const ProductItem = ({
  name,
  db_node_name,
  productImageUrl,
  categoryName,
  description,
  price,
  removeProduct
}) => {
  return (
    <tr>
      <td>{name}</td>
      <td>
        <img src={productImageUrl} alt="" width="80px" />
      </td>
      <td>{categoryName}</td>
      <td>{description}</td>
      <td>{price}</td>
      <td className="text-center text-warning h4">
        <FaEdit style={{ cursor: "pointer" }} />
      </td>
      <td className="text-center text-danger h4">
        <FaTimesCircle onClick={removeProduct} style={{ cursor: "pointer" }} />
      </td>
    </tr>
  );
};

export default ProductItem;
