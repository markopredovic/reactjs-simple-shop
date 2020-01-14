import React, { useState } from "react";
import ProductsList from "./ProductsList";
import AppContext from "../../context/appContext";
import useProduct from "../../hooks/useProduct";
import AddProductForm from "./AddProductForm";
import EditProductForm from "./EditProductForm";
import Alert from "react-bootstrap/Alert";

const ProductPage = () => {
  const {
    state,
    showProductRemovedMessage,
    hideProductRemovedMessage,
    getList,
    add,
    remove,
    update
  } = useProduct();

  const [product, setProduct] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);

  const handleEditProduct = editProduct => {
    setShowEditModal(true);
    setProduct(editProduct);
  };

  return (
    <AppContext.Provider
      value={{
        state,
        showProductRemovedMessage,
        hideProductRemovedMessage,
        getList,
        add,
        remove,
        update,
        handleEditProduct
      }}
    >
      {showProductRemovedMessage && (
        <Alert variant="danger">Product is removed!</Alert>
      )}
      <AddProductForm />
      <ProductsList />
      <EditProductForm product={product} showEditModal={showEditModal} />
    </AppContext.Provider>
  );
};

export default ProductPage;
