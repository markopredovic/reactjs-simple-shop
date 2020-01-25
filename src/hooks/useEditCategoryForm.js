import { useEffect, useState, useContext } from "react";
import AppContext from "../context/appContext";

const useEditCategoryForm = currentCategory => {
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

  return [
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
  ];
};

export default useEditCategoryForm;
