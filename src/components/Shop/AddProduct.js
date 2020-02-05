import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../context/appContext";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AddProduct = ({ product }) => {
  const context = useContext(AppContext);

  const [showMessageModal, setShowMessageModal] = useState(false);

  const handleAddToCart = () => {
    console.log("add to cart handler");
    product.qty = 1;
    context.addToCart(product);
    setShowMessageModal(true);
  };

  const handleClose = () => setShowMessageModal(false);

  return (
    <>
      <div className="l-add-product">
        <div className="m-add-product text-center">
          <div className="l-img">
            {product && product.productImageUrl ? (
              <img src={product.productImageUrl} alt="" />
            ) : (
              <img
                src={`https://placehold.it/150x200/?text=${encodeURIComponent(
                  "no image"
                )}`}
                alt=""
              />
            )}
          </div>
          <div className="l-content">
            <div className="l-name h5">{product && product.name}</div>
            <div className="l-price text-info h4">{`${product &&
              product.price}$`}</div>
          </div>
          <div className="l-action">
            <button
              onClick={handleAddToCart}
              className="btn btn-primary btn-lg"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
      <Modal show={showMessageModal} onHide={handleClose}>
        <Modal.Header closeButton className="bg-success">
          <Modal.Title className="text-white">Add to cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>Product {`"${product.name}"`} added to cart!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProduct;
