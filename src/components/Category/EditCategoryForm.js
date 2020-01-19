import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../context/appContext";
import Modal from "react-bootstrap/Modal";
import Spinner from "react-bootstrap/Spinner";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";

const EditCategoryForm = ({ currentCategory }) => {
  const context = useContext(AppContext);
  const [errors, setErrors] = useState({});
  const [showEditLoader, setShowEditLoader] = useState(false);
  const [isEdited, setIsEdited] = useState(false);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (currentCategory) {
      setName(currentCategory.name);
      setDescription(currentCategory.description);
    }
  }, [currentCategory]);

  const handleSubmit = async e => {
    e.preventDefault();

    const _errors = _validate();

    if (Object.keys(_errors).length === 0) {
      setErrors({});
      setIsEdited(false);
      setShowEditLoader(true);

      const editedCategory = {
        id: currentCategory.id,
        db_node_name: currentCategory.db_node_name,
        name,
        description
      };

      await context.update(editedCategory);
      setIsEdited(true);
      setShowEditLoader(false);
    } else {
      setErrors(_errors);
    }
  };

  const _validate = () => {
    let _errors = {};

    return _errors;
  };

  const handleClose = () => {
    context.setCurrentCategory(null);
  };

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
