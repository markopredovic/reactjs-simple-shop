import React, { useContext, useState } from "react";
import AppContext from "../../context/appContext";
import uuid from "uuid";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";

const AddCategoryForm = () => {
  const context = useContext(AppContext);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [show, setShow] = useState(false);
  const [addLoading, setAddLoading] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);

  const [error, setError] = useState("");

  let data = { name, description };

  const _validate = () => {
    let _errors = {};

    if (name.trim() === "") {
      _errors.name = "Enter category name";
    }

    return _errors;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const _errors = _validate(data);

      if (Object.keys(_errors).length === 0) {
        setAddLoading(true);
        setShowAddCategory(false);
        e.target["category-name"].value = "";
        e.target["category-description"].value = "";
        let newCategory = {
          id: uuid.v4(),
          name: data.name,
          description: data.description
        };
        await context.add(newCategory);
        setAddLoading(false);
        setShowAddCategory(true);
      } else {
        setError(_errors.name);
      }
    } catch (err) {
      console.log("ADD CATEGORY ERROR", err);
    }
  };

  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    if (context.showCategoryRemovedMessage) {
      context.hideCategoryRemovedMessage();
    }
    setShow(false);
    setShowAddCategory(false);
  };

  return (
    <div className="l-add-category">
      <div className="d-flex justify-content-end">
        <Button onClick={handleShow}>Add Category</Button>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {showAddCategory && (
            <Alert
              variant="success"
              onClose={() => setShowAddCategory(false)}
              dismissible
            >
              <span>Category sucessfully Added!!!</span>
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Category name</label>
              <input
                type="text"
                className="form-control"
                name="category-name"
                onInput={e => setName(e.target.value)}
              />
              {error && <small className="text-danger">{error}</small>}
            </div>
            <div className="form-group">
              <label>Category description</label>
              <textarea
                className="form-control"
                name="category-description"
                rows="3"
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>
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

export default AddCategoryForm;
