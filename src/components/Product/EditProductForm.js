import React, { useState, useContext, useEffect } from "react";
import AppContext from "../../context/appContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import uuid from "uuid";
import { storage } from "../../firebase";
import Toast from "react-bootstrap/Toast";
import { FaTimes } from "react-icons/fa";

const EditProductForm = ({ showEditModal, product }) => {
  const context = useContext(AppContext);

  const [show, setShow] = useState(showEditModal);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [categoryId, setCategoryId] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [productImageFile, setProductImageFile] = useState(null);
  const [productImageUrl, setProductImageUrl] = useState("");
  const [errors, setErrors] = useState({});
  const [addLoading, setAddLoading] = useState(false);
  const [showToastMessage, setShowToastMessage] = useState(false);
  const [showImageUpload, setShowImageUpload] = useState(false);

  useEffect(() => {
    setShow(showEditModal);
  }, [context]);

  useEffect(() => {
    setName(product ? product.name : "");
    setDescription(product ? product.description : "");
    setCategoryId(product ? product.categoryId : null);
    setCategoryName(product ? product.categoryName : "");
    setPrice(product ? product.price : 0);
    setProductImageUrl(product ? product.productImageUrl : null);
  }, [product]);

  const showModal = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setShowToastMessage(false);
  };

  const _validate = () => {
    let _errors = {};

    if (name.trim() === "") {
      _errors.name = "Enter Product Name";
    }

    if (categoryId === "") {
      _errors.category = "Select Product Category";
    }

    if (price === 0) {
      _errors.price = "Enter Product Price";
    }

    return _errors;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      let _errors = _validate();

      if (Object.keys(_errors).length === 0) {
        setAddLoading(true);

        if (productImageFile) {
          const uploadTask = storage
            .ref(`images/${productImageFile.name}`)
            .put(productImageFile);

          uploadTask.on(
            "state_changed",
            snapshot => {},
            error => {
              console.log(error);
            },
            () => {
              // complete function ....
              storage
                .ref("images")
                .child(productImageFile.name)
                .getDownloadURL()
                .then(url => {
                  const updateProduct = {
                    id: product.id,
                    db_node_name: product.db_node_name,
                    name,
                    productImageUrl: url,
                    categoryId,
                    categoryName,
                    description,
                    price
                  };

                  context.update(updateProduct);
                  setAddLoading(false);
                  setShowToastMessage(true);
                });
            }
          );
        } else {
          const updateProduct = {
            id: product.id,
            db_node_name: product.db_node_name,
            name,
            productImageUrl,
            categoryId,
            categoryName,
            description,
            price
          };

          await context.update(updateProduct);
          setAddLoading(false);
          setShowToastMessage(true);
        }
      } else {
        setErrors(_errors);
        setShowToastMessage(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleCategoryChange = e => {
    setCategoryId(e.target.value);
    setCategoryName(e.target[e.target.selectedIndex].text);
  };

  const handleProductImage = e => {
    const _image = e.target.files[0];
    setProductImageFile(_image);
  };

  const handleShowImageUpload = () => {
    setShowImageUpload(true);
    setProductImageUrl("");
  };

  const productCategories = context.state.categories;

  return (
    <div className="l-edit-product">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                name="product-name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              {errors && errors.name && (
                <small className="text-danger">{errors.name}</small>
              )}
            </div>
            <div className="form-group l-product-image">
              <label style={{ marginRight: "10px" }}>Product Image</label>
              {product && product.productImageUrl && !showImageUpload && (
                <>
                  <img src={product.productImageUrl} width="50px" alt="" />
                  <FaTimes
                    style={{
                      padding: "2px",
                      fontSize: "20px",
                      color: "red",
                      cursor: "pointer"
                    }}
                    onClick={handleShowImageUpload}
                  />
                </>
              )}
              {((product && !product.productImageUrl) || showImageUpload) && (
                <input
                  type="file"
                  className="form-control-file"
                  name="product-image"
                  onChange={handleProductImage}
                />
              )}
            </div>
            <div className="form-group">
              <label>Category</label>
              <select
                className="form-control"
                name="product-category"
                value={categoryId}
                onChange={handleCategoryChange}
              >
                <option disabled value="">
                  Select category:
                </option>
                {productCategories &&
                  productCategories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
              {errors && errors.category && (
                <small className="text-danger">{errors.category}</small>
              )}
            </div>
            <div className="form-group">
              <label>Price</label>
              <input
                type="text"
                className="form-control"
                name="product-price"
                value={price}
                onChange={e => setPrice(parseInt(e.target.value))}
              />
              {errors && errors.price && (
                <small className="text-danger">{errors.price}</small>
              )}
            </div>
            <div className="form-group">
              <label>Description</label>
              <textarea
                className="form-control"
                name="product-description"
                rows="3"
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>
            <Toast
              show={showToastMessage}
              onClose={() => setShowToastMessage(false)}
            >
              <Toast.Header className="bg-success">
                <strong className="mr-auto text-white">Product edited!</strong>
              </Toast.Header>
            </Toast>
            <div className="l-action">
              <Button type="submit" className="btn btn-primary">
                {addLoading && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                Edit
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

export default EditProductForm;
