import React, { useState, useContext } from "react";
import ProductContext from "../../context/productsContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import uuid from "uuid";

const AddProductForm = () => {
  const context = useContext(ProductContext);

  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);

  const showModal = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = e => {
    e.preventDefault();

    try {
      const product = {
        id: uuid.v4(),
        name,
        description,
        price
      };

      context.add(product);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="l-add-product">
      <div className="l-action d-flex justify-content-end mb-4">
        <Button onClick={showModal}>Add Product</Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="product-name"
                onInput={e => setName(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                name="product-price"
                onInput={e => setPrice(parseInt(e.target.value))}
              />
            </div>
            <div className="form-group">
              <label>description</label>
              <textarea
                className="form-control"
                name="product-description"
                rows="3"
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="l-action">
              <Button type="submit" className="btn btn-primary">
                Add
              </Button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddProductForm;
