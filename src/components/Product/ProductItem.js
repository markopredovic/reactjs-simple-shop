import React, { useContext } from "react";
import AppContext from "../../context/appContext";
import { FaEdit, FaTimesCircle } from "react-icons/fa";

const ProductItem = ({
  id,
  name,
  db_node_name,
  productImageUrl,
  categoryId,
  categoryName,
  description,
  price,
  removeProduct
}) => {
  const context = useContext(AppContext);

  const handleEditProduct = () => {
    const _product = {
      id,
      name,
      db_node_name,
      productImageUrl,
      categoryId,
      categoryName,
      description,
      price
    };
    context.handleEditProduct(_product);
  };

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>
          <img src={productImageUrl} alt="" width="80px" />
        </td>
        <td>{categoryName}</td>
        <td>{description}</td>
        <td>{price}</td>
        <td className="text-center text-warning h4">
          <FaEdit onClick={handleEditProduct} style={{ cursor: "pointer" }} />
        </td>
        <td className="text-center text-danger h4">
          <FaTimesCircle
            onClick={removeProduct}
            style={{ cursor: "pointer" }}
          />
        </td>
      </tr>
    </>
  );
};

export default ProductItem;
