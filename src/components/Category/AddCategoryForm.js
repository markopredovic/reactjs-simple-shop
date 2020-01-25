import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Alert from "react-bootstrap/Alert";
import useAddCategoryForm from "../../hooks/useAddCategoryForm";

const AddCategoryForm = () => {
  const [
    context,
    name,
    setName,
    description,
    setDescription,
    show,
    setShow,
    addLoading,
    setAddLoading,
    showAddCategory,
    setShowAddCategory,
    error,
    setError,
    handleSubmit,
    handleShow,
    handleClose
  ] = useAddCategoryForm();

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
