import React, { useContext, useState, useEffect } from "react";
import CategoryContext from "../../context/categoryContext";
import { FaTimesCircle, FaEdit } from "react-icons/fa";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Toast from "react-bootstrap/Toast";

const CategoryItem = ({
  id,
  db_node_name,
  name,
  description,
  removeCategory
}) => {
  const context = useContext(CategoryContext);

  const [showEditModal, setShowEditModal] = useState(false);

  const [cname, setName] = useState();
  const [cdescription, setDescription] = useState();
  const [error, setError] = useState();
  const [addLoading, setAddLoading] = useState(false);
  const [showToastMessage, setShowToastMessage] = useState(false);

  useEffect(() => {
    setName(name);
    setDescription(description);
  }, [name, description]);

  const handleClose = () => {
    setShowEditModal(false);
  };

  const editCategory = () => {
    setShowEditModal(true);
  };

  const validate = () => {
    let _errors = {};

    if (cname.trim() === "") {
      _errors.name = "Category name empty!";
    }

    return _errors;
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const _errors = validate();

      if (Object.keys(_errors).length === 0) {
        setAddLoading(true);
        setShowToastMessage(false);
        e.target["category-name"].value = "";
        e.target["category-description"].value = "";
        let updatedCategory = {
          id,
          db_node_name,
          name: cname,
          description: cdescription
        };
        await context.update(updatedCategory);
        setAddLoading(false);
        setShowToastMessage(true);
      } else {
        setError(_errors.name);
      }
    } catch (err) {
      console.log("ADD CATEGORY ERROR", err);
    }
  };

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td className="text-center h4">
          <FaEdit onClick={editCategory} className="text-warning" />
        </td>
        <td className="text-center h4">
          <FaTimesCircle onClick={removeCategory} className="text-danger" />
        </td>
      </tr>
      <Modal show={showEditModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Category name</label>
              <input
                type="text"
                className="form-control"
                name="category-name"
                value={cname}
                onChange={e => setName(e.target.value)}
              />
              {error && <small className="text-danger">{error}</small>}
            </div>
            <div className="form-group">
              <label>Category description</label>
              <textarea
                className="form-control"
                name="category-description"
                rows="3"
                value={cdescription}
                onChange={e => setDescription(e.target.value)}
              ></textarea>
            </div>
            <Toast
              show={showToastMessage}
              onClose={() => setShowToastMessage(false)}
            >
              <Toast.Header className="bg-success text-white">
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto">Category updated!</strong>
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
                Update
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
    </>
  );
};

export default CategoryItem;
