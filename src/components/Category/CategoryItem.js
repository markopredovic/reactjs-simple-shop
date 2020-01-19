import React, { useContext, useState, useEffect } from "react";
import AppContext from "../../context/appContext";
import { FaTimesCircle, FaEdit } from "react-icons/fa";
import MySpinner from "../UI/Layout/MySpinner";

const CategoryItem = ({ id, db_node_name, name, description }) => {
  const context = useContext(AppContext);

  const [cname, setName] = useState();
  const [cdescription, setDescription] = useState();
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setName(name);
    setDescription(description);
  }, [name, description]);

  const handleRemove = async () => {
    const _couldRemove = _validateRemove();

    if (_couldRemove) {
      context.setCouldRemoveCategory(true);
      setShowLoader(true);
      await context.remove(db_node_name);
      setShowLoader(false);
    } else {
      context.setCouldRemoveCategory(false);
    }
  };

  const handleEdit = () => {
    console.log("EDIT CATEGORY");
    const currentCategory = {
      id,
      name,
      description,
      db_node_name
    };
    context.setCurrentCategory(currentCategory);
  };

  const _validateRemove = () => {
    let _couldRemove = true;

    const productsInCurrentCategory = context.products.filter(
      product => product.categoryId === id
    );

    if (productsInCurrentCategory.length > 0) {
      _couldRemove = false;
      console.log('CATEGORY COULDN"T REMOVE!!!');
    }

    return _couldRemove;
  };

  return (
    <>
      <tr>
        <td>{name}</td>
        <td>{description}</td>
        <td className="text-center h4">
          <FaEdit onClick={handleEdit} className="text-warning" />
        </td>
        <td className="text-center h4">
          <FaTimesCircle onClick={handleRemove} className="text-danger" />
        </td>
      </tr>
      {showLoader && <MySpinner />}
    </>
  );
};

export default CategoryItem;
