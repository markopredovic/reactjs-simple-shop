import { useState, useContext } from "react";
import AppContext from "../context/appContext";
import uuid from "uuid";

const useAddCategoryForm = () => {
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

  return [
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
  ];
};

export default useAddCategoryForm;
