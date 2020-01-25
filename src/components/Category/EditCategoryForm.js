import React from "react";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import useEditCategoryForm from "../../hooks/useEditCategoryForm";

const EditCategoryForm = ({ currentCategory }) => {
  const [
    name,
    setName,
    description,
    setDescription,
    errors,
    setErrors,
    showEditLoader,
    setShowEditLoader,
    isEdited,
    setIsEdited,
    handleSubmit,
    handleClose,
    context
  ] = useEditCategoryForm(currentCategory);

  return (
    <div className="l-edit-category">
      <Modal show={context && context.isEditCategory} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {isEdited && (
            <Alert
              variant="info"
              onClose={() => setIsEdited(false)}
              dismissible
            >
              <Alert.Heading>Category changed!</Alert.Heading>
            </Alert>
          )}
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Category name</label>
              <input
                type="text"
                className="form-control"
                name="category-name"
                value={name}
                onChange={e => setName(e.target.value)}
              />
              {errors && <small className="text-danger">{errors.name}</small>}
            </div>
            <div className="form-group">
              <label>Category description</label>
              <textarea
                className="form-control"
                name="category-description"
                rows="3"
                value={description}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>
            <div className="l-action">
              <Button type="submit" className="btn btn-primary">
                {showEditLoader && (
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                )}
                Update
              </Button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {showEditLoader && (
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
            )}
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default EditCategoryForm;
